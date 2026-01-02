export type DeckInputs = {
  deckLengthFt: number;
  deckWidthFt: number;
  boardWidthIn: number;
  gapIn: number;
  boardLengthFt: number;
  wastePercent: number;
  pricePerBoard?: number;
};

export type DeckResults = {
  boards: number;
  cost?: number;
};

export function calculateDeckBoards({
  deckLengthFt,
  deckWidthFt,
  boardWidthIn,
  gapIn,
  boardLengthFt,
  wastePercent,
  pricePerBoard,
}: DeckInputs): DeckResults {
  const lengthFt = Math.max(0, deckLengthFt);
  const widthFt = Math.max(0, deckWidthFt);
  const boardW = Math.max(0.5, boardWidthIn);
  const gap = Math.max(0, gapIn);
  const boardLen = Math.max(1, boardLengthFt);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const widthIn = widthFt * 12;
  const rowCount = Math.ceil(widthIn / (boardW + gap));
  const boardsPerRow = Math.ceil(lengthFt / boardLen);
  const boardsRaw = rowCount * boardsPerRow * multiplier;
  const boards = Math.ceil(Math.max(0, boardsRaw));

  const cost =
    typeof pricePerBoard === "number" && isFinite(pricePerBoard)
      ? Math.max(0, pricePerBoard) * boards
      : undefined;

  return { boards, cost };
}
