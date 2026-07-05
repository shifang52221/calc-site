import assert from "node:assert/strict";
import test from "node:test";

import {
  isReviewNoindexCalculator,
  isReviewNoindexGuide,
  isReviewNoindexResource,
  shouldRenderReviewerSignal,
  shouldRenderReviewGuideEnhancements,
  shouldRenderReviewResourceEnhancements,
  filterReviewVisibleCategories,
  isIndexedReviewLocale,
  isReviewVisibleCalculator,
  isReviewVisibleGuide,
  isReviewVisibleResource,
  sortGuideDefinitionsForReview,
  sortCalculatorsForReview,
  sortGuidesForReview,
  sortReviewVisibleCalculators,
  sortReviewVisibleGuides,
  sortReviewVisibleResources,
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
  const englishCoreCalculators = [
    "deckMud",
    "baseboardTrim",
    "drywallTexture",
    "tile",
    "tileGrout",
    "drywall",
    "concrete",
    "flooring",
    "paint",
  ];

  for (const calculatorId of englishCoreCalculators) {
    assert.equal(
      isReviewNoindexCalculator("en", calculatorId),
      false,
      calculatorId,
    );
  }

  assert.equal(isReviewNoindexCalculator("en", "wallpaperRolls"), true);
  assert.equal(isReviewNoindexCalculator("en", "soilMix"), true);
  assert.equal(isReviewNoindexCalculator("en", "asphaltDriveway"), true);

  for (const locale of ["es", "zh-TW"] as const) {
    for (const calculatorId of englishCoreCalculators) {
      assert.equal(
        isReviewNoindexCalculator(locale, calculatorId),
        true,
        `${locale}:${calculatorId}`,
      );
    }
  }
});

test("reviewer signal policy targets only core review surfaces", () => {
  assert.equal(shouldRenderReviewerSignal("calculator", "en", "deckMud"), true);
  assert.equal(
    shouldRenderReviewerSignal("calculator", "en", "baseboardTrim"),
    true,
  );
  assert.equal(
    shouldRenderReviewerSignal("calculator", "en", "drywallTexture"),
    true,
  );
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
    shouldRenderReviewerSignal("resource", "en", "baseboard-trim-waste-tips"),
    true,
  );
  assert.equal(
    shouldRenderReviewerSignal("resource", "en", "tile-project-planning-guide"),
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

test("review visibility exposes only the focused English calculator surface", () => {
  assert.equal(isIndexedReviewLocale("en"), true);
  assert.equal(isIndexedReviewLocale("es"), false);
  assert.equal(isIndexedReviewLocale("zh-TW"), false);

  const visible = sortReviewVisibleCalculators(
    [
      { id: "wallpaperRolls" },
      { id: "deckMud" },
      { id: "baseboardTrim" },
      { id: "mulch" },
      { id: "drywallTexture" },
      { id: "tile" },
      { id: "paint" },
    ],
    "en",
  ).map((calculator) => calculator.id);

  assert.deepEqual(visible, [
    "deckMud",
    "baseboardTrim",
    "drywallTexture",
    "tile",
    "paint",
  ]);
  assert.equal(isReviewVisibleCalculator("en", "deckMud"), true);
  assert.equal(isReviewVisibleCalculator("en", "wallpaperRolls"), false);
  assert.equal(isReviewVisibleCalculator("en", "mulch"), false);
  assert.equal(isReviewVisibleCalculator("es", "deckMud"), false);
});

test("review visibility exposes only focused guides and resources", () => {
  const guides = sortReviewVisibleGuides(
    [
      { id: "paint" },
      { id: "tile-waste" },
      { id: "drywall-ceiling" },
      { id: "tile" },
      { id: "deck" },
      { id: "drywall" },
    ],
    "en",
  ).map((guide) => guide.id);

  assert.deepEqual(guides, ["tile-waste", "tile", "deck", "drywall"]);
  assert.equal(isReviewVisibleGuide("en", "tile-waste"), true);
  assert.equal(isReviewVisibleGuide("en", "paint"), false);
  assert.equal(isReviewVisibleGuide("es", "tile-waste"), false);

  const resources = sortReviewVisibleResources(
    [
      { slug: "material-overage-planning-guide" },
      { slug: "deck-mud-coverage-chart" },
      { slug: "tile-project-planning-guide" },
      { slug: "baseboard-trim-waste-tips" },
      { slug: "topsoil-coverage-chart" },
    ],
    "en",
  ).map((resource) => resource.slug);

  assert.deepEqual(resources, [
    "deck-mud-coverage-chart",
    "tile-project-planning-guide",
    "baseboard-trim-waste-tips",
  ]);
  assert.equal(
    isReviewVisibleResource("en", "deck-mud-coverage-chart"),
    true,
  );
  assert.equal(
    isReviewVisibleResource("en", "material-overage-planning-guide"),
    false,
  );
  assert.equal(
    isReviewVisibleResource("zh-TW", "deck-mud-coverage-chart"),
    false,
  );
});

test("review visible category chips exclude empty categories", () => {
  const categories = filterReviewVisibleCategories(
    [
      { id: "walls-finishes" },
      { id: "floors-tile" },
      { id: "landscaping" },
    ],
    [
      { id: "paint", categoryId: "walls-finishes" },
      { id: "deckMud", categoryId: "floors-tile" },
      { id: "mulch", categoryId: "landscaping" },
    ],
    "en",
  ).map((category) => category.id);

  assert.deepEqual(categories, ["walls-finishes", "floors-tile"]);
});
