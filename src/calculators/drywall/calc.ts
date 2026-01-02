export type DrywallInputs = {
  areaSqFt: number;
  wastePercent: number;
  sheetCoverageSqFt: number;
  pricePerSheet?: number;
};

export type DrywallResults = {
  sheets: number;
  cost?: number;
};

export function calculateDrywall({
  areaSqFt,
  wastePercent,
  sheetCoverageSqFt,
  pricePerSheet,
}: DrywallInputs): DrywallResults {
  const baseArea = Math.max(0, areaSqFt);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;
  const neededSqFt = baseArea * multiplier;
  const coverage = Math.max(1, sheetCoverageSqFt);
  const sheets = Math.ceil(neededSqFt / coverage);

  const cost =
    typeof pricePerSheet === "number" && isFinite(pricePerSheet)
      ? Math.max(0, pricePerSheet) * sheets
      : undefined;

  return { sheets, cost };
}
