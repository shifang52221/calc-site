export type DeckMudInputs = {
  areaSqFt: number;
  thicknessIn: number;
  wastePercent: number;
  sandParts: number;
  cementParts: number;
};

export type DeckMudResults = {
  baseCubicFeet: number;
  wasteCubicFeet: number;
  totalCubicFeet: number;
  totalCubicYards: number;
  sandCubicFeet: number;
  cementCubicFeet: number;
  cementBags94lb: number;
};

export function calculateDeckMud({
  areaSqFt,
  thicknessIn,
  wastePercent,
  sandParts,
  cementParts,
}: DeckMudInputs): DeckMudResults {
  const area = Math.max(0, areaSqFt);
  const thickness = Math.max(0, thicknessIn);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const ratioSand = Math.max(0, sandParts);
  const ratioCement = Math.max(0.1, cementParts);
  const totalParts = ratioSand + ratioCement;
  const cementFraction = totalParts > 0 ? ratioCement / totalParts : 0;

  const cubicFeetRaw = area * (thickness / 12);
  const baseCubicFeet = Math.max(0, cubicFeetRaw);
  const totalCubicFeet = Math.max(0, baseCubicFeet * multiplier);
  const wasteCubicFeet = Math.max(0, totalCubicFeet - baseCubicFeet);
  const totalCubicYards = totalCubicFeet / 27;

  const cementCubicFeet = totalCubicFeet * cementFraction;
  const sandCubicFeet = Math.max(0, totalCubicFeet - cementCubicFeet);

  const cementBags94lb = Math.ceil(Math.max(0, cementCubicFeet / 1));

  return {
    baseCubicFeet,
    wasteCubicFeet,
    totalCubicFeet,
    totalCubicYards,
    sandCubicFeet,
    cementCubicFeet,
    cementBags94lb,
  };
}
