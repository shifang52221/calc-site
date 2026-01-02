export type FlooringInputs = {
  areaSqFt: number;
  wastePercent: number;
  pricePerSqFt?: number;
};

export type FlooringResults = {
  neededSqFt: number;
  cost?: number;
};

export function calculateFlooring({
  areaSqFt,
  wastePercent,
  pricePerSqFt,
}: FlooringInputs): FlooringResults {
  const baseArea = Math.max(0, areaSqFt);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;
  const neededSqFt = baseArea * multiplier;

  const cost =
    typeof pricePerSqFt === "number" && isFinite(pricePerSqFt)
      ? Math.max(0, pricePerSqFt) * neededSqFt
      : undefined;

  return { neededSqFt, cost };
}
