export type ConcreteInputs = {
  lengthFt: number;
  widthFt: number;
  depthIn: number;
  wastePercent: number;
  pricePerCubicYd?: number;
};

export type ConcreteResults = {
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
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const cubicFeet = l * w * (dIn / 12);
  const cubicYards = (cubicFeet / 27) * multiplier;

  const cost =
    typeof pricePerCubicYd === "number" && isFinite(pricePerCubicYd)
      ? Math.max(0, pricePerCubicYd) * cubicYards
      : undefined;

  return { cubicYards: Math.max(0, cubicYards), cost };
}
