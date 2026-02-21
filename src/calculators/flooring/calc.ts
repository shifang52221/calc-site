export type FlooringInputs = {
  areaSqFt: number;
  wastePercent: number;
  pricePerSqFt?: number;
};

export type FlooringResults = {
  baseAreaSqFt: number;
  wasteSqFt: number;
  neededSqFt: number;
  cost?: number;
};

export function calculateFlooring({
  areaSqFt,
  wastePercent,
  pricePerSqFt,
}: FlooringInputs): FlooringResults {
  const baseAreaSqFt = Math.max(0, areaSqFt);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;
  const wasteSqFt = Math.max(0, baseAreaSqFt * wasteMultiplier);
  const neededSqFt = baseAreaSqFt + wasteSqFt;

  const cost =
    typeof pricePerSqFt === "number" && isFinite(pricePerSqFt)
      ? Math.max(0, pricePerSqFt) * neededSqFt
      : undefined;

  return { baseAreaSqFt, wasteSqFt, neededSqFt, cost };
}
