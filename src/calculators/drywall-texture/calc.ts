export type DrywallTextureInputs = {
  areaSqFt: number;
  coats: number;
  wastePercent: number;
  coverageSqFtPerBag: number;
};

export type DrywallTextureResults = {
  baseSqFt: number;
  wasteSqFt: number;
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
  const wasteMultiplier = Math.max(0, wastePercent) / 100;
  const baseSqFt = area * coatsValue;
  const wasteSqFt = Math.max(0, baseSqFt * wasteMultiplier);
  const neededSqFt = Math.max(0, baseSqFt + wasteSqFt);
  const coverage = Math.max(1, coverageSqFtPerBag);
  const bags = Math.ceil(neededSqFt / coverage);

  return { baseSqFt, wasteSqFt, bags, neededSqFt };
}
