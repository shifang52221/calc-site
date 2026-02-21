export type RoofingInputs = {
  roofAreaSqFt: number;
  wastePercent: number;
  coverageSqFtPerBundle: number;
  pricePerBundle?: number;
};

export type RoofingResults = {
  baseAreaSqFt: number;
  wasteSqFt: number;
  neededSqFt: number;
  squares: number;
  bundles: number;
  cost?: number;
};

export function calculateRoofing({
  roofAreaSqFt,
  wastePercent,
  coverageSqFtPerBundle,
  pricePerBundle,
}: RoofingInputs): RoofingResults {
  const baseArea = Math.max(0, roofAreaSqFt);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;
  const coverage = Math.max(1, coverageSqFtPerBundle);

  const wasteSqFt = Math.max(0, baseArea * wasteMultiplier);
  const neededSqFt = Math.max(0, baseArea + wasteSqFt);
  const squares = neededSqFt / 100;
  const bundles = Math.ceil(neededSqFt / coverage);

  const cost =
    typeof pricePerBundle === "number" && isFinite(pricePerBundle)
      ? Math.max(0, pricePerBundle) * bundles
      : undefined;

  return {
    baseAreaSqFt: baseArea,
    wasteSqFt,
    neededSqFt,
    squares: Math.max(0, squares),
    bundles,
    cost,
  };
}
