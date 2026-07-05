import type { Locale } from "@/i18n/routing";

const REVIEW_FOCUS_CALCULATOR_ORDER = [
  "deckMud",
  "baseboardTrim",
  "drywallTexture",
  "tile",
  "tileGrout",
  "drywall",
  "concrete",
  "flooring",
  "paint",
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
  "paint-planning-complete-guide",
  "roofing-materials-checklist-and-estimate",
] as const;

const REVIEW_CORE_CALCULATORS_EN = new Set<string>(REVIEW_FOCUS_CALCULATOR_ORDER);
const REVIEW_CORE_GUIDES_EN = new Set<string>(REVIEW_FOCUS_GUIDE_ORDER);
const REVIEW_CORE_RESOURCES_EN = new Set<string>(REVIEW_FOCUS_RESOURCE_ORDER);

const REVIEW_NOINDEX_CALCULATORS_BY_LOCALE: Record<
  Locale,
  ReadonlySet<string>
> = {
  en: new Set([
    "asphaltDriveway",
    "boardFeet",
    "concreteBags",
    "deck",
    "drywallMudTape",
    "fence",
    "gravel",
    "gravelTons",
    "mulch",
    "mulchBags",
    "paverBase",
    "roofing",
    "sand",
    "soilMix",
    "studs",
    "topsoil",
    "topsoilBags",
    "wallpaperRolls",
  ]),
  es: new Set([
    "asphaltDriveway",
    "baseboardTrim",
    "boardFeet",
    "concrete",
    "concreteBags",
    "deck",
    "deckMud",
    "drywall",
    "drywallMudTape",
    "drywallTexture",
    "fence",
    "flooring",
    "gravel",
    "gravelTons",
    "mulch",
    "mulchBags",
    "paint",
    "paverBase",
    "roofing",
    "sand",
    "soilMix",
    "studs",
    "tile",
    "tileGrout",
    "topsoil",
    "topsoilBags",
    "wallpaperRolls",
  ]),
  "zh-TW": new Set([
    "asphaltDriveway",
    "baseboardTrim",
    "boardFeet",
    "concrete",
    "concreteBags",
    "deck",
    "deckMud",
    "drywall",
    "drywallMudTape",
    "drywallTexture",
    "fence",
    "flooring",
    "gravel",
    "gravelTons",
    "mulch",
    "mulchBags",
    "paint",
    "paverBase",
    "roofing",
    "sand",
    "soilMix",
    "studs",
    "tile",
    "tileGrout",
    "topsoil",
    "topsoilBags",
    "wallpaperRolls",
  ]),
};

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

export function isReviewNoindexCalculator(
  locale: Locale,
  calculatorId: string,
) {
  return REVIEW_NOINDEX_CALCULATORS_BY_LOCALE[locale].has(calculatorId);
}

export function isReviewNoindexResource(locale: Locale, slug: string) {
  return REVIEW_NOINDEX_RESOURCES_BY_LOCALE[locale].has(slug);
}

export function isIndexedReviewLocale(locale: Locale) {
  return locale === "en";
}

export function isReviewVisibleCalculator(
  locale: Locale,
  calculatorId: string,
) {
  return (
    isIndexedReviewLocale(locale) && REVIEW_CORE_CALCULATORS_EN.has(calculatorId)
  );
}

export function isReviewVisibleGuide(locale: Locale, guideId: string) {
  return isIndexedReviewLocale(locale) && REVIEW_CORE_GUIDES_EN.has(guideId);
}

export function isReviewVisibleResource(locale: Locale, slug: string) {
  return isIndexedReviewLocale(locale) && REVIEW_CORE_RESOURCES_EN.has(slug);
}

export function shouldRenderReviewerSignal(
  kind: "calculator" | "guide" | "resource",
  locale: Locale,
  id: string,
) {
  if (locale !== "en") return false;

  if (kind === "calculator") {
    return REVIEW_CORE_CALCULATORS_EN.has(id);
  }

  if (kind === "guide") {
    return REVIEW_CORE_GUIDES_EN.has(id);
  }

  return REVIEW_CORE_RESOURCES_EN.has(id);
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
  locale: Locale = "en",
) {
  return sortByPriority(
    calculators.filter(
      (calculator) => !isReviewNoindexCalculator(locale, calculator.id),
    ),
    (calculator) => calculator.id,
    buildPriorityMap(REVIEW_FOCUS_CALCULATOR_ORDER),
  );
}

export function sortReviewVisibleCalculators<T extends { id: string }>(
  calculators: readonly T[],
  locale: Locale = "en",
) {
  return sortByPriority(
    calculators.filter((calculator) =>
      isReviewVisibleCalculator(locale, calculator.id),
    ),
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

export function sortReviewVisibleGuides<T extends { id: string }>(
  guides: readonly T[],
  locale: Locale,
) {
  return sortByPriority(
    guides.filter((guide) => isReviewVisibleGuide(locale, guide.id)),
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

export function sortReviewVisibleResources<T extends { slug: string }>(
  resources: readonly T[],
  locale: Locale,
) {
  return sortByPriority(
    resources.filter((resource) => isReviewVisibleResource(locale, resource.slug)),
    (resource) => resource.slug,
    buildPriorityMap(REVIEW_FOCUS_RESOURCE_ORDER),
  );
}

export function filterReviewVisibleCategories<
  TCategory extends { id: string },
  TCalculator extends { id: string; categoryId: string },
>(
  categories: readonly TCategory[],
  calculators: readonly TCalculator[],
  locale: Locale,
) {
  const visibleCategoryIds = new Set(
    calculators
      .filter((calculator) => isReviewVisibleCalculator(locale, calculator.id))
      .map((calculator) => calculator.categoryId),
  );

  return categories.filter((category) => visibleCategoryIds.has(category.id));
}
