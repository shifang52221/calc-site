import type { Locale } from "@/i18n/routing";
import { routes } from "@/lib/routes";

export type CalculatorCardKey =
  | "featuredPaint"
  | "featuredPaintDesc"
  | "featuredWallpaperRolls"
  | "featuredWallpaperRollsDesc"
  | "featuredFlooring"
  | "featuredFlooringDesc"
  | "featuredTile"
  | "featuredTileDesc"
  | "featuredDrywall"
  | "featuredDrywallDesc"
  | "featuredConcrete"
  | "featuredConcreteDesc"
  | "featuredMulch"
  | "featuredMulchDesc"
  | "featuredRoofing"
  | "featuredRoofingDesc"
  | "featuredDeck"
  | "featuredDeckDesc"
  | "featuredFence"
  | "featuredFenceDesc"
  | "featuredGravel"
  | "featuredGravelDesc"
  | "featuredPaverBase"
  | "featuredPaverBaseDesc"
  | "featuredSand"
  | "featuredSandDesc"
  | "featuredSoilMix"
  | "featuredSoilMixDesc"
  | "featuredAsphaltDriveway"
  | "featuredAsphaltDrivewayDesc"
  | "featuredBoardFeet"
  | "featuredBoardFeetDesc"
  | "featuredMulchBags"
  | "featuredMulchBagsDesc"
  | "featuredConcreteBags"
  | "featuredConcreteBagsDesc"
  | "featuredStuds"
  | "featuredStudsDesc"
  | "featuredBaseboardTrim"
  | "featuredBaseboardTrimDesc"
  | "featuredTopsoilBags"
  | "featuredTopsoilBagsDesc"
  | "featuredGravelTons"
  | "featuredGravelTonsDesc"
  | "featuredTileGrout"
  | "featuredTileGroutDesc"
  | "featuredDrywallMudTape"
  | "featuredDrywallMudTapeDesc"
  | "featuredTopsoil"
  | "featuredTopsoilDesc";

export type CalculatorId =
  | "paint"
  | "wallpaperRolls"
  | "flooring"
  | "tile"
  | "drywall"
  | "concrete"
  | "mulch"
  | "roofing"
  | "deck"
  | "fence"
  | "gravel"
  | "paverBase"
  | "sand"
  | "soilMix"
  | "asphaltDriveway"
  | "boardFeet"
  | "mulchBags"
  | "concreteBags"
  | "studs"
  | "baseboardTrim"
  | "topsoilBags"
  | "gravelTons"
  | "tileGrout"
  | "drywallMudTape"
  | "topsoil";

export type CalculatorCategoryId =
  | "walls-finishes"
  | "floors-tile"
  | "concrete-masonry"
  | "roofing-exterior"
  | "landscaping";

export type CalculatorCategoryTitleKey =
  | "categoryWallsFinishes"
  | "categoryFloorsTile"
  | "categoryConcreteMasonry"
  | "categoryRoofingExterior"
  | "categoryLandscaping";

export type CalculatorDefinition = {
  id: CalculatorId;
  href: (locale: Locale) => string;
  titleKey: CalculatorCardKey;
  descriptionKey: CalculatorCardKey;
  categoryId: CalculatorCategoryId;
  tags: string[];
};

export const CALCULATOR_CATEGORIES: Array<{
  id: CalculatorCategoryId;
  titleKey: CalculatorCategoryTitleKey;
}> = [
  { id: "walls-finishes", titleKey: "categoryWallsFinishes" },
  { id: "floors-tile", titleKey: "categoryFloorsTile" },
  { id: "concrete-masonry", titleKey: "categoryConcreteMasonry" },
  { id: "roofing-exterior", titleKey: "categoryRoofingExterior" },
  { id: "landscaping", titleKey: "categoryLandscaping" },
];

export const CALCULATORS: CalculatorDefinition[] = [
  {
    id: "paint",
    href: routes.paint,
    titleKey: "featuredPaint",
    descriptionKey: "featuredPaintDesc",
    categoryId: "walls-finishes",
    tags: ["paint", "primer", "coverage", "gallon", "liter", "area"],
  },
  {
    id: "wallpaperRolls",
    href: routes.wallpaperRolls,
    titleKey: "featuredWallpaperRolls",
    descriptionKey: "featuredWallpaperRollsDesc",
    categoryId: "walls-finishes",
    tags: ["wallpaper", "rolls", "coverage", "area", "rooms"],
  },
  {
    id: "flooring",
    href: routes.flooring,
    titleKey: "featuredFlooring",
    descriptionKey: "featuredFlooringDesc",
    categoryId: "floors-tile",
    tags: ["flooring", "area", "sq ft", "sq m", "boxes", "waste"],
  },
  {
    id: "tile",
    href: routes.tile,
    titleKey: "featuredTile",
    descriptionKey: "featuredTileDesc",
    categoryId: "floors-tile",
    tags: ["tile", "boxes", "area", "waste", "grout"],
  },
  {
    id: "tileGrout",
    href: routes.tileGrout,
    titleKey: "featuredTileGrout",
    descriptionKey: "featuredTileGroutDesc",
    categoryId: "floors-tile",
    tags: ["tile grout", "grout", "bags", "joint", "coverage"],
  },
  {
    id: "drywall",
    href: routes.drywall,
    titleKey: "featuredDrywall",
    descriptionKey: "featuredDrywallDesc",
    categoryId: "walls-finishes",
    tags: ["drywall", "sheets", "walls", "ceiling", "area"],
  },
  {
    id: "drywallMudTape",
    href: routes.drywallMudTape,
    titleKey: "featuredDrywallMudTape",
    descriptionKey: "featuredDrywallMudTapeDesc",
    categoryId: "walls-finishes",
    tags: ["drywall", "joint compound", "mud", "tape", "seams"],
  },
  {
    id: "concrete",
    href: routes.concrete,
    titleKey: "featuredConcrete",
    descriptionKey: "featuredConcreteDesc",
    categoryId: "concrete-masonry",
    tags: ["concrete", "slab", "volume", "cubic yards", "m3"],
  },
  {
    id: "concreteBags",
    href: routes.concreteBags,
    titleKey: "featuredConcreteBags",
    descriptionKey: "featuredConcreteBagsDesc",
    categoryId: "concrete-masonry",
    tags: ["concrete", "bags", "sakrete", "quikrete", "slab"],
  },
  {
    id: "studs",
    href: routes.studs,
    titleKey: "featuredStuds",
    descriptionKey: "featuredStudsDesc",
    categoryId: "walls-finishes",
    tags: ["studs", "framing", "wall", "2x4", "spacing"],
  },
  {
    id: "baseboardTrim",
    href: routes.baseboardTrim,
    titleKey: "featuredBaseboardTrim",
    descriptionKey: "featuredBaseboardTrimDesc",
    categoryId: "walls-finishes",
    tags: ["baseboard", "trim", "molding", "linear feet", "doors"],
  },
  {
    id: "mulch",
    href: routes.mulch,
    titleKey: "featuredMulch",
    descriptionKey: "featuredMulchDesc",
    categoryId: "landscaping",
    tags: ["mulch", "volume", "cubic yards", "depth", "beds"],
  },
  {
    id: "roofing",
    href: routes.roofing,
    titleKey: "featuredRoofing",
    descriptionKey: "featuredRoofingDesc",
    categoryId: "roofing-exterior",
    tags: ["roof", "shingles", "bundles", "squares", "area"],
  },
  {
    id: "deck",
    href: routes.deck,
    titleKey: "featuredDeck",
    descriptionKey: "featuredDeckDesc",
    categoryId: "roofing-exterior",
    tags: ["deck", "boards", "joists", "lumber", "linear feet"],
  },
  {
    id: "fence",
    href: routes.fence,
    titleKey: "featuredFence",
    descriptionKey: "featuredFenceDesc",
    categoryId: "roofing-exterior",
    tags: ["fence", "posts", "panels", "gates", "linear feet"],
  },
  {
    id: "gravel",
    href: routes.gravel,
    titleKey: "featuredGravel",
    descriptionKey: "featuredGravelDesc",
    categoryId: "landscaping",
    tags: ["gravel", "stone", "volume", "cubic yards", "driveway"],
  },
  {
    id: "gravelTons",
    href: routes.gravelTons,
    titleKey: "featuredGravelTons",
    descriptionKey: "featuredGravelTonsDesc",
    categoryId: "landscaping",
    tags: ["gravel", "tons", "density", "cubic yards", "supplier"],
  },
  {
    id: "mulchBags",
    href: routes.mulchBags,
    titleKey: "featuredMulchBags",
    descriptionKey: "featuredMulchBagsDesc",
    categoryId: "landscaping",
    tags: ["mulch", "bags", "cubic feet", "landscaping", "cost"],
  },
  {
    id: "paverBase",
    href: routes.paverBase,
    titleKey: "featuredPaverBase",
    descriptionKey: "featuredPaverBaseDesc",
    categoryId: "landscaping",
    tags: ["pavers", "patio", "base", "bedding sand", "crushed stone"],
  },
  {
    id: "sand",
    href: routes.sand,
    titleKey: "featuredSand",
    descriptionKey: "featuredSandDesc",
    categoryId: "landscaping",
    tags: ["sand", "fill", "leveling", "volume", "tons", "cubic yards"],
  },
  {
    id: "soilMix",
    href: routes.soilMix,
    titleKey: "featuredSoilMix",
    descriptionKey: "featuredSoilMixDesc",
    categoryId: "landscaping",
    tags: ["soil mix", "compost", "topsoil", "raised bed", "ratio"],
  },
  {
    id: "topsoilBags",
    href: routes.topsoilBags,
    titleKey: "featuredTopsoilBags",
    descriptionKey: "featuredTopsoilBagsDesc",
    categoryId: "landscaping",
    tags: ["topsoil", "bags", "cubic feet", "garden", "cost"],
  },
  {
    id: "asphaltDriveway",
    href: routes.asphaltDriveway,
    titleKey: "featuredAsphaltDriveway",
    descriptionKey: "featuredAsphaltDrivewayDesc",
    categoryId: "roofing-exterior",
    tags: ["asphalt", "driveway", "tons", "thickness", "truckloads"],
  },
  {
    id: "boardFeet",
    href: routes.boardFeet,
    titleKey: "featuredBoardFeet",
    descriptionKey: "featuredBoardFeetDesc",
    categoryId: "roofing-exterior",
    tags: ["lumber", "board feet", "wood", "volume", "cost"],
  },
  {
    id: "topsoil",
    href: routes.topsoil,
    titleKey: "featuredTopsoil",
    descriptionKey: "featuredTopsoilDesc",
    categoryId: "landscaping",
    tags: ["topsoil", "soil", "volume", "cubic yards", "lawn"],
  },
];

export const CALCULATOR_CARDS: Array<{
  href: (locale: Locale) => string;
  titleKey: CalculatorCardKey;
  descriptionKey: CalculatorCardKey;
}> = CALCULATORS.map(({ href, titleKey, descriptionKey }) => ({
  href,
  titleKey,
  descriptionKey,
}));
