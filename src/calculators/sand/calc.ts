export type SandInputs = {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  densityLbPerYd3: number;
  pricePerCubicYd?: number;
  pricePerShortTon?: number;
};

export type SandResults = {
  cubicYards: number;
  shortTons: number;
  cost?: number;
};

export function calculateSand({
  areaSqFt,
  depthIn,
  wastePercent,
  densityLbPerYd3,
  pricePerCubicYd,
  pricePerShortTon,
}: SandInputs): SandResults {
  const area = Math.max(0, areaSqFt);
  const depth = Math.max(0, depthIn);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (depth / 12);
  const cubicYards = (cubicFeet / 27) * multiplier;

  const density = Math.max(0, densityLbPerYd3);
  const pounds = cubicYards * density;
  const shortTons = pounds / 2000;

  const costByVolume =
    typeof pricePerCubicYd === "number" && isFinite(pricePerCubicYd)
      ? Math.max(0, pricePerCubicYd) * cubicYards
      : undefined;

  const costByWeight =
    typeof pricePerShortTon === "number" && isFinite(pricePerShortTon)
      ? Math.max(0, pricePerShortTon) * shortTons
      : undefined;

  const cost = typeof costByVolume === "number" ? costByVolume : costByWeight;

  return {
    cubicYards: Math.max(0, cubicYards),
    shortTons: Math.max(0, shortTons),
    cost,
  };
}

