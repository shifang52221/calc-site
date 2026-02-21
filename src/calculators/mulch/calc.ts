export type MulchInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  pricePerCubicYd?: number;
};

export type MulchResults = {
  baseCubicYards: number;
  wasteCubicYards: number;
  cubicYards: number;
  cost?: number;
};

export function calculateMulch({
  areaSqFt,
  depthIn,
  wastePercent,
  pricePerCubicYd,
}: MulchInputs): MulchResults {
  const area = Math.max(0, areaSqFt);
  const depth = Math.max(0, depthIn);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (depth / 12);
  const baseCubicYards = Math.max(0, cubicFeet / 27);
  const wasteCubicYards = Math.max(0, baseCubicYards * wasteMultiplier);
  const cubicYards = Math.max(0, baseCubicYards + wasteCubicYards);

  const cost =
    typeof pricePerCubicYd === "number" && isFinite(pricePerCubicYd)
      ? Math.max(0, pricePerCubicYd) * cubicYards
      : undefined;

  return { baseCubicYards, wasteCubicYards, cubicYards, cost };
}
