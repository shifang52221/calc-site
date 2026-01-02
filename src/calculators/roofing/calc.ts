export type RoofingInputs = {
  roofAreaSqFt: number;
  wastePercent: number;
  coverageSqFtPerBundle: number;
  pricePerBundle?: number;
};

export type RoofingResults = {
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
  const multiplier = 1 + Math.max(0, wastePercent) / 100;
  const coverage = Math.max(1, coverageSqFtPerBundle);

  const neededSqFt = baseArea * multiplier;
  const squares = neededSqFt / 100;
  const bundles = Math.ceil(neededSqFt / coverage);

  const cost =
    typeof pricePerBundle === "number" && isFinite(pricePerBundle)
      ? Math.max(0, pricePerBundle) * bundles
      : undefined;

  return { squares: Math.max(0, squares), bundles, cost };
}
