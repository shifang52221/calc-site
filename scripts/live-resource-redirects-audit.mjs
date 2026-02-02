#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function getArg(name, fallback = null) {
  const prefix = `--${name}=`;
  const raw = process.argv.slice(2).find((a) => a.startsWith(prefix));
  if (!raw) return fallback;
  return raw.slice(prefix.length);
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

async function fetchFollow(url, timeoutMs) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; homedecorcalc-redirect-audit/1.0; +https://homedecorcalc.com)",
        accept: "text/html,application/xhtml+xml",
      },
    });
    await res.arrayBuffer(); // ensure request completes
    return { status: res.status, finalUrl: res.url || url, ok: res.ok };
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const baseUrl = getArg("baseUrl", "https://homedecorcalc.com");
  const locales = (getArg("locales", "en,es,zh-TW") || "en,es,zh-TW")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const concurrency = Math.max(1, Number(getArg("concurrency", "10")) || 10);
  const timeoutMs = Math.max(2000, Number(getArg("timeoutMs", "20000")) || 20000);

  const redirects = JSON.parse(
    fs.readFileSync(path.join("docs", "resources-redirects.json"), "utf8"),
  );
  const slugs = Object.keys(redirects);

  const startedAt = new Date().toISOString();
  const urls = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      urls.push({
        locale,
        slug,
        url: `${baseUrl}/${locale}/resources/${slug}`,
        expectedTarget: `${baseUrl}/${locale}/resources/${redirects[slug]}`,
      });
    }
  }

  const results = [];
  for (const b of chunk(urls, concurrency)) {
    const batch = await Promise.all(
      b.map(async (item) => {
        const started = Date.now();
        try {
          const r = await fetchFollow(item.url, timeoutMs);
          return {
            ...item,
            status: r.status,
            finalUrl: r.finalUrl,
            ok: r.ok,
            durationMs: Date.now() - started,
            matchesExpectedTarget: r.finalUrl === item.expectedTarget,
          };
        } catch (err) {
          return {
            ...item,
            status: null,
            finalUrl: null,
            ok: false,
            durationMs: Date.now() - started,
            error: err && err.message ? err.message : String(err),
          };
        }
      }),
    );
    results.push(...batch);
    process.stdout.write(`Checked ${results.length}/${urls.length}\r`);
  }
  process.stdout.write("\n");
  const endedAt = new Date().toISOString();

  const mismatches = results.filter(
    (r) => r.ok && !r.matchesExpectedTarget,
  );
  const errors = results.filter((r) => !r.ok);

  const report = {
    meta: {
      startedAt,
      endedAt,
      baseUrl,
      locales,
      slugs: slugs.length,
      urlCount: urls.length,
      concurrency,
      timeoutMs,
    },
    summary: {
      okCount: results.filter((r) => r.ok).length,
      errorCount: errors.length,
      mismatchCount: mismatches.length,
    },
    issues: {
      errors: errors.slice(0, 50),
      mismatches: mismatches.slice(0, 50),
    },
    results,
  };

  const out = path.join("docs", "audits", `live-resource-redirects-${nowStamp()}.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(`Saved report: ${out}`);
  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
