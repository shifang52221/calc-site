import type { Locale } from "@/i18n/routing";

const REVIEW_FOCUS_CALCULATOR_ORDER = [
  "deckMud",
  "baseboardTrim",
  "drywallTexture",
  "tile",
] as const;

const REVIEW_FOCUS_GUIDE_ORDER = [
  "tile-waste",
  "tile",
  "deck",
  "drywall",
] as const;

const REVIEW_FOCUS_RESOURCE_ORDER = [
  "deck-mud-coverage-chart",
  "tile-project-planning-guide",
  "baseboard-trim-waste-tips",
  "drywall-materials-and-finishing-guide",
] as const;

const REVIEW_NOINDEX_GUIDES_BY_LOCALE: Record<Locale, ReadonlySet<string>> = {
  en: new Set(["drywall-ceiling", "topsoil-leveling"]),
  es: new Set(),
  "zh-TW": new Set(),
};

const REVIEW_NOINDEX_RESOURCES_BY_LOCALE: Record<Locale, ReadonlySet<string>> = {
  en: new Set(["topsoil-leveling-step-by-step-guide"]),
  es: new Set([
    "concrete-bag-yield-guide",
    "fence-post-hole-concrete-guide",
  ]),
  "zh-TW": new Set(),
};

function buildPriorityMap(values: readonly string[]) {
  return new Map(values.map((value, index) => [value, index]));
}

function sortByPriority<T>(
  items: readonly T[],
  getKey: (item: T) => string,
  priorityMap: ReadonlyMap<string, number>,
) {
  return items
    .map((item, index) => ({ item, index }))
    .sort((left, right) => {
      const leftPriority = priorityMap.get(getKey(left.item)) ?? Number.MAX_SAFE_INTEGER;
      const rightPriority =
        priorityMap.get(getKey(right.item)) ?? Number.MAX_SAFE_INTEGER;

      if (leftPriority !== rightPriority) {
        return leftPriority - rightPriority;
      }

      return left.index - right.index;
    })
    .map(({ item }) => item);
}

export function isReviewNoindexGuide(locale: Locale, guideId: string) {
  return REVIEW_NOINDEX_GUIDES_BY_LOCALE[locale].has(guideId);
}

export function isReviewNoindexResource(locale: Locale, slug: string) {
  return REVIEW_NOINDEX_RESOURCES_BY_LOCALE[locale].has(slug);
}

export function shouldRenderReviewGuideEnhancements(
  locale: Locale,
  guideId: string,
) {
  return !isReviewNoindexGuide(locale, guideId);
}

export function shouldRenderReviewResourceEnhancements(
  locale: Locale,
  slug: string,
) {
  return !isReviewNoindexResource(locale, slug);
}

export function sortCalculatorsForReview<T extends { id: string }>(
  calculators: readonly T[],
) {
  return sortByPriority(
    calculators,
    (calculator) => calculator.id,
    buildPriorityMap(REVIEW_FOCUS_CALCULATOR_ORDER),
  );
}

export function sortGuidesForReview<T extends { id: string }>(
  guides: readonly T[],
  locale: Locale,
) {
  return sortByPriority(
    guides.filter((guide) => !isReviewNoindexGuide(locale, guide.id)),
    (guide) => guide.id,
    buildPriorityMap(REVIEW_FOCUS_GUIDE_ORDER),
  );
}

export function sortGuideDefinitionsForReview<
  T extends { id: string; categoryId: string },
>(
  guides: readonly T[],
  locale: Locale,
  categoryId: string,
) {
  return sortGuidesForReview(
    guides.filter((guide) => guide.categoryId === categoryId),
    locale,
  );
}

export function sortResourcesForReview<T extends { slug: string }>(
  resources: readonly T[],
  locale: Locale,
) {
  return sortByPriority(
    resources.filter((resource) => !isReviewNoindexResource(locale, resource.slug)),
    (resource) => resource.slug,
    buildPriorityMap(REVIEW_FOCUS_RESOURCE_ORDER),
  );
}
