export type MulchBagsInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  bagVolumeCubicFeet: number;
  pricePerBag?: number;
};

export type MulchBagsResults = {
  baseCubicFeet: number;
  wasteCubicFeet: number;
  baseCubicYards: number;
  wasteCubicYards: number;
  cubicYards: number;
  cubicFeet: number;
  bags: number;
  cost?: number;
};

export function calculateMulchBags({
  areaSqFt,
  depthIn,
  wastePercent,
  bagVolumeCubicFeet,
  pricePerBag,
}: MulchBagsInputs): MulchBagsResults {
  const area = Math.max(0, areaSqFt);
  const depth = Math.max(0, depthIn);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const baseCubicFeet = area * (depth / 12);
  const wasteCubicFeet = baseCubicFeet * wasteMultiplier;
  const cubicFeet = Math.max(0, baseCubicFeet + wasteCubicFeet);
  const baseCubicYards = baseCubicFeet / 27;
  const wasteCubicYards = wasteCubicFeet / 27;
  const cubicYards = cubicFeet / 27;

  const bagVolume = Math.max(0, bagVolumeCubicFeet);
  const bags = bagVolume > 0 ? Math.ceil(cubicFeet / bagVolume) : 0;

  const cost =
    typeof pricePerBag === "number" && isFinite(pricePerBag)
      ? Math.max(0, pricePerBag) * bags
      : undefined;

  return {
    baseCubicFeet: Math.max(0, baseCubicFeet),
    wasteCubicFeet: Math.max(0, wasteCubicFeet),
    baseCubicYards: Math.max(0, baseCubicYards),
    wasteCubicYards: Math.max(0, wasteCubicYards),
    cubicYards: Math.max(0, cubicYards),
    cubicFeet: Math.max(0, cubicFeet),
    bags: Math.max(0, bags),
    cost,
  };
}
