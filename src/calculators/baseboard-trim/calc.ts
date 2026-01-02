export type BaseboardTrimInputs = {
  wallLengthFt: number;
  doorCount: number;
  doorWidthIn: number;
  wastePercent: number;
  pieceLengthFt: number;
  pricePerLinearFt?: number;
  pricePerPiece?: number;
};

export type BaseboardTrimResults = {
  linearFeet: number;
  linearFeetBeforeWaste: number;
  pieces: number;
  cost?: number;
};

function nonNegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function nonNegativeInt(value: number) {
  return Math.floor(nonNegative(value));
}

export function calculateBaseboardTrim({
  wallLengthFt,
  doorCount,
  doorWidthIn,
  wastePercent,
  pieceLengthFt,
  pricePerLinearFt,
  pricePerPiece,
}: BaseboardTrimInputs): BaseboardTrimResults {
  const lengthFt = nonNegative(wallLengthFt);
  const doors = nonNegativeInt(doorCount);
  const doorWidthFt = nonNegative(doorWidthIn) / 12;
  const wasteMultiplier = 1 + nonNegative(wastePercent) / 100;
  const pieceLen = Math.max(0.01, nonNegative(pieceLengthFt));

  const deductions = doors * doorWidthFt;
  const linearFeetBeforeWaste = Math.max(0, lengthFt - deductions);
  const linearFeet = linearFeetBeforeWaste * wasteMultiplier;

  const pieces = Math.ceil(linearFeet / pieceLen);

  const costByLinear =
    typeof pricePerLinearFt === "number" && isFinite(pricePerLinearFt)
      ? Math.max(0, pricePerLinearFt) * linearFeet
      : undefined;
  const costByPiece =
    typeof pricePerPiece === "number" && isFinite(pricePerPiece)
      ? Math.max(0, pricePerPiece) * pieces
      : undefined;
  const cost = typeof costByLinear === "number" ? costByLinear : costByPiece;

  return {
    linearFeet: Math.max(0, linearFeet),
    linearFeetBeforeWaste,
    pieces: Math.max(0, pieces),
    cost,
  };
}

