#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import https from "node:https";

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function countMatches(text, regex) {
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function sliceBlock(text, startMarker) {
  const startIndex = text.indexOf(startMarker);
  if (startIndex < 0) return null;
  const rest = text.slice(startIndex);
  const endIndex = rest.indexOf("\n];");
  if (endIndex < 0) return null;
  return rest.slice(0, endIndex + "\n];".length);
}

function getLocalCounts(repoRoot) {
  const resourcesPath = path.join(
    repoRoot,
    "src",
    "lib",
    "content",
    "resourcesEn.ts",
  );
  const calculatorsPath = path.join(repoRoot, "src", "lib", "calculatorsCatalog.ts");
  const guidesPath = path.join(repoRoot, "src", "lib", "guidesCatalog.ts");

  const resourcesText = readText(resourcesPath);
  const calculatorsText = readText(calculatorsPath);
  const guidesText = readText(guidesPath);

  const resourcesCount = countMatches(resourcesText, /slug:\s*"/g);

  const calculatorsBlock = sliceBlock(
    calculatorsText,
    "export const CALCULATORS",
  );
  const calculatorsCount = calculatorsBlock
    ? countMatches(calculatorsBlock, /^\s*id:\s*"/gm)
    : null;

  const categoriesCount = countMatches(
    calculatorsText,
    /^\s*{ id: "[^"]+", titleKey: "[^"]+" },\s*$/gm,
  );

  const guidesBlock = sliceBlock(guidesText, "export const GUIDE_DEFINITIONS");
  const guidesCount = guidesBlock
    ? countMatches(guidesBlock, /^\s*id:\s*"/gm)
    : null;

  const staticCount = 10;

  const perLocaleTotal =
    staticCount +
    categoriesCount +
    (calculatorsCount ?? 0) +
    (guidesCount ?? 0) +
    resourcesCount;

  return {
    staticCount,
    categoriesCount,
    calculatorsCount,
    guidesCount,
    resourcesCount,
    perLocaleTotal,
  };
}

function getContentNonAsciiReport(repoRoot) {
  const dir = path.join(repoRoot, "src", "lib", "content");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts"));
  const report = [];

  for (const file of files) {
    const p = path.join(dir, file);
    const text = readText(p);
    const map = new Map();
    for (const ch of text) {
      const code = ch.codePointAt(0) ?? 0;
      if (code > 127) map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    if (!map.size) continue;
    const top = [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([ch, count]) => ({
        ch,
        code: `U+${(ch.codePointAt(0) ?? 0).toString(16).toUpperCase()}`,
        count,
      }));
    report.push({ file, unique: map.size, top });
  }

  return report;
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (!res.statusCode || res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        res.setEncoding("utf8");
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function parseSitemapLocs(xmlText) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xmlText))) {
    locs.push(m[1]);
  }
  return locs;
}

async function main() {
  const repoRoot = process.cwd();
  const args = new Set(process.argv.slice(2));
  const live = args.has("--live");

  const counts = getLocalCounts(repoRoot);
  const indexedLocales = ["en", "es", "zh-TW"];
  console.log(`Local sitemap expectation (${indexedLocales.join(", ")}):`);
  console.log(
    JSON.stringify(
      {
        staticPages: counts.staticCount,
        calculatorCategories: counts.categoriesCount,
        calculators: counts.calculatorsCount,
        guides: counts.guidesCount,
        resources: counts.resourcesCount,
        perLocaleExpectedLocs: counts.perLocaleTotal,
        totalExpectedLocs: counts.perLocaleTotal * indexedLocales.length,
      },
      null,
      2,
    ),
  );

  const nonAscii = getContentNonAsciiReport(repoRoot);
  if (nonAscii.length) {
    console.log("\nContent non-ASCII report (not necessarily bad):");
    console.log(
      JSON.stringify(
        nonAscii.map((r) => ({
          file: r.file,
          unique: r.unique,
          top: r.top.map((t) => ({ ch: t.ch, code: t.code, count: t.count })),
        })),
        null,
        2,
      ),
    );
  }

  if (!live) return;

  const sitemapUrl = "https://homedecorcalc.com/sitemap.xml";
  const xmlText = await fetchText(sitemapUrl);
  const locs = parseSitemapLocs(xmlText);
  const unique = new Set(locs);
  console.log("\nLive sitemap check:");
  console.log(
    JSON.stringify(
      {
        sitemapUrl,
        locs: locs.length,
        unique: unique.size,
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
