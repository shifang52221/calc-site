#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ORIGIN = process.argv[2] || "https://homedecorcalc.com";

const REVIEW_INDEXABLE_PATHS = new Set([
  "/en",
  "/en/about",
  "/en/contact",
  "/en/privacy",
  "/en/terms",
  "/en/methodology",
  "/en/editorial-policy",
  "/en/calculators",
  "/en/guides",
  "/en/resources",
  "/en/calculators/home-improvement/deck-mud",
  "/en/calculators/home-improvement/baseboard-trim",
  "/en/calculators/home-improvement/drywall-texture",
  "/en/calculators/home-improvement/tile",
  "/en/calculators/home-improvement/tile-grout",
  "/en/calculators/home-improvement/drywall",
  "/en/calculators/home-improvement/concrete",
  "/en/calculators/home-improvement/flooring",
  "/en/calculators/home-improvement/paint",
  "/en/guides/home-improvement/tile-waste",
  "/en/guides/home-improvement/tile",
  "/en/guides/home-improvement/deck",
  "/en/guides/home-improvement/drywall",
  "/en/resources/deck-mud-coverage-chart",
  "/en/resources/tile-project-planning-guide",
  "/en/resources/baseboard-trim-waste-tips",
  "/en/resources/drywall-materials-and-finishing-guide",
  "/en/resources/paint-planning-complete-guide",
  "/en/resources/roofing-materials-checklist-and-estimate",
]);

function childDirs(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function getKnownPaths() {
  const cwd = process.cwd();
  const calcSlugs = childDirs(
    path.join(cwd, "app", "[locale]", "calculators", "home-improvement"),
  );
  const guideSlugs = childDirs(
    path.join(cwd, "app", "[locale]", "guides", "home-improvement"),
  );
  const resourcesText = fs.readFileSync(
    path.join(cwd, "src", "lib", "content", "resourcesEn.ts"),
    "utf8",
  );
  const resourceSlugs = [
    ...resourcesText.matchAll(/slug:\s*["']([^"']+)["']/g),
  ].map((match) => match[1]);

  return [
    ...REVIEW_INDEXABLE_PATHS,
    ...calcSlugs.map((slug) => `/en/calculators/home-improvement/${slug}`),
    ...guideSlugs.map((slug) => `/en/guides/home-improvement/${slug}`),
    ...resourceSlugs.map((slug) => `/en/resources/${slug}`),
    "/es",
    "/zh-TW",
    "/es/calculators",
    "/zh-TW/calculators",
    "/es/guides",
    "/zh-TW/guides",
    "/es/resources",
    "/zh-TW/resources",
  ];
}

function getMetaRobots(html) {
  return [
    ...html.matchAll(
      /<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/gi,
    ),
  ]
    .map((match) => match[1])
    .join("|");
}

async function fetchPage(pathname) {
  const response = await fetch(`${ORIGIN}${pathname}`, {
    redirect: "manual",
    headers: { "user-agent": "known-review-url-audit/1.0" },
  });
  const html = await response.text();
  const metaRobots = getMetaRobots(html);
  const xRobots = response.headers.get("x-robots-tag") || "";

  return {
    path: pathname,
    status: response.status,
    location: response.headers.get("location") || "",
    noindex: /noindex/i.test(`${metaRobots}|${xRobots}`),
    metaRobots,
    xRobots,
  };
}

const rows = [];
for (const pathname of [...new Set(getKnownPaths())]) {
  rows.push(await fetchPage(pathname));
}

const failures = rows.filter((row) => {
  if (row.status >= 300 && row.status < 400) return false;
  if (row.status !== 200) return true;

  const shouldIndex = REVIEW_INDEXABLE_PATHS.has(row.path);
  return shouldIndex ? row.noindex : !row.noindex;
});

console.log(
  JSON.stringify(
    {
      origin: ORIGIN,
      checked: rows.length,
      failures: failures.map((row) => ({
        path: row.path,
        status: row.status,
        location: row.location,
        noindex: row.noindex,
        metaRobots: row.metaRobots,
        xRobots: row.xRobots,
        expected: REVIEW_INDEXABLE_PATHS.has(row.path) ? "index" : "noindex",
      })),
    },
    null,
    2,
  ),
);

if (failures.length) {
  process.exitCode = 1;
}
