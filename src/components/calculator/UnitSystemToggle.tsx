"use client";

import type { UnitSystem } from "@/lib/units";
import { useTranslations } from "next-intl";

export function UnitSystemToggle({
  value,
  onChange,
}: {
  value: UnitSystem;
  onChange: (next: UnitSystem) => void;
}) {
  const t = useTranslations("common");

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        {t("unitsLabel")}
      </span>
      <div className="flex items-center rounded-md border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950">
        <button
          type="button"
          onClick={() => onChange("us")}
          className={
            value === "us"
              ? "rounded-sm bg-zinc-900 px-2 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "rounded-sm px-2 py-1 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          }
        >
          {t("imperial")}
        </button>
        <button
          type="button"
          onClick={() => onChange("metric")}
          className={
            value === "metric"
              ? "rounded-sm bg-zinc-900 px-2 py-1 text-xs font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "rounded-sm px-2 py-1 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          }
        >
          {t("metric")}
        </button>
      </div>
    </div>
  );
}

