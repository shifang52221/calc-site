export const REVIEW_CRITICAL_PATHS = [
  "/en",
  "/en/about",
  "/en/methodology",
  "/en/editorial-policy",
  "/en/contact",
  "/en/calculators",
  "/en/resources",
  "/en/guides",
  "/en/calculators/home-improvement/deck-mud",
  "/en/calculators/home-improvement/baseboard-trim",
  "/en/calculators/home-improvement/drywall-texture",
  "/en/calculators/home-improvement/tile",
  "/en/calculators/home-improvement/paint",
  "/en/resources/deck-mud-coverage-chart",
  "/en/resources/baseboard-trim-waste-tips",
  "/en/resources/tile-project-planning-guide",
  "/en/guides/home-improvement/tile-waste",
  "/en/guides/home-improvement/tile",
  "/en/guides/home-improvement/drywall",
];

const REVIEWER_REQUIRED_PATHS = new Set([
  "/en/calculators/home-improvement/deck-mud",
  "/en/calculators/home-improvement/baseboard-trim",
  "/en/calculators/home-improvement/drywall-texture",
  "/en/calculators/home-improvement/tile",
  "/en/calculators/home-improvement/paint",
  "/en/resources/deck-mud-coverage-chart",
  "/en/resources/baseboard-trim-waste-tips",
  "/en/resources/tile-project-planning-guide",
  "/en/guides/home-improvement/tile-waste",
  "/en/guides/home-improvement/tile",
  "/en/guides/home-improvement/drywall",
]);

function pathnameFromUrl(url) {
  try {
    return new URL(url).pathname.replace(/\/+$/, "") || "/";
  } catch {
    return url.replace(/^https?:\/\/[^/]+/i, "").replace(/\/+$/, "") || "/";
  }
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(
    html,
  );
}

function hasReviewerSignal(html) {
  return /Reviewed by Ethan Parker/i.test(html);
}

function hasAdSignals(html) {
  return /googlesyndication|adsbygoogle|pagead2\.googlesyndication/i.test(html);
}

function hasNonWwwCanonical(url, html) {
  const canonical =
    /<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i.exec(
      html,
    )?.[1] ?? "";
  if (!canonical) return false;
  try {
    const parsed = new URL(canonical, url);
    return parsed.hostname === "homedecorcalc.com";
  } catch {
    return false;
  }
}

export function evaluateCriticalReviewPage({ url, html, words, minWords = 250 }) {
  const pathname = pathnameFromUrl(url);
  const expectedReviewer = REVIEWER_REQUIRED_PATHS.has(pathname);
  const reviewerSignal = hasReviewerSignal(html);
  const noindex = hasNoindex(html);
  const adSignals = hasAdSignals(html);
  const nonWwwCanonical = hasNonWwwCanonical(url, html);
  const issues = [];

  if (expectedReviewer && !reviewerSignal) {
    issues.push("missingReviewerSignal");
  }

  if (noindex) {
    issues.push("unexpectedNoindex");
  }

  if (adSignals) {
    issues.push("adSignalsPresent");
  }

  if (words < minWords) {
    issues.push("thinCriticalPage");
  }

  if (!nonWwwCanonical) {
    issues.push("missingOrNonCanonicalHost");
  }

  return {
    url,
    pathname,
    words,
    expectedReviewer,
    hasReviewerSignal: reviewerSignal,
    hasNoindex: noindex,
    hasAdSignals: adSignals,
    hasNonWwwCanonical: nonWwwCanonical,
    issues,
  };
}
