import assert from "node:assert/strict";
import test from "node:test";

import { resolveReviewRedirect } from "./urlPolicy.ts";

test("review URL policy redirects www host to canonical non-www host", () => {
  const redirect = resolveReviewRedirect({
    canonicalHost: "homedecorcalc.com",
    host: "www.homedecorcalc.com",
    pathname: "/en/calculators/home-improvement/baseboard-trim",
    search: "",
    protocol: "https:",
  });

  assert.equal(
    redirect,
    "https://homedecorcalc.com/en/calculators/home-improvement/baseboard-trim",
  );
});

test("review URL policy redirects missing-locale content paths to English", () => {
  const cases = [
    [
      "/guides/home-improvement/drywall-ceiling",
      "https://homedecorcalc.com/en/guides/home-improvement/drywall-ceiling",
    ],
    [
      "/resources/tile-waste-percentage-guide",
      "https://homedecorcalc.com/en/resources/tile-waste-percentage-guide",
    ],
    [
      "/calculators/home-improvement/deck-mud",
      "https://homedecorcalc.com/en/calculators/home-improvement/deck-mud",
    ],
  ] as const;

  for (const [pathname, expected] of cases) {
    const redirect = resolveReviewRedirect({
      canonicalHost: "homedecorcalc.com",
      host: "homedecorcalc.com",
      pathname,
      search: "",
      protocol: "https:",
    });

    assert.equal(redirect, expected);
  }
});

test("review URL policy keeps public metadata and static paths unprefixed", () => {
  const paths = [
    "/robots.txt",
    "/sitemap.xml",
    "/ads.txt",
    "/icon.svg",
    "/_next/static/chunk.js",
    "/opengraph-image",
    "/twitter-image",
  ];

  for (const pathname of paths) {
    const redirect = resolveReviewRedirect({
      canonicalHost: "homedecorcalc.com",
      host: "homedecorcalc.com",
      pathname,
      search: "",
      protocol: "https:",
    });

    assert.equal(redirect, null, pathname);
  }
});

