import type { ReactNode } from "react";

export function CalculatorResultList({ children }: { children: ReactNode }) {
  return <dl className="mt-4 grid gap-3 text-sm">{children}</dl>;
}

export function CalculatorResultRow({
  label,
  value,
}: {
  label: ReactNode;
  value: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-zinc-700 dark:text-zinc-300">{label}</dt>
      <dd className="font-semibold text-zinc-900 dark:text-zinc-100">
        {value}
      </dd>
    </div>
  );
}

