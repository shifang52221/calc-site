import assert from "node:assert/strict";
import test from "node:test";

import {
  isReviewNoindexCalculator,
  isReviewNoindexGuide,
  isReviewNoindexResource,
  shouldRenderReviewerSignal,
  shouldRenderReviewGuideEnhancements,
  shouldRenderReviewResourceEnhancements,
  sortGuideDefinitionsForReview,
  sortCalculatorsForReview,
  sortGuidesForReview,
  sortResourcesForReview,
} from "./reviewPolicy.ts";

test("review noindex policy only suppresses the targeted weak guides and resources", () => {
  assert.equal(isReviewNoindexGuide("en", "drywall-ceiling"), true);
  assert.equal(isReviewNoindexGuide("en", "topsoil-leveling"), true);
  assert.equal(isReviewNoindexGuide("es", "drywall-ceiling"), false);
  assert.equal(isReviewNoindexGuide("zh-TW", "topsoil-leveling"), false);

  assert.equal(
    isReviewNoindexResource("en", "drywall-ceiling-thickness-guide"),
    false,
  );
  assert.equal(
    isReviewNoindexResource("en", "topsoil-leveling-step-by-step-guide"),
    true,
  );
  assert.equal(isReviewNoindexResource("es", "concrete-bag-yield-guide"), true);
  assert.equal(
    isReviewNoindexResource("es", "fence-post-hole-concrete-guide"),
    true,
  );
  assert.equal(
    isReviewNoindexResource("zh-TW", "topsoil-leveling-step-by-step-guide"),
    false,
  );
});

test("review noindex policy suppresses non-core calculators during AdSense review", () => {
  assert.equal(isReviewNoindexCalculator("en", "deckMud"), false);
  assert.equal(isReviewNoindexCalculator("en", "baseboardTrim"), false);
  assert.equal(isReviewNoindexCalculator("en", "drywallTexture"), false);
  assert.equal(isReviewNoindexCalculator("en", "tile"), false);
  assert.equal(isReviewNoindexCalculator("en", "paint"), false);

  assert.equal(isReviewNoindexCalculator("en", "wallpaperRolls"), true);
  assert.equal(isReviewNoindexCalculator("en", "soilMix"), true);
  assert.equal(isReviewNoindexCalculator("es", "deckMud"), true);
  assert.equal(isReviewNoindexCalculator("zh-TW", "deckMud"), true);
});

test("reviewer signal policy targets only core review surfaces", () => {
  assert.equal(shouldRenderReviewerSignal("calculator", "en", "deckMud"), true);
  assert.equal(shouldRenderReviewerSignal("calculator", "en", "tile"), true);
  assert.equal(
    shouldRenderReviewerSignal("calculator", "en", "wallpaperRolls"),
    false,
  );
  assert.equal(
    shouldRenderReviewerSignal("resource", "en", "deck-mud-coverage-chart"),
    true,
  );
  assert.equal(
    shouldRenderReviewerSignal("resource", "en", "topsoil-coverage-chart"),
    false,
  );
  assert.equal(shouldRenderReviewerSignal("guide", "en", "tile-waste"), true);
  assert.equal(shouldRenderReviewerSignal("guide", "en", "mulch"), false);
  assert.equal(shouldRenderReviewerSignal("calculator", "es", "deckMud"), false);
});

test("review ordering moves proven surfaces to the top without dropping the rest", () => {
  const calculatorOrder = sortCalculatorsForReview([
    { id: "paint" },
    { id: "deckMud" },
    { id: "baseboardTrim" },
    { id: "drywallTexture" },
    { id: "tile" },
  ]).map(
    (calculator) => calculator.id,
  );
  const guideOrder = sortGuidesForReview(
    [
      { id: "paint" },
      { id: "tile-waste" },
      { id: "drywall-ceiling" },
      { id: "topsoil-leveling" },
      { id: "tile" },
    ],
    "en",
  ).map(
    (guide) => guide.id,
  );
  const resourceOrder = sortResourcesForReview(
    [
      { slug: "paint-planning-complete-guide" },
      { slug: "tile-project-planning-guide" },
      { slug: "baseboard-trim-waste-tips" },
      { slug: "drywall-materials-and-finishing-guide" },
      { slug: "deck-mud-coverage-chart" },
      { slug: "topsoil-leveling-step-by-step-guide" },
    ],
    "en",
  ).map((resource) => resource.slug);

  assert.deepEqual(calculatorOrder.slice(0, 3), [
    "deckMud",
    "baseboardTrim",
    "drywallTexture",
  ]);
  assert.equal(guideOrder[0], "tile-waste");
  assert.deepEqual(resourceOrder.slice(0, 4), [
    "deck-mud-coverage-chart",
    "tile-project-planning-guide",
    "baseboard-trim-waste-tips",
    "drywall-materials-and-finishing-guide",
  ]);
  assert.ok(!guideOrder.includes("drywall-ceiling"));
  assert.ok(!guideOrder.includes("topsoil-leveling"));
  assert.ok(!resourceOrder.includes("topsoil-leveling-step-by-step-guide"));
});

test("review-aware guide definitions exclude noindex guides from category related blocks", () => {
  const wallsGuides = sortGuideDefinitionsForReview(
    [
      { id: "drywall", categoryId: "walls-finishes" },
      { id: "drywall-ceiling", categoryId: "walls-finishes" },
      { id: "paint", categoryId: "walls-finishes" },
      { id: "tile-waste", categoryId: "floors-tile" },
    ],
    "en",
    "walls-finishes",
  ).map((guide) => guide.id);

  assert.deepEqual(wallsGuides, ["drywall", "paint"]);
});

test("review enhancements are suppressed on noindex guides and resources", () => {
  assert.equal(
    shouldRenderReviewGuideEnhancements("en", "drywall-ceiling"),
    false,
  );
  assert.equal(
    shouldRenderReviewGuideEnhancements("en", "topsoil-leveling"),
    false,
  );
  assert.equal(
    shouldRenderReviewGuideEnhancements("en", "drywall"),
    true,
  );

  assert.equal(
    shouldRenderReviewResourceEnhancements("en", "drywall-ceiling-thickness-guide"),
    true,
  );
  assert.equal(
    shouldRenderReviewResourceEnhancements("en", "deck-mud-coverage-chart"),
    true,
  );
});
