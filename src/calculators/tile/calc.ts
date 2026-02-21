export type TileInputs = {
  areaSqFt: number;
  wastePercent: number;
  coverageSqFtPerBox?: number;
  pricePerBox?: number;
};

export type TileResults = {
  baseAreaSqFt: number;
  wasteSqFt: number;
  neededSqFt: number;
  boxesRaw?: number;
  boxes?: number;
  cost?: number;
};

export function calculateTile({
  areaSqFt,
  wastePercent,
  coverageSqFtPerBox,
  pricePerBox,
}: TileInputs): TileResults {
  const baseAreaSqFt = Math.max(0, areaSqFt);
  const wasteMultiplier = 1 + Math.max(0, wastePercent) / 100;
  const neededSqFt = baseAreaSqFt * wasteMultiplier;
  const wasteSqFt = Math.max(0, neededSqFt - baseAreaSqFt);

  const boxesRaw =
    typeof coverageSqFtPerBox === "number" && isFinite(coverageSqFtPerBox)
      ? neededSqFt / Math.max(1, coverageSqFtPerBox)
      : undefined;
  const boxes =
    typeof boxesRaw === "number" ? Math.ceil(Math.max(0, boxesRaw)) : undefined;

  const cost =
    typeof boxes === "number" &&
    typeof pricePerBox === "number" &&
    isFinite(pricePerBox)
      ? Math.max(0, pricePerBox) * boxes
      : undefined;

  return { baseAreaSqFt, wasteSqFt, neededSqFt, boxesRaw, boxes, cost };
}
