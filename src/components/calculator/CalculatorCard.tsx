import type { ReactNode } from "react";

export function CalculatorCard({
  title,
  subtitle,
  children,
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      {title ? (
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
      <div className={title || subtitle ? "mt-5" : undefined}>{children}</div>
    </section>
  );
}

