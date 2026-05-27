import assert from "node:assert/strict";
import test from "node:test";

import {
  REVIEW_CRITICAL_PATHS,
  evaluateCriticalReviewPage,
} from "./adsense-audit-helpers.mjs";

test("critical review paths include the pages most likely to affect re-review", () => {
  assert.ok(REVIEW_CRITICAL_PATHS.includes("/en"));
  assert.ok(REVIEW_CRITICAL_PATHS.includes("/en/methodology"));
  assert.ok(
    REVIEW_CRITICAL_PATHS.includes(
      "/en/calculators/home-improvement/baseboard-trim",
    ),
  );
  assert.ok(
    REVIEW_CRITICAL_PATHS.includes("/en/resources/tile-project-planning-guide"),
  );
  assert.ok(
    REVIEW_CRITICAL_PATHS.includes("/en/guides/home-improvement/tile-waste"),
  );
});

test("critical review page evaluation flags missing reviewer signal", () => {
  const result = evaluateCriticalReviewPage({
    url: "https://homedecorcalc.com/en/calculators/home-improvement/deck-mud",
    html: "<html><head><link rel=\"canonical\" href=\"https://homedecorcalc.com/en/calculators/home-improvement/deck-mud\"></head><body>Ethan Parker</body></html>",
    words: 700,
  });

  assert.equal(result.expectedReviewer, true);
  assert.equal(result.hasReviewerSignal, false);
  assert.ok(result.issues.includes("missingReviewerSignal"));
});

test("critical review page evaluation flags noindex and ad scripts", () => {
  const result = evaluateCriticalReviewPage({
    url: "https://homedecorcalc.com/en/resources/tile-project-planning-guide",
    html: '<html><head><meta name="robots" content="noindex"><script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script></head><body>Reviewed by Ethan Parker</body></html>',
    words: 800,
  });

  assert.equal(result.hasNoindex, true);
  assert.equal(result.hasAdSignals, true);
  assert.ok(result.issues.includes("unexpectedNoindex"));
  assert.ok(result.issues.includes("adSignalsPresent"));
});

test("critical review page evaluation passes a clean trust page without reviewer card", () => {
  const result = evaluateCriticalReviewPage({
    url: "https://homedecorcalc.com/en/about",
    html: "<html><head><link rel=\"canonical\" href=\"https://homedecorcalc.com/en/about\"></head><body>Ethan Parker explains HomeDecorCalc editorial review.</body></html>",
    words: 500,
  });

  assert.equal(result.expectedReviewer, false);
  assert.deepEqual(result.issues, []);
});

