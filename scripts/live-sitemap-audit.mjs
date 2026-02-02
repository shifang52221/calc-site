#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function getArg(name, fallback = null) {
  const prefix = `--${name}=`;
  const raw = process.argv.slice(2).find((a) => a.startsWith(prefix));
  if (!raw) return fallback;
  return raw.slice(prefix.length);
}

function boolArg(name, fallback = false) {
  const v = getArg(name, null);
  if (v == null) return fallback;
  return v === "true" || v === "1" || v === "yes";
}

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(
    d.getHours(),
  )}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function uniq(arr) {
  return [...new Set(arr)];
}

function extractTagContent(html, tagName) {
  const re = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function extractMetaContent(html, nameOrProperty) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=[\"']${nameOrProperty.replace(
      /[-/\\^$*+?.()|[\]{}]/g,
      "\\$&",
    )}[\"'][^>]*>`,
    "ig",
  );
  const tags = html.match(re) || [];
  for (const tag of tags) {
    const m = tag.match(/content=[\"']([^\"']*)[\"']/i);
    if (m) return m[1].trim();
  }
  return null;
}

function extractCanonical(html) {
  const re = /<link[^>]+rel=["']canonical["'][^>]*>/i;
  const m = html.match(re);
  if (!m) return null;
  const href = m[0].match(/href=["']([^"']+)["']/i);
  return href ? href[1].trim() : null;
}

function extractHreflang(html) {
  const re = /<link[^>]+rel=["']alternate["'][^>]*>/gi;
  const tags = html.match(re) || [];
  const out = [];
  for (const tag of tags) {
    const hreflang = tag.match(/hreflang=["']([^"']+)["']/i);
    const href = tag.match(/href=["']([^"']+)["']/i);
    if (hreflang && href) out.push({ hreflang: hreflang[1], href: href[1] });
  }
  return out;
}

function countH1(html) {
  const matches = html.match(/<h1\b/gi) || [];
  return matches.length;
}

function stripHtmlToText(html) {
  let s = html;
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style\b[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ");
  s = s.replace(/<svg\b[\s\S]*?<\/svg>/gi, " ");
  s = s.replace(/<!--[\s\S]*?-->/g, " ");
  s = s.replace(/<[^>]+>/g, " ");
  s = s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
  return s;
}

function countWords(text) {
  if (!text) return 0;
  const cjk =
    (text.match(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g) || [])
      .length;
  const latinWords = text
    .replace(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latinWords;
}

function classifyUrl(url) {
  const u = new URL(url);
  const p = u.pathname;
  const parts = p.split("/").filter(Boolean);
  if (parts.length === 0) return "root";
  const locale = parts[0];
  const rest = `/${parts.slice(1).join("/")}`;
  if (rest.startsWith("/calculators/home-improvement/")) return `${locale}:calc`;
  if (rest.startsWith("/guides/home-improvement/")) return `${locale}:guide`;
  if (rest.startsWith("/resources/")) return `${locale}:resource`;
  return `${locale}:static`;
}

function findMojibake(html) {
  const patterns = [
    /â€™/g,
    /â€œ|â€�/g,
    /â€”|â€“/g,
    /Ã—/g,
    /Ã·/g,
    /Â³|Â²/g,
    /ï»¿/g,
  ];
  const hits = [];
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m.length) hits.push({ pattern: String(re), count: m.length });
  }
  return hits;
}

async function fetchWithTimeout(url, { timeoutMs }) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; homedecorcalc-audit/1.0; +https://homedecorcalc.com)",
        accept: "text/html,application/xhtml+xml",
      },
    });
    const body = await res.text();
    return { res, body };
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const sitemapUrl =
    getArg("sitemapUrl", null) ?? "https://homedecorcalc.com/sitemap.xml";
  const max = Number(getArg("max", "0")) || 0;
  const concurrency = Math.max(1, Number(getArg("concurrency", "10")) || 10);
  const timeoutMs = Math.max(2000, Number(getArg("timeoutMs", "25000")) || 25000);
  const outArg = getArg("out", null);
  const includeBodies = boolArg("includeBodies", false);

  const startedAt = new Date().toISOString();

  const sitemapRes = await fetch(sitemapUrl, {
    headers: { accept: "application/xml,text/xml" },
  });
  if (!sitemapRes.ok) {
    throw new Error(`Failed to fetch sitemap: ${sitemapRes.status}`);
  }
  const sitemapXml = await sitemapRes.text();
  const locs = uniq(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()),
  );

  const urls = max > 0 ? locs.slice(0, max) : locs;
  const urlBatches = chunk(urls, concurrency);

  const results = [];
  for (const batch of urlBatches) {
    const batchResults = await Promise.all(
      batch.map(async (url) => {
        const started = Date.now();
        try {
          const { res, body } = await fetchWithTimeout(url, { timeoutMs });
          const finalUrl = res.url || url;
          const contentType = res.headers.get("content-type");
          const robotsHeader = res.headers.get("x-robots-tag");
          const html = body || "";

          const title = extractTagContent(html, "title");
          const description = extractMetaContent(html, "description");
          const robotsMeta = extractMetaContent(html, "robots");
          const canonical = extractCanonical(html);
          const hreflang = extractHreflang(html);
          const h1Count = countH1(html);
          const mojibake = findMojibake(html);
          const text = stripHtmlToText(html);
          const wordEstimate = countWords(text);
          const jsonLdCount = (html.match(
            /<script[^>]+type=["']application\/ld\+json["'][^>]*>/gi,
          ) || []).length;

          const durationMs = Date.now() - started;
          return {
            url,
            finalUrl,
            type: classifyUrl(url),
            status: res.status,
            ok: res.ok,
            durationMs,
            contentType,
            title,
            titleLen: title ? title.length : 0,
            description,
            descriptionLen: description ? description.length : 0,
            canonical,
            robotsHeader,
            robotsMeta,
            hreflang,
            h1Count,
            jsonLdCount,
            wordEstimate,
            mojibake,
            bodySnippet: includeBodies ? html.slice(0, 2000) : null,
          };
        } catch (err) {
          const durationMs = Date.now() - started;
          return {
            url,
            finalUrl: null,
            type: classifyUrl(url),
            status: null,
            ok: false,
            durationMs,
            error: err && err.message ? err.message : String(err),
          };
        }
      }),
    );
    results.push(...batchResults);
    // Simple progress for long runs.
    process.stdout.write(`Checked ${results.length}/${urls.length}\r`);
  }
  process.stdout.write("\n");

  const endedAt = new Date().toISOString();

  const byType = {};
  for (const r of results) {
    byType[r.type] ??= { total: 0, ok: 0, non200: 0, noTitle: 0, noDesc: 0 };
    byType[r.type].total++;
    if (r.ok) byType[r.type].ok++;
    if (r.status !== 200) byType[r.type].non200++;
    if (!r.title) byType[r.type].noTitle++;
    if (!r.description) byType[r.type].noDesc++;
  }

  const non200 = results.filter((r) => r.status && r.status !== 200);
  const errors = results.filter((r) => !r.ok);

  const noCanonical = results.filter((r) => r.ok && !r.canonical);
  const canonicalMismatch = results.filter((r) => {
    if (!r.ok || !r.canonical) return false;
    try {
      const canon = new URL(r.canonical, r.finalUrl || r.url).toString();
      const final = (r.finalUrl || r.url).toString();
      return canon !== final;
    } catch {
      return true;
    }
  });

  const noIndex = results.filter((r) => {
    const robots = `${r.robotsHeader || ""} ${r.robotsMeta || ""}`.toLowerCase();
    return r.ok && robots.includes("noindex");
  });

  const mojibakeHits = results.filter((r) => r.ok && r.mojibake?.length);

  const titleMap = new Map();
  const descMap = new Map();
  for (const r of results) {
    if (!r.ok) continue;
    if (r.title) {
      const k = r.title.trim();
      titleMap.set(k, [...(titleMap.get(k) || []), r.finalUrl || r.url]);
    }
    if (r.description) {
      const k = r.description.trim();
      descMap.set(k, [...(descMap.get(k) || []), r.finalUrl || r.url]);
    }
  }
  const duplicateTitles = [...titleMap.entries()]
    .filter(([, v]) => v.length > 1)
    .map(([k, v]) => ({ title: k, count: v.length, urls: v.slice(0, 10) }));
  const duplicateDescriptions = [...descMap.entries()]
    .filter(([, v]) => v.length > 1)
    .map(([k, v]) => ({ description: k, count: v.length, urls: v.slice(0, 10) }));

  const veryShort = results
    .filter((r) => r.ok && r.contentType?.includes("text/html"))
    .filter((r) => r.wordEstimate != null && r.wordEstimate < 250)
    .map((r) => ({ url: r.finalUrl || r.url, type: r.type, words: r.wordEstimate }));

  const report = {
    meta: {
      startedAt,
      endedAt,
      sitemapUrl,
      urlCount: urls.length,
      concurrency,
      timeoutMs,
    },
    summary: {
      byType,
      okCount: results.filter((r) => r.ok).length,
      errorCount: errors.length,
      non200Count: non200.length,
      noCanonicalCount: noCanonical.length,
      canonicalMismatchCount: canonicalMismatch.length,
      noIndexCount: noIndex.length,
      mojibakeCount: mojibakeHits.length,
      duplicateTitleGroups: duplicateTitles.length,
      duplicateDescriptionGroups: duplicateDescriptions.length,
      veryShortCount: veryShort.length,
    },
    issues: {
      errors: errors.slice(0, 50),
      non200: non200.slice(0, 50),
      noIndex,
      noCanonical: noCanonical.slice(0, 50),
      canonicalMismatch: canonicalMismatch.slice(0, 50),
      mojibakeHits: mojibakeHits.slice(0, 50),
      duplicateTitles: duplicateTitles.slice(0, 50),
      duplicateDescriptions: duplicateDescriptions.slice(0, 50),
      veryShort: veryShort.slice(0, 100),
    },
    results,
  };

  const out =
    outArg ??
    path.join("docs", "audits", `live-sitemap-audit-${nowStamp()}.json`);
  const outPath = path.resolve(process.cwd(), out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log(`Saved report: ${out}`);
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
