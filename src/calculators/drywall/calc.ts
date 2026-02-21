export type DrywallInputs = {
  areaSqFt: number;
  wastePercent: number;
  sheetCoverageSqFt: number;
  pricePerSheet?: number;
};

export type DrywallResults = {
  baseAreaSqFt: number;
  wasteSqFt: number;
  neededSqFt: number;
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
  const wasteMultiplier = Math.max(0, wastePercent) / 100;
  const wasteSqFt = Math.max(0, baseArea * wasteMultiplier);
  const neededSqFt = Math.max(0, baseArea + wasteSqFt);
  const coverage = Math.max(1, sheetCoverageSqFt);
  const sheets = Math.ceil(neededSqFt / coverage);

  const cost =
    typeof pricePerSheet === "number" && isFinite(pricePerSheet)
      ? Math.max(0, pricePerSheet) * sheets
      : undefined;

  return { baseAreaSqFt: baseArea, wasteSqFt, neededSqFt, sheets, cost };
}
