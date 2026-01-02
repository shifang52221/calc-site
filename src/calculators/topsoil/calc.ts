export type TopsoilInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  pricePerCubicYd?: number;
};

export type TopsoilResults = {
  cubicYards: number;
  cost?: number;
};

export function calculateTopsoil({
  areaSqFt,
  depthIn,
  wastePercent,
  pricePerCubicYd,
}: TopsoilInputs): TopsoilResults {
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
