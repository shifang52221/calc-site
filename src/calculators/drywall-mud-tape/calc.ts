export type DrywallMudTapeInputs = {
  areaSqFt: number;
  sheetWidthFt: number;
  sheetLengthFt: number;
  wastePercent: number;
  tapeRollLengthFt: number;
  coats: number;
  jointWidthIn: number;
  avgThicknessIn: number;
  featherFactor: number;
  bucketGallons: number;
  pricePerRoll?: number;
  pricePerBucket?: number;
};

export type DrywallMudTapeResults = {
  baseSeamFeet: number;
  wasteSeamFeet: number;
  seamFeet: number;
  tapeRolls: number;
  compoundGallons: number;
  compoundBuckets: number;
  cost?: number;
};

function clampNonNegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function calculateDrywallMudTape({
  areaSqFt,
  sheetWidthFt,
  sheetLengthFt,
  wastePercent,
  tapeRollLengthFt,
  coats,
  jointWidthIn,
  avgThicknessIn,
  featherFactor,
  bucketGallons,
  pricePerRoll,
  pricePerBucket,
}: DrywallMudTapeInputs): DrywallMudTapeResults {
  const area = clampNonNegative(areaSqFt);
  const width = Math.max(0.01, clampNonNegative(sheetWidthFt));
  const length = Math.max(0.01, clampNonNegative(sheetLengthFt));
  const multiplier = 1 + clampNonNegative(wastePercent) / 100;

  const seamPerSqFt = 1 / width + 1 / length;
  const baseSeamFeet = area * seamPerSqFt;
  const wasteSeamFeet = baseSeamFeet * (multiplier - 1);
  const seamFeet = baseSeamFeet + wasteSeamFeet;

  const rollLength = Math.max(0.01, clampNonNegative(tapeRollLengthFt));
  const tapeRolls = Math.ceil(seamFeet / rollLength);

  const coatsCount = Math.max(1, Math.floor(clampNonNegative(coats)));
  const jointWidth = clampNonNegative(jointWidthIn);
  const thickness = clampNonNegative(avgThicknessIn);
  const factor = Math.min(1, Math.max(0.05, clampNonNegative(featherFactor)));

  const volumeIn3PerFt = jointWidth * thickness * 12 * factor;
  const totalVolumeIn3 = seamFeet * coatsCount * volumeIn3PerFt;
  const compoundGallons = totalVolumeIn3 / 231;

  const bucketSize = Math.max(0.01, clampNonNegative(bucketGallons));
  const compoundBuckets = Math.ceil(compoundGallons / bucketSize);

  const tapeCost =
    typeof pricePerRoll === "number" && isFinite(pricePerRoll)
      ? Math.max(0, pricePerRoll) * tapeRolls
      : undefined;
  const compoundCost =
    typeof pricePerBucket === "number" && isFinite(pricePerBucket)
      ? Math.max(0, pricePerBucket) * compoundBuckets
      : undefined;

  const cost =
    typeof tapeCost === "number" || typeof compoundCost === "number"
      ? (tapeCost ?? 0) + (compoundCost ?? 0)
      : undefined;

  return {
    baseSeamFeet: Math.max(0, baseSeamFeet),
    wasteSeamFeet: Math.max(0, wasteSeamFeet),
    seamFeet: Math.max(0, seamFeet),
    tapeRolls: Math.max(0, tapeRolls),
    compoundGallons: Math.max(0, compoundGallons),
    compoundBuckets: Math.max(0, compoundBuckets),
    cost,
  };
}
