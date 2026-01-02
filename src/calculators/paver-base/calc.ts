export type PaverBaseInputs = {
  areaSqFt: number;
  baseDepthIn: number;
  sandDepthIn: number;
  wastePercent: number;
  baseDensityLbPerYd3: number;
  sandDensityLbPerYd3: number;
  basePricePerCubicYd?: number;
  basePricePerShortTon?: number;
  sandPricePerCubicYd?: number;
  sandPricePerShortTon?: number;
};

export type PaverLayerResults = {
  cubicYards: number;
  shortTons: number;
  cost?: number;
};

export type PaverBaseResults = {
  base: PaverLayerResults;
  sand: PaverLayerResults;
  totalCost?: number;
};

function layerResults({
  areaSqFt,
  depthIn,
  wastePercent,
  densityLbPerYd3,
  pricePerCubicYd,
  pricePerShortTon,
}: {
  areaSqFt: number;
  depthIn: number;
  wastePercent: number;
  densityLbPerYd3: number;
  pricePerCubicYd?: number;
  pricePerShortTon?: number;
}): PaverLayerResults {
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

export function calculatePaverBase({
  areaSqFt,
  baseDepthIn,
  sandDepthIn,
  wastePercent,
  baseDensityLbPerYd3,
  sandDensityLbPerYd3,
  basePricePerCubicYd,
  basePricePerShortTon,
  sandPricePerCubicYd,
  sandPricePerShortTon,
}: PaverBaseInputs): PaverBaseResults {
  const base = layerResults({
    areaSqFt,
    depthIn: baseDepthIn,
    wastePercent,
    densityLbPerYd3: baseDensityLbPerYd3,
    pricePerCubicYd: basePricePerCubicYd,
    pricePerShortTon: basePricePerShortTon,
  });

  const sand = layerResults({
    areaSqFt,
    depthIn: sandDepthIn,
    wastePercent,
    densityLbPerYd3: sandDensityLbPerYd3,
    pricePerCubicYd: sandPricePerCubicYd,
    pricePerShortTon: sandPricePerShortTon,
  });

  const totalCost =
    typeof base.cost === "number" || typeof sand.cost === "number"
      ? (base.cost ?? 0) + (sand.cost ?? 0)
      : undefined;

  return { base, sand, totalCost };
}

