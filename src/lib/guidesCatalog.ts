import type { Locale } from "@/i18n/routing";
import { routes } from "@/lib/routes";
import type { CalculatorCategoryId, CalculatorId } from "@/lib/calculatorsCatalog";

export type GuideKey =
  | "paintTitle"
  | "paintDescription"
  | "paintCeilingTitle"
  | "paintCeilingDescription"
  | "paintTrimTitle"
  | "paintTrimDescription"
  | "flooringTitle"
  | "flooringDescription"
  | "flooringBoxesTitle"
  | "flooringBoxesDescription"
  | "tileTitle"
  | "tileDescription"
  | "tileWasteTitle"
  | "tileWasteDescription"
  | "drywallTitle"
  | "drywallDescription"
  | "drywallCeilingTitle"
  | "drywallCeilingDescription"
  | "concreteTitle"
  | "concreteDescription"
  | "mulchTitle"
  | "mulchDescription"
  | "mulchDepthTitle"
  | "mulchDepthDescription"
  | "roofingTitle"
  | "roofingDescription"
  | "roofingShedTitle"
  | "roofingShedDescription"
  | "deckTitle"
  | "deckDescription"
  | "fenceTitle"
  | "fenceDescription"
  | "fencePostsTitle"
  | "fencePostsDescription"
  | "gravelTitle"
  | "gravelDescription"
  | "gravelTonsTitle"
  | "gravelTonsDescription"
  | "topsoilTitle"
  | "topsoilDescription"
  | "topsoilLevelingTitle"
  | "topsoilLevelingDescription";

export type GuideId =
  | "paint"
  | "paint-ceiling"
  | "paint-trim"
  | "flooring"
  | "flooring-boxes"
  | "tile"
  | "tile-waste"
  | "drywall"
  | "drywall-ceiling"
  | "concrete"
  | "mulch"
  | "mulch-depth"
  | "roofing"
  | "roofing-shed"
  | "deck"
  | "fence"
  | "fence-posts"
  | "gravel"
  | "gravel-tons"
  | "topsoil"
  | "topsoil-leveling";

export type GuideDefinition = {
  id: GuideId;
  href: (locale: Locale) => string;
  titleKey: GuideKey;
  descriptionKey: GuideKey;
  categoryId: CalculatorCategoryId;
  calculatorId: CalculatorId;
};

export const GUIDE_DEFINITIONS: GuideDefinition[] = [
  {
    id: "paint",
    href: routes.guidePaint,
    titleKey: "paintTitle",
    descriptionKey: "paintDescription",
    categoryId: "walls-finishes",
    calculatorId: "paint",
  },
  {
    id: "paint-ceiling",
    href: routes.guidePaintCeiling,
    titleKey: "paintCeilingTitle",
    descriptionKey: "paintCeilingDescription",
    categoryId: "walls-finishes",
    calculatorId: "paint",
  },
  {
    id: "paint-trim",
    href: routes.guidePaintTrim,
    titleKey: "paintTrimTitle",
    descriptionKey: "paintTrimDescription",
    categoryId: "walls-finishes",
    calculatorId: "paint",
  },
  {
    id: "flooring",
    href: routes.guideFlooring,
    titleKey: "flooringTitle",
    descriptionKey: "flooringDescription",
    categoryId: "floors-tile",
    calculatorId: "flooring",
  },
  {
    id: "flooring-boxes",
    href: routes.guideFlooringBoxes,
    titleKey: "flooringBoxesTitle",
    descriptionKey: "flooringBoxesDescription",
    categoryId: "floors-tile",
    calculatorId: "flooring",
  },
  {
    id: "tile",
    href: routes.guideTile,
    titleKey: "tileTitle",
    descriptionKey: "tileDescription",
    categoryId: "floors-tile",
    calculatorId: "tile",
  },
  {
    id: "tile-waste",
    href: routes.guideTileWaste,
    titleKey: "tileWasteTitle",
    descriptionKey: "tileWasteDescription",
    categoryId: "floors-tile",
    calculatorId: "tile",
  },
  {
    id: "drywall",
    href: routes.guideDrywall,
    titleKey: "drywallTitle",
    descriptionKey: "drywallDescription",
    categoryId: "walls-finishes",
    calculatorId: "drywall",
  },
  {
    id: "drywall-ceiling",
    href: routes.guideDrywallCeiling,
    titleKey: "drywallCeilingTitle",
    descriptionKey: "drywallCeilingDescription",
    categoryId: "walls-finishes",
    calculatorId: "drywall",
  },
  {
    id: "concrete",
    href: routes.guideConcrete,
    titleKey: "concreteTitle",
    descriptionKey: "concreteDescription",
    categoryId: "concrete-masonry",
    calculatorId: "concrete",
  },
  {
    id: "mulch",
    href: routes.guideMulch,
    titleKey: "mulchTitle",
    descriptionKey: "mulchDescription",
    categoryId: "landscaping",
    calculatorId: "mulch",
  },
  {
    id: "mulch-depth",
    href: routes.guideMulchDepth,
    titleKey: "mulchDepthTitle",
    descriptionKey: "mulchDepthDescription",
    categoryId: "landscaping",
    calculatorId: "mulch",
  },
  {
    id: "roofing",
    href: routes.guideRoofing,
    titleKey: "roofingTitle",
    descriptionKey: "roofingDescription",
    categoryId: "roofing-exterior",
    calculatorId: "roofing",
  },
  {
    id: "roofing-shed",
    href: routes.guideRoofingShed,
    titleKey: "roofingShedTitle",
    descriptionKey: "roofingShedDescription",
    categoryId: "roofing-exterior",
    calculatorId: "roofing",
  },
  {
    id: "deck",
    href: routes.guideDeck,
    titleKey: "deckTitle",
    descriptionKey: "deckDescription",
    categoryId: "roofing-exterior",
    calculatorId: "deck",
  },
  {
    id: "fence",
    href: routes.guideFence,
    titleKey: "fenceTitle",
    descriptionKey: "fenceDescription",
    categoryId: "roofing-exterior",
    calculatorId: "fence",
  },
  {
    id: "fence-posts",
    href: routes.guideFencePosts,
    titleKey: "fencePostsTitle",
    descriptionKey: "fencePostsDescription",
    categoryId: "roofing-exterior",
    calculatorId: "fence",
  },
  {
    id: "gravel",
    href: routes.guideGravel,
    titleKey: "gravelTitle",
    descriptionKey: "gravelDescription",
    categoryId: "landscaping",
    calculatorId: "gravel",
  },
  {
    id: "gravel-tons",
    href: routes.guideGravelTons,
    titleKey: "gravelTonsTitle",
    descriptionKey: "gravelTonsDescription",
    categoryId: "landscaping",
    calculatorId: "gravel",
  },
  {
    id: "topsoil",
    href: routes.guideTopsoil,
    titleKey: "topsoilTitle",
    descriptionKey: "topsoilDescription",
    categoryId: "landscaping",
    calculatorId: "topsoil",
  },
  {
    id: "topsoil-leveling",
    href: routes.guideTopsoilLeveling,
    titleKey: "topsoilLevelingTitle",
    descriptionKey: "topsoilLevelingDescription",
    categoryId: "landscaping",
    calculatorId: "topsoil",
  },
];

export const GUIDES: Array<{
  href: (locale: Locale) => string;
  titleKey: GuideKey;
  descriptionKey: GuideKey;
}> = GUIDE_DEFINITIONS.map(({ href, titleKey, descriptionKey }) => ({
  href,
  titleKey,
  descriptionKey,
}));

export function getGuideDefinition(id: GuideId) {
  return GUIDE_DEFINITIONS.find((guide) => guide.id === id);
}
