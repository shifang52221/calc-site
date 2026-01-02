export type GravelInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  pricePerCubicYd?: number;
};

export type GravelResults = {
  cubicYards: number;
  cost?: number;
};

export function calculateGravel({
  areaSqFt,
  depthIn,
  wastePercent,
  pricePerCubicYd,
}: GravelInputs): GravelResults {
  const area = Math.max(0, areaSqFt);
  const depth = Math.max(0, depthIn);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (depth / 12);
  const cubicYards = (cubicFeet / 27) * multiplier;

  const cost =
    typeof pricePerCubicYd === "number" && isFinite(pricePerCubicYd)
      ? Math.max(0, pricePerCubicYd) * cubicYards
      : undefined;

  return { cubicYards: Math.max(0, cubicYards), cost };
}
