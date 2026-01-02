export type UnitSystem = "us" | "metric";

export const SQFT_PER_M2 = 10.763910416709722;
export const M2_PER_SQFT = 1 / SQFT_PER_M2;

export const CM_PER_IN = 2.54;
export const IN_PER_CM = 1 / CM_PER_IN;

export const M_PER_FT = 0.3048;
export const FT_PER_M = 1 / M_PER_FT;

export const L_PER_GAL = 3.785411784;
export const GAL_PER_L = 1 / L_PER_GAL;

export const M3_PER_YD3 = 0.764554857984;
export const YD3_PER_M3 = 1 / M3_PER_YD3;

export const LB_PER_KG = 2.2046226218487757;
export const KG_PER_LB = 1 / LB_PER_KG;

export function m2ToSqFt(m2: number) {
  return m2 * SQFT_PER_M2;
}

export function sqFtToM2(sqft: number) {
  return sqft * M2_PER_SQFT;
}

export function cmToIn(cm: number) {
  return cm * IN_PER_CM;
}

export function inToCm(inches: number) {
  return inches * CM_PER_IN;
}

export function mToFt(m: number) {
  return m * FT_PER_M;
}

export function ftToM(ft: number) {
  return ft * M_PER_FT;
}

export function litersToGallons(liters: number) {
  return liters * GAL_PER_L;
}

export function gallonsToLiters(gallons: number) {
  return gallons * L_PER_GAL;
}

export function coverageM2PerLToSqFtPerGal(m2PerL: number) {
  return m2PerL * SQFT_PER_M2 * L_PER_GAL;
}

export function coverageSqFtPerGalToM2PerL(sqftPerGal: number) {
  return sqftPerGal / (SQFT_PER_M2 * L_PER_GAL);
}

export function cubicYardsToCubicMeters(yd3: number) {
  return yd3 * M3_PER_YD3;
}

export function cubicMetersToCubicYards(m3: number) {
  return m3 * YD3_PER_M3;
}

export function roundForInput(value: number, decimals: number) {
  if (!Number.isFinite(value)) return "";
  const factor = 10 ** decimals;
  const rounded = Math.round(value * factor) / factor;
  const fixed = rounded.toFixed(decimals);
  return fixed.replace(/\.?0+$/, "");
}
