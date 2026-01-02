export type MulchBagsInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  bagVolumeCubicFeet: number;
  pricePerBag?: number;
};

export type MulchBagsResults = {
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
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (depth / 12) * multiplier;
  const cubicYards = cubicFeet / 27;

  const bagVolume = Math.max(0, bagVolumeCubicFeet);
  const bags = bagVolume > 0 ? Math.ceil(cubicFeet / bagVolume) : 0;

  const cost =
    typeof pricePerBag === "number" && isFinite(pricePerBag)
      ? Math.max(0, pricePerBag) * bags
      : undefined;

  return {
    cubicYards: Math.max(0, cubicYards),
    cubicFeet: Math.max(0, cubicFeet),
    bags: Math.max(0, bags),
    cost,
  };
}

