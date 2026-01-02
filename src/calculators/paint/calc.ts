export type PaintInputs = {
  areaSqFt: number;
  coats: number;
  coverageSqFtPerGallon: number;
  wastePercent: number;
  pricePerGallon?: number;
};

export type PaintResults = {
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
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const gallonsRaw =
    (normalizedArea * normalizedCoats * multiplier) / normalizedCoverage;
  const gallons = Math.max(0, gallonsRaw);

  const cost =
    typeof pricePerGallon === "number" && isFinite(pricePerGallon)
      ? Math.max(0, pricePerGallon) * gallons
      : undefined;

  return { gallons, cost };
}
