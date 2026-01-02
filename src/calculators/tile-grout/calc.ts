export type TileGroutInputs = {
  areaM2: number;
  tileLengthMm: number;
  tileWidthMm: number;
  jointWidthMm: number;
  jointDepthMm: number;
  wastePercent: number;
  densityKgPerM3: number;
  bagKg: number;
  pricePerBag?: number;
};

export type TileGroutResults = {
  groutVolumeM3: number;
  groutKg: number;
  bags: number;
  cost?: number;
};

export function calculateTileGrout({
  areaM2,
  tileLengthMm,
  tileWidthMm,
  jointWidthMm,
  jointDepthMm,
  wastePercent,
  densityKgPerM3,
  bagKg,
  pricePerBag,
}: TileGroutInputs): TileGroutResults {
  const area = Math.max(0, areaM2);
  const l = Math.max(0, tileLengthMm);
  const w = Math.max(0, tileWidthMm);
  const jointWidth = Math.max(0, jointWidthMm);
  const jointDepth = Math.max(0, jointDepthMm);
  const density = Math.max(0, densityKgPerM3);
  const bagWeight = Math.max(0, bagKg);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const perimeterFactor = l > 0 && w > 0 ? (l + w) / (l * w) : 0;
  const groutDepthMmPerM2 = perimeterFactor * jointWidth * jointDepth;
  const groutVolumeM3 = area * groutDepthMmPerM2 * 1e-3 * multiplier;

  const groutKg = groutVolumeM3 * density;
  const bags = bagWeight > 0 ? Math.ceil(groutKg / bagWeight) : 0;

  const cost =
    typeof pricePerBag === "number" && isFinite(pricePerBag)
      ? Math.max(0, pricePerBag) * bags
      : undefined;

  return {
    groutVolumeM3: Math.max(0, groutVolumeM3),
    groutKg: Math.max(0, groutKg),
    bags: Math.max(0, bags),
    cost,
  };
}

