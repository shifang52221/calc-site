import assert from "node:assert/strict";
import test from "node:test";

import { RESOURCE_ARTICLES_EN } from "./content/resourcesEn.ts";
import { GUIDE_EXTRA_CONTENT_EN } from "./content/guidesEn.ts";

function getResourceBySlug(slug: string) {
  const article = RESOURCE_ARTICLES_EN.find((entry) => entry.slug === slug);
  assert.ok(article, `Expected resource article "${slug}" to exist`);
  return article;
}

test("deck-mud support resource includes a full order worked example", () => {
  const article = getResourceBySlug("deck-mud-coverage-chart");
  const headings = article.sections.map((section) => section.heading);

  assert.ok(
    headings.includes("Worked example (full shower-pan order)"),
    "Expected deck-mud support resource to include a full order worked example section",
  );
});

test("tile-waste support resource compares floor and shower-wall ordering risk", () => {
  const article = getResourceBySlug("tile-waste-percentage-guide");
  const headings = article.sections.map((section) => section.heading);

  assert.ok(
    headings.includes("Worked example (floor vs shower wall order risk)"),
    "Expected tile-waste support resource to include a floor-vs-shower-wall worked example section",
  );
});

test("tile-waste guide extra content includes a base-case versus high-risk ordering note", () => {
  const content = GUIDE_EXTRA_CONTENT_EN["tile-waste"];

  assert.ok(content, 'Expected guide extra content for "tile-waste" to exist');
  assert.ok(
    content.bullets?.includes("Run a base-case and high-risk case before ordering."),
    "Expected tile-waste guide notes to include base-case versus high-risk ordering guidance",
  );
});
