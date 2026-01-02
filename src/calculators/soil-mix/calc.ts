export type SoilMixInputs = {
  totalCubicYards: number;
  compostPercent: number;
  topsoilPercent: number;
  sandPercent: number;
  compostPricePerCubicYd?: number;
  topsoilPricePerCubicYd?: number;
  sandPricePerCubicYd?: number;
};

export type SoilMixComponentResults = {
  cubicYards: number;
  cost?: number;
};

export type SoilMixResults = {
  totalCubicYards: number;
  compost: SoilMixComponentResults;
  topsoil: SoilMixComponentResults;
  sand: SoilMixComponentResults;
  totalCost?: number;
};

function fractionFromPercent(value: number) {
  return Math.max(0, value) / 100;
}

function costIfPricePresent(price: number | undefined, cubicYards: number) {
  if (typeof price !== "number" || !isFinite(price)) return undefined;
  return Math.max(0, price) * Math.max(0, cubicYards);
}

export function calculateSoilMix({
  totalCubicYards,
  compostPercent,
  topsoilPercent,
  sandPercent,
  compostPricePerCubicYd,
  topsoilPricePerCubicYd,
  sandPricePerCubicYd,
}: SoilMixInputs): SoilMixResults {
  const total = Math.max(0, totalCubicYards);

  const compostFraction = fractionFromPercent(compostPercent);
  const topsoilFraction = fractionFromPercent(topsoilPercent);
  const sandFraction = fractionFromPercent(sandPercent);

  const sum = compostFraction + topsoilFraction + sandFraction;
  const safeSum = sum > 0 ? sum : 1;

  const compostCubicYards = (total * compostFraction) / safeSum;
  const topsoilCubicYards = (total * topsoilFraction) / safeSum;
  const sandCubicYards = (total * sandFraction) / safeSum;

  const compostCost = costIfPricePresent(compostPricePerCubicYd, compostCubicYards);
  const topsoilCost = costIfPricePresent(topsoilPricePerCubicYd, topsoilCubicYards);
  const sandCost = costIfPricePresent(sandPricePerCubicYd, sandCubicYards);

  const totalCost =
    typeof compostCost === "number" ||
    typeof topsoilCost === "number" ||
    typeof sandCost === "number"
      ? (compostCost ?? 0) + (topsoilCost ?? 0) + (sandCost ?? 0)
      : undefined;

  return {
    totalCubicYards: total,
    compost: { cubicYards: Math.max(0, compostCubicYards), cost: compostCost },
    topsoil: { cubicYards: Math.max(0, topsoilCubicYards), cost: topsoilCost },
    sand: { cubicYards: Math.max(0, sandCubicYards), cost: sandCost },
    totalCost,
  };
}

