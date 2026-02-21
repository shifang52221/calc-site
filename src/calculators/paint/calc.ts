export type PaintInputs = {
  areaSqFt: number;
  coats: number;
  coverageSqFtPerGallon: number;
  wastePercent: number;
  pricePerGallon?: number;
};

export type PaintResults = {
  baseGallons: number;
  wasteGallons: number;
  gallons: number;
  cost?: number;
};

export function calculatePaint({
  areaSqFt,
  coats,
  coverageSqFtPerGallon,
  wastePercent,
  pricePerGallon,
}: PaintInputs): PaintResults {
  const normalizedArea = Math.max(0, areaSqFt);
  const normalizedCoats = Math.max(1, coats);
  const normalizedCoverage = Math.max(1, coverageSqFtPerGallon);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const baseGallonsRaw =
    (normalizedArea * normalizedCoats) / normalizedCoverage;
  const baseGallons = Math.max(0, baseGallonsRaw);
  const wasteGallons = Math.max(0, baseGallons * wasteMultiplier);
  const gallons = Math.max(0, baseGallons + wasteGallons);

  const cost =
    typeof pricePerGallon === "number" && isFinite(pricePerGallon)
      ? Math.max(0, pricePerGallon) * gallons
      : undefined;

  return { baseGallons, wasteGallons, gallons, cost };
}
