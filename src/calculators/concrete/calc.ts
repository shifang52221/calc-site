export type ConcreteInputs = {
  lengthFt: number;
  widthFt: number;
  depthIn: number;
  wastePercent: number;
  pricePerCubicYd?: number;
};

export type ConcreteResults = {
  baseCubicYards: number;
  wasteCubicYards: number;
  cubicYards: number;
  cost?: number;
};

export function calculateConcrete({
  lengthFt,
  widthFt,
  depthIn,
  wastePercent,
  pricePerCubicYd,
}: ConcreteInputs): ConcreteResults {
  const l = Math.max(0, lengthFt);
  const w = Math.max(0, widthFt);
  const dIn = Math.max(0, depthIn);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const cubicFeet = l * w * (dIn / 12);
  const baseCubicYards = Math.max(0, cubicFeet / 27);
  const wasteCubicYards = Math.max(0, baseCubicYards * wasteMultiplier);
  const cubicYards = Math.max(0, baseCubicYards + wasteCubicYards);

  const cost =
    typeof pricePerCubicYd === "number" && isFinite(pricePerCubicYd)
      ? Math.max(0, pricePerCubicYd) * cubicYards
      : undefined;

  return { baseCubicYards, wasteCubicYards, cubicYards, cost };
}
