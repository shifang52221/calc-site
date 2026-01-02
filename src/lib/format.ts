export function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits }).format(
    value,
  );
}

export function formatCurrencyUSD(value: number) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
