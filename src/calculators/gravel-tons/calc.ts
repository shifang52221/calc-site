export type GravelTonsInputs = {
  cubicYards: number;
  shortTons: number;
  densityLbPerYd3: number;
  pricePerShortTon?: number;
};

export type GravelTonsResults = {
  cubicYardsFromTons: number;
  shortTonsFromYards: number;
  costFromTons?: number;
  costFromYards?: number;
};

export function calculateGravelTons({
  cubicYards,
  shortTons,
  densityLbPerYd3,
  pricePerShortTon,
}: GravelTonsInputs): GravelTonsResults {
  const yd3 = Math.max(0, cubicYards);
  const tons = Math.max(0, shortTons);
  const density = Math.max(0, densityLbPerYd3);

  const shortTonsFromYards = density > 0 ? (yd3 * density) / 2000 : 0;
  const cubicYardsFromTons = density > 0 ? (tons * 2000) / density : 0;

  const costFromTons =
    typeof pricePerShortTon === "number" && isFinite(pricePerShortTon)
      ? Math.max(0, pricePerShortTon) * tons
      : undefined;

  const costFromYards =
    typeof pricePerShortTon === "number" && isFinite(pricePerShortTon)
      ? Math.max(0, pricePerShortTon) * shortTonsFromYards
      : undefined;

  return {
    cubicYardsFromTons: Math.max(0, cubicYardsFromTons),
    shortTonsFromYards: Math.max(0, shortTonsFromYards),
    costFromTons,
    costFromYards,
  };
}

