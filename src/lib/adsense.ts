export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "";

const DEFAULT_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT?.trim() || "";

export const ADSENSE_SLOTS = {
  homeTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP?.trim() || DEFAULT_AD_SLOT,
  calculatorAfterResult:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_AFTER_RESULT?.trim() ||
    DEFAULT_AD_SLOT,
  calculatorBeforeRelated:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_BEFORE_RELATED?.trim() ||
    DEFAULT_AD_SLOT,
  guideAfterIntro:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE_AFTER_INTRO?.trim() ||
    DEFAULT_AD_SLOT,
  guideAfterCta:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE_AFTER_CTA?.trim() ||
    DEFAULT_AD_SLOT,
  calculatorsIndexTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_INDEX_TOP?.trim() ||
    DEFAULT_AD_SLOT,
  guidesIndexTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDES_INDEX_TOP?.trim() ||
    DEFAULT_AD_SLOT,
} as const;

export function isAdSenseEnabled() {
  return Boolean(ADSENSE_CLIENT);
}
