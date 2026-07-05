#!/usr/bin/env node

const DEFAULT_ORIGIN = "https://homedecorcalc.com";
const DEFAULT_START = `${DEFAULT_ORIGIN}/en`;
const MAX_PAGES = 160;

const REVIEW_PATH_ALLOWLIST = new Set([
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

function normalizeUrl(input, base = DEFAULT_ORIGIN) {
  try {
    const url = new URL(input, base);
    if (url.hostname !== new URL(DEFAULT_ORIGIN).hostname) return null;
    url.hash = "";
    url.search = "";
    if (url.pathname.length > 1) {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    return url.href;
  } catch {
    return null;
  }
}

function pathOf(url) {
  return new URL(url).pathname.replace(/\/+$/, "") || "/";
}

function extractLinks(html, baseUrl) {
  const links = [];
  const re = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = re.exec(html))) {
    const href = match[1];
    if (/^(mailto:|tel:|javascript:|#)/i.test(href)) continue;
    const normalized = normalizeUrl(href, baseUrl);
    if (normalized) links.push(normalized);
  }
  return [...new Set(links)];
}

function getMetaRobots(html) {
  return [...html.matchAll(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1])
    .join("|");
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 review-surface-audit/1.0" },
    });
    return {
      status: response.status,
      url: normalizeUrl(response.url) || url,
      html: await response.text(),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const start = normalizeUrl(process.argv[2] || DEFAULT_START) || DEFAULT_START;
  const queue = [{ url: start, from: "", depth: 0 }];
  const seen = new Set();
  const rows = [];

  while (queue.length && rows.length < MAX_PAGES) {
    const current = queue.shift();
    if (!current?.url || seen.has(current.url)) continue;
    seen.add(current.url);

    try {
      const { status, url, html } = await fetchText(current.url);
      const path = pathOf(url);
      const robots = getMetaRobots(html);
      const noindex = /noindex/i.test(robots);
      const locale = path.split("/").filter(Boolean)[0] || "";
      rows.push({
        path,
        status,
        depth: current.depth,
        from: current.from ? pathOf(current.from) : "",
        locale,
        noindex,
        allowed: REVIEW_PATH_ALLOWLIST.has(path),
      });

      const links = extractLinks(html, url);
      for (const link of links) {
        if (!seen.has(link) && !queue.find((item) => item.url === link)) {
          queue.push({ url: link, from: url, depth: current.depth + 1 });
        }
      }
    } catch (error) {
      rows.push({
        path: pathOf(current.url),
        status: 0,
        depth: current.depth,
        from: current.from ? pathOf(current.from) : "",
        locale: pathOf(current.url).split("/").filter(Boolean)[0] || "",
        noindex: false,
        allowed: REVIEW_PATH_ALLOWLIST.has(pathOf(current.url)),
        error: String(error?.message || error),
      });
    }
  }

  const reachableNoindex = rows.filter((row) => row.noindex);
  const reachableNonEnglish = rows.filter(
    (row) => row.locale && row.locale !== "en" && row.status === 200,
  );
  const outsideAllowlist = rows.filter(
    (row) => row.status === 200 && !row.allowed,
  );

  const result = {
    start,
    crawled: rows.length,
    reachableNoindex: reachableNoindex.map((row) => ({
      path: row.path,
      from: row.from,
      depth: row.depth,
    })),
    reachableNonEnglish: reachableNonEnglish.map((row) => ({
      path: row.path,
      from: row.from,
      depth: row.depth,
    })),
    outsideAllowlist: outsideAllowlist.map((row) => ({
      path: row.path,
      from: row.from,
      depth: row.depth,
    })),
  };

  console.log(JSON.stringify(result, null, 2));

  if (
    reachableNoindex.length ||
    reachableNonEnglish.length ||
    outsideAllowlist.length
  ) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
