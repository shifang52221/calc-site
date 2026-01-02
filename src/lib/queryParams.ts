type SearchParamsLike = {
  get(key: string): string | null;
  toString(): string;
};

export function getStringParam(
  searchParams: SearchParamsLike,
  key: string,
): string | null {
  const value = searchParams.get(key);
  if (value === null) return null;
  return value;
}

export function setStringParam(
  searchParams: SearchParamsLike,
  key: string,
  value: string | null,
) {
  const next = new URLSearchParams(searchParams.toString());
  if (value === null || value === "") next.delete(key);
  else next.set(key, value);
  return next;
}
