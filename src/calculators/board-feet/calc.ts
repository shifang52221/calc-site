export type BoardFeetInputs = {
  thicknessIn: number;
  widthIn: number;
  lengthFt: number;
  quantity: number;
  wastePercent: number;
  pricePerBoardFoot?: number;
};

export type BoardFeetResults = {
  boardFeet: number;
  cubicFeet: number;
  cost?: number;
};

export function calculateBoardFeet({
  thicknessIn,
  widthIn,
  lengthFt,
  quantity,
  wastePercent,
  pricePerBoardFoot,
}: BoardFeetInputs): BoardFeetResults {
  const thickness = Math.max(0, thicknessIn);
  const width = Math.max(0, widthIn);
  const length = Math.max(0, lengthFt);
  const qty = Math.max(0, quantity);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const perBoardFeet = (thickness * width * length) / 12;
  const rawBoardFeet = perBoardFeet * qty;
  const boardFeet = rawBoardFeet * multiplier;

  const cubicFeet = boardFeet / 12;

  const cost =
    typeof pricePerBoardFoot === "number" && isFinite(pricePerBoardFoot)
      ? Math.max(0, pricePerBoardFoot) * boardFeet
      : undefined;

  return {
    boardFeet: Math.max(0, boardFeet),
    cubicFeet: Math.max(0, cubicFeet),
    cost,
  };
}

