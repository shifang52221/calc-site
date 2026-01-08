import type { Locale } from "@/i18n/routing";

export function localePath(locale: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export const routes = {
  home: (locale: Locale) => `/${locale}`,
  calculators: (locale: Locale) => `/${locale}/calculators`,
  calculatorsCategory: (locale: Locale, categoryId: string) =>
    `/${locale}/calculators/${categoryId}`,
  guides: (locale: Locale) => `/${locale}/guides`,
  guidePaint: (locale: Locale) => `/${locale}/guides/home-improvement/paint`,
  guidePaintCeiling: (locale: Locale) =>
    `/${locale}/guides/home-improvement/paint-ceiling`,
  guidePaintTrim: (locale: Locale) =>
    `/${locale}/guides/home-improvement/paint-trim`,
  guideFlooring: (locale: Locale) =>
    `/${locale}/guides/home-improvement/flooring`,
  guideFlooringBoxes: (locale: Locale) =>
    `/${locale}/guides/home-improvement/flooring-boxes`,
  guideConcrete: (locale: Locale) =>
    `/${locale}/guides/home-improvement/concrete`,
  guideTile: (locale: Locale) => `/${locale}/guides/home-improvement/tile`,
  guideTileWaste: (locale: Locale) =>
    `/${locale}/guides/home-improvement/tile-waste`,
  guideDrywall: (locale: Locale) =>
    `/${locale}/guides/home-improvement/drywall`,
  guideDrywallCeiling: (locale: Locale) =>
    `/${locale}/guides/home-improvement/drywall-ceiling`,
  guideMulch: (locale: Locale) => `/${locale}/guides/home-improvement/mulch`,
  guideMulchDepth: (locale: Locale) =>
    `/${locale}/guides/home-improvement/mulch-depth`,
  guideRoofing: (locale: Locale) =>
    `/${locale}/guides/home-improvement/roofing`,
  guideRoofingShed: (locale: Locale) =>
    `/${locale}/guides/home-improvement/roofing-shed`,
  guideDeck: (locale: Locale) => `/${locale}/guides/home-improvement/deck`,
  guideFence: (locale: Locale) => `/${locale}/guides/home-improvement/fence`,
  guideFencePosts: (locale: Locale) =>
    `/${locale}/guides/home-improvement/fence-posts`,
  guideGravel: (locale: Locale) => `/${locale}/guides/home-improvement/gravel`,
  guideGravelTons: (locale: Locale) =>
    `/${locale}/guides/home-improvement/gravel-tons`,
  guideTopsoil: (locale: Locale) =>
    `/${locale}/guides/home-improvement/topsoil`,
  guideTopsoilLeveling: (locale: Locale) =>
    `/${locale}/guides/home-improvement/topsoil-leveling`,
  paint: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/paint`,
  flooring: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/flooring`,
  tile: (locale: Locale) => `/${locale}/calculators/home-improvement/tile`,
  drywall: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/drywall`,
  drywallTexture: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/drywall-texture`,
  concrete: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/concrete`,
  mulch: (locale: Locale) => `/${locale}/calculators/home-improvement/mulch`,
  roofing: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/roofing`,
  deck: (locale: Locale) => `/${locale}/calculators/home-improvement/deck`,
  deckMud: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/deck-mud`,
  fence: (locale: Locale) => `/${locale}/calculators/home-improvement/fence`,
  gravel: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/gravel`,
  paverBase: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/paver-base`,
  sand: (locale: Locale) => `/${locale}/calculators/home-improvement/sand`,
  soilMix: (locale: Locale) => `/${locale}/calculators/home-improvement/soil-mix`,
  topsoil: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/topsoil`,
  asphaltDriveway: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/asphalt-driveway`,
  boardFeet: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/board-feet`,
  mulchBags: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/mulch-bags`,
  concreteBags: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/concrete-bags`,
  studs: (locale: Locale) => `/${locale}/calculators/home-improvement/studs`,
  baseboardTrim: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/baseboard-trim`,
  topsoilBags: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/topsoil-bags`,
  gravelTons: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/gravel-tons`,
  tileGrout: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/tile-grout`,
  drywallMudTape: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/drywall-mud-tape`,
  wallpaperRolls: (locale: Locale) =>
    `/${locale}/calculators/home-improvement/wallpaper-rolls`,
  privacy: (locale: Locale) => `/${locale}/privacy`,
  terms: (locale: Locale) => `/${locale}/terms`,
  about: (locale: Locale) => `/${locale}/about`,
  contact: (locale: Locale) => `/${locale}/contact`,
};
