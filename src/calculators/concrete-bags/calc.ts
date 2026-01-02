export type ConcreteBagsInputs = {
  areaSqFt: number;
  thicknessIn: number;
  wastePercent: number;
  bagYieldCubicFeet: number;
  pricePerBag?: number;
};

export type ConcreteBagsResults = {
  cubicFeet: number;
  cubicYards: number;
  bags: number;
  cost?: number;
};

export function calculateConcreteBags({
  areaSqFt,
  thicknessIn,
  wastePercent,
  bagYieldCubicFeet,
  pricePerBag,
}: ConcreteBagsInputs): ConcreteBagsResults {
  const area = Math.max(0, areaSqFt);
  const thickness = Math.max(0, thicknessIn);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (thickness / 12) * multiplier;
  const cubicYards = cubicFeet / 27;

  const yieldCuFt = Math.max(0, bagYieldCubicFeet);
  const bags = yieldCuFt > 0 ? Math.ceil(cubicFeet / yieldCuFt) : 0;

  const cost =
    typeof pricePerBag === "number" && isFinite(pricePerBag)
      ? Math.max(0, pricePerBag) * bags
      : undefined;

  return {
    cubicFeet: Math.max(0, cubicFeet),
    cubicYards: Math.max(0, cubicYards),
    bags: Math.max(0, bags),
    cost,
  };
}

