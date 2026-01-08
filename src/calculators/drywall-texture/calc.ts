export type DrywallTextureInputs = {
  areaSqFt: number;
  coats: number;
  wastePercent: number;
  coverageSqFtPerBag: number;
};

export type DrywallTextureResults = {
  bags: number;
  neededSqFt: number;
};

export function calculateDrywallTexture({
  areaSqFt,
  coats,
  wastePercent,
  coverageSqFtPerBag,
}: DrywallTextureInputs): DrywallTextureResults {
  const area = Math.max(0, areaSqFt);
  const coatsValue = Math.max(1, coats);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;
  const neededSqFt = area * coatsValue * multiplier;
  const coverage = Math.max(1, coverageSqFtPerBag);
  const bags = Math.ceil(neededSqFt / coverage);

  return { bags, neededSqFt };
}

