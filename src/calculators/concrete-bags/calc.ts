export type ConcreteBagsInputs = {
  areaSqFt: number;
  thicknessIn: number;
  wastePercent: number;
  bagYieldCubicFeet: number;
  pricePerBag?: number;
};

export type ConcreteBagsResults = {
  baseCubicFeet: number;
  wasteCubicFeet: number;
  baseCubicYards: number;
  wasteCubicYards: number;
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
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const baseCubicFeet = area * (thickness / 12);
  const wasteCubicFeet = baseCubicFeet * wasteMultiplier;
  const cubicFeet = Math.max(0, baseCubicFeet + wasteCubicFeet);
  const baseCubicYards = baseCubicFeet / 27;
  const wasteCubicYards = wasteCubicFeet / 27;
  const cubicYards = cubicFeet / 27;

  const yieldCuFt = Math.max(0, bagYieldCubicFeet);
  const bags = yieldCuFt > 0 ? Math.ceil(cubicFeet / yieldCuFt) : 0;

  const cost =
    typeof pricePerBag === "number" && isFinite(pricePerBag)
      ? Math.max(0, pricePerBag) * bags
      : undefined;

  return {
    baseCubicFeet: Math.max(0, baseCubicFeet),
    wasteCubicFeet: Math.max(0, wasteCubicFeet),
    baseCubicYards: Math.max(0, baseCubicYards),
    wasteCubicYards: Math.max(0, wasteCubicYards),
    cubicFeet: Math.max(0, cubicFeet),
    cubicYards: Math.max(0, cubicYards),
    bags: Math.max(0, bags),
    cost,
  };
}
