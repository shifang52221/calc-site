export type StudsInputs = {
  totalWallLengthFt: number;
  wallCount: number;
  studSpacingIn: number;
  wastePercent: number;
  doorOpenings: number;
  windowOpenings: number;
  studsPerOpening: number;
  topPlateCount: number;
  includeBottomPlate: boolean;
  pricePerStud?: number;
  pricePerLinearFtPlate?: number;
};

export type StudsResults = {
  studs: number;
  studsBeforeWaste: number;
  platesLinearFeet: number;
  platesLinearFeetBeforeWaste: number;
  cost?: number;
};

function clampNonNegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function clampNonNegativeInt(value: number) {
  const n = clampNonNegative(value);
  return Math.floor(n);
}

export function calculateStuds({
  totalWallLengthFt,
  wallCount,
  studSpacingIn,
  wastePercent,
  doorOpenings,
  windowOpenings,
  studsPerOpening,
  topPlateCount,
  includeBottomPlate,
  pricePerStud,
  pricePerLinearFtPlate,
}: StudsInputs): StudsResults {
  const totalLengthFt = clampNonNegative(totalWallLengthFt);
  const walls = Math.max(1, clampNonNegativeInt(wallCount));
  const spacingIn = Math.max(1, clampNonNegative(studSpacingIn));
  const wasteMultiplier = 1 + clampNonNegative(wastePercent) / 100;

  const inches = totalLengthFt * 12;
  const studsPerWall =
    inches <= 0 ? 0 : Math.floor(inches / spacingIn) + 1;

  const openingCount =
    clampNonNegativeInt(doorOpenings) + clampNonNegativeInt(windowOpenings);
  const studsForOpenings = openingCount * clampNonNegativeInt(studsPerOpening);

  const studsBeforeWaste = studsPerWall * walls + studsForOpenings;
  const studs = Math.ceil(studsBeforeWaste * wasteMultiplier);

  const platesPerWall = clampNonNegativeInt(topPlateCount) + (includeBottomPlate ? 1 : 0);
  const platesLinearFeetBeforeWaste = totalLengthFt * walls * platesPerWall;
  const platesLinearFeet = platesLinearFeetBeforeWaste * wasteMultiplier;

  const studsCost =
    typeof pricePerStud === "number" && isFinite(pricePerStud)
      ? Math.max(0, pricePerStud) * studs
      : undefined;
  const platesCost =
    typeof pricePerLinearFtPlate === "number" && isFinite(pricePerLinearFtPlate)
      ? Math.max(0, pricePerLinearFtPlate) * platesLinearFeet
      : undefined;

  const cost =
    typeof studsCost === "number" || typeof platesCost === "number"
      ? (studsCost ?? 0) + (platesCost ?? 0)
      : undefined;

  return {
    studs,
    studsBeforeWaste: Math.max(0, studsBeforeWaste),
    platesLinearFeet: Math.max(0, platesLinearFeet),
    platesLinearFeetBeforeWaste: Math.max(0, platesLinearFeetBeforeWaste),
    cost,
  };
}

