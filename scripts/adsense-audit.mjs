#!/usr/bin/env node
import https from "node:https";
import crypto from "node:crypto";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (compatible; adsense-audit/1.0; +https://homedecorcalc.com)",
            Accept: "text/html,application/xhtml+xml",
          },
        },
        (res) => {
          const status = res.statusCode ?? 0;
          if (status >= 300 && status < 400 && res.headers.location) {
            resolve(fetchText(new URL(res.headers.location, url).toString()));
            return;
          }
          if (status >= 400) {
            reject(new Error(`HTTP ${status} for ${url}`));
            return;
          }
          res.setEncoding("utf8");
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => resolve(data));
        },
      )
      .on("error", reject);
  });
}

function parseSitemapLocs(xmlText) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xmlText))) locs.push(m[1]);
  return locs;
}

function getCanonicalHref(html) {
  const re =
    /<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i;
  const m = re.exec(html);
  return m ? m[1] : null;
}

function getMetaContent(html, metaName) {
  const re = new RegExp(
    `<meta[^>]*\\bname\\s*=\\s*["']${metaName}["'][^>]*\\bcontent\\s*=\\s*["']([^"']+)["'][^>]*>`,
    "i",
  );
  const m = re.exec(html);
  return m ? m[1] : null;
}

function extractMainHtml(html) {
  const mainMatch = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  if (mainMatch) return mainMatch[1];
  const bodyMatch = /<body\b[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  return bodyMatch ? bodyMatch[1] : html;
}

function stripNoise(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ");
}

function htmlToText(html) {
  const noNoise = stripNoise(html);
  const noTags = noNoise.replace(/<[^>]+>/g, " ");
  return noTags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(text) {
  if (!text) return 0;
  // Count CJK characters as "words" to avoid undercounting.
  const cjk = (text.match(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g) || [])
    .length;
  const latinWords = text
    .replace(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latinWords;
}

function stableTextHash(text) {
  const normalized = text
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\d+/g, "0")
    .replace(/\s+/g, " ")
    .trim();
  return crypto.createHash("sha1").update(normalized).digest("hex");
}

async function main() {
  const args = new Map();
  for (const arg of process.argv.slice(2)) {
    const [k, v] = arg.split("=");
    if (k.startsWith("--")) args.set(k.slice(2), v ?? true);
  }

  const sitemapUrl =
    (args.get("sitemap") && String(args.get("sitemap"))) ||
    "https://homedecorcalc.com/sitemap.xml";
  const sample = Number(args.get("sample") ?? 60);
  const minWords = Number(args.get("minWords") ?? 250);

  const sitemapXml = await fetchText(sitemapUrl);
  const locs = parseSitemapLocs(sitemapXml);
  const urls = locs.slice(0, sample);

  const results = [];
  const byHash = new Map();

  for (const url of urls) {
    try {
      const html = await fetchText(url);
      const canonical = getCanonicalHref(html);
      const robots = getMetaContent(html, "robots");
      const title = /<title[^>]*>([^<]+)<\/title>/i.exec(html)?.[1]?.trim() ?? "";
      const mainHtml = extractMainHtml(html);
      const mainText = htmlToText(mainHtml);
      const words = countWords(mainText);
      const hash = stableTextHash(mainText);
      const scripts = (html.match(/<script\b/gi) || []).length;
      const links = (mainHtml.match(/<a\b/gi) || []).length;
      const adSignals = /googlesyndication|adsbygoogle|pagead2\.googlesyndication/i.test(html);

      const row = {
        url,
        title,
        words,
        links,
        scripts,
        adSignals,
        robots: robots ?? "",
        canonical: canonical ?? "",
        hash,
      };
      results.push(row);
      const list = byHash.get(hash) ?? [];
      list.push(url);
      byHash.set(hash, list);
    } catch (err) {
      results.push({
        url,
        error: err?.message ?? String(err),
      });
    }
  }

  const thin = results
    .filter((r) => !r.error && r.words < minWords)
    .sort((a, b) => a.words - b.words)
    .slice(0, 20);

  const duplicates = [...byHash.entries()]
    .filter(([, list]) => list.length >= 2)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 10)
    .map(([hash, list]) => ({ hash, count: list.length, urls: list.slice(0, 6) }));

  console.log(
    JSON.stringify(
      {
        sitemapUrl,
        sampled: urls.length,
        thresholds: { minWords },
        thinPagesTop20: thin,
        duplicateGroupsTop10: duplicates,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
