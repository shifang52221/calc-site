export type WallpaperRollsInputs = {
  areaSqFt: number;
  openingsSqFt: number;
  wastePercent: number;
  coverageSqFtPerRoll: number;
  pricePerRoll?: number;
};

export type WallpaperRollsResults = {
  netAreaSqFt: number;
  areaWithWasteSqFt: number;
  coverageSqFtPerRoll: number;
  rolls: number;
  totalCoverageSqFt: number;
  cost?: number;
};

export function calculateWallpaperRolls({
  areaSqFt,
  openingsSqFt,
  wastePercent,
  coverageSqFtPerRoll,
  pricePerRoll,
}: WallpaperRollsInputs): WallpaperRollsResults {
  const normalizedArea = Math.max(0, areaSqFt);
  const normalizedOpenings = Math.max(0, openingsSqFt);
  const netAreaSqFt = Math.max(0, normalizedArea - normalizedOpenings);

  const multiplier = 1 + Math.max(0, wastePercent) / 100;
  const areaWithWasteSqFt = netAreaSqFt * multiplier;

  const coverage = Math.max(0.000001, coverageSqFtPerRoll);
  const rolls = Math.max(0, Math.ceil(areaWithWasteSqFt / coverage));

  const totalCoverageSqFt = rolls * coverage;

  const cost =
    typeof pricePerRoll === "number" && Number.isFinite(pricePerRoll)
      ? Math.max(0, pricePerRoll) * rolls
      : undefined;

  return {
    netAreaSqFt,
    areaWithWasteSqFt,
    coverageSqFtPerRoll: coverageSqFtPerRoll,
    rolls,
    totalCoverageSqFt,
    cost,
  };
}

