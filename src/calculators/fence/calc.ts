export type FenceInputs = {
  fenceLengthFt: number;
  postSpacingFt: number;
  panelWidthFt: number;
  wastePercent: number;
  pricePerPanel?: number;
  pricePerPost?: number;
};

export type FenceResults = {
  panels: number;
  posts: number;
  cost?: number;
};

export function calculateFence({
  fenceLengthFt,
  postSpacingFt,
  panelWidthFt,
  wastePercent,
  pricePerPanel,
  pricePerPost,
}: FenceInputs): FenceResults {
  const length = Math.max(0, fenceLengthFt);
  const postSpacing = Math.max(1, postSpacingFt);
  const panelWidth = Math.max(1, panelWidthFt);
  const multiplier = 1 + Math.max(0, wastePercent) / 100;

  const adjustedLength = length * multiplier;
  const panels = Math.ceil(adjustedLength / panelWidth);
  const posts = Math.ceil(adjustedLength / postSpacing) + 1;

  const panelCost =
    typeof pricePerPanel === "number" && isFinite(pricePerPanel)
      ? Math.max(0, pricePerPanel) * panels
      : 0;
  const postCost =
    typeof pricePerPost === "number" && isFinite(pricePerPost)
      ? Math.max(0, pricePerPost) * posts
      : 0;
  const cost =
    panelCost || postCost ? Math.max(0, panelCost + postCost) : undefined;

  return { panels, posts, cost };
}
