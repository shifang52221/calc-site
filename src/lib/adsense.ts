export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "";

export const ADSENSE_SLOTS = {
  homeTop: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP?.trim() || "",
  calculatorAfterResult:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_AFTER_RESULT?.trim() || "",
  calculatorBeforeRelated:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_BEFORE_RELATED?.trim() || "",
  guideAfterIntro:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE_AFTER_INTRO?.trim() || "",
  guideAfterCta:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDE_AFTER_CTA?.trim() || "",
  calculatorsIndexTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_INDEX_TOP?.trim() || "",
  guidesIndexTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDES_INDEX_TOP?.trim() || "",
} as const;

export function isAdSenseEnabled() {
  return Boolean(ADSENSE_CLIENT);
}
