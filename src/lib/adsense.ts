export const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "";

const DEFAULT_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT?.trim() || "";

const REVIEW_MODE_RAW = process.env.NEXT_PUBLIC_SITE_REVIEW_MODE?.trim() || "";
const ALLOWED_PLACEMENTS_RAW =
  process.env.NEXT_PUBLIC_ADSENSE_ALLOWED_PLACEMENTS?.trim() || "";

export const ADSENSE_REVIEW_MODE =
  REVIEW_MODE_RAW === "1" || REVIEW_MODE_RAW.toLowerCase() === "true";

export const ADSENSE_ALLOWED_PLACEMENTS = ALLOWED_PLACEMENTS_RAW
  .split(",")
  .map((placement) => placement.trim())
  .filter(Boolean);

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

export type AdPlacement = keyof typeof ADSENSE_SLOTS;

type CanRenderAdSlotParams = {
  clientId: string;
  slot: string;
  reviewMode: boolean;
  placement?: AdPlacement;
  allowedPlacements?: string[];
};

export function canRenderAdSlot({
  clientId,
  slot,
  reviewMode,
  placement,
  allowedPlacements = [],
}: CanRenderAdSlotParams) {
  if (!clientId || !slot) {
    return false;
  }

  if (reviewMode) {
    return false;
  }

  if (!placement || allowedPlacements.length === 0) {
    return true;
  }

  return allowedPlacements.includes(placement);
}

export function isAdSenseEnabled() {
  return Boolean(ADSENSE_CLIENT);
}
