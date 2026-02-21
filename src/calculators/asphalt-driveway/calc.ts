export type AsphaltDrivewayInputs = {
  areaSqFt: number;
  thicknessIn: number;
  wastePercent: number;
  densityLbPerYd3: number;
  truckCapacityShortTons: number;
  pricePerShortTon?: number;
};

export type AsphaltDrivewayResults = {
  baseCubicYards: number;
  wasteCubicYards: number;
  cubicYards: number;
  shortTons: number;
  truckloads: number;
  cost?: number;
};

export function calculateAsphaltDriveway({
  areaSqFt,
  thicknessIn,
  wastePercent,
  densityLbPerYd3,
  truckCapacityShortTons,
  pricePerShortTon,
}: AsphaltDrivewayInputs): AsphaltDrivewayResults {
  const area = Math.max(0, areaSqFt);
  const thickness = Math.max(0, thicknessIn);
  const wasteMultiplier = Math.max(0, wastePercent) / 100;

  const cubicFeet = area * (thickness / 12);
  const baseCubicYards = Math.max(0, cubicFeet / 27);
  const wasteCubicYards = Math.max(0, baseCubicYards * wasteMultiplier);
  const cubicYards = Math.max(0, baseCubicYards + wasteCubicYards);

  const density = Math.max(0, densityLbPerYd3);
  const pounds = cubicYards * density;
  const shortTons = pounds / 2000;

  const capacity = Math.max(0, truckCapacityShortTons);
  const truckloads = capacity > 0 ? Math.ceil(shortTons / capacity) : 0;

  const cost =
    typeof pricePerShortTon === "number" && isFinite(pricePerShortTon)
      ? Math.max(0, pricePerShortTon) * shortTons
      : undefined;

  return {
    baseCubicYards,
    wasteCubicYards,
    cubicYards,
    shortTons: Math.max(0, shortTons),
    truckloads: Math.max(0, truckloads),
    cost,
  };
}
