"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import type {
  CalculatorCategoryId,
  CalculatorCategoryTitleKey,
  CalculatorCardKey,
} from "@/lib/calculatorsCatalog";

type CalculatorIndexItem = {
  href: string;
  titleKey: CalculatorCardKey;
  descriptionKey: CalculatorCardKey;
  categoryId: CalculatorCategoryId;
  tags: string[];
};

type CalculatorCategoryItem = {
  id: CalculatorCategoryId;
  titleKey: CalculatorCategoryTitleKey;
};

export function CalculatorsIndexClient({
  calculators,
  categories,
  initialQuery = "",
  initialCategoryId = "all",
}: {
  calculators: CalculatorIndexItem[];
  categories: CalculatorCategoryItem[];
  initialQuery?: string;
  initialCategoryId?: CalculatorCategoryId | "all";
}) {
  const home = useTranslations("home");
  const index = useTranslations("calculatorsIndex");

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    CalculatorCategoryId | "all"
  >(initialCategoryId);

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return calculators.filter((calculator) => {
      if (
        selectedCategoryId !== "all" &&
        calculator.categoryId !== selectedCategoryId
      ) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        home(calculator.titleKey),
        home(calculator.descriptionKey),
        calculator.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [calculators, home, normalizedQuery, selectedCategoryId]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="grid gap-1 text-sm">
            <span className="sr-only">{index("searchLabel")}</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={index("searchPlaceholder")}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </label>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {index("resultsCount", { count: filtered.length })}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-zinc-600 dark:text-zinc-400">
            {index("categoriesLabel")}
          </span>
          <button
            type="button"
            onClick={() => setSelectedCategoryId("all")}
            className={
              selectedCategoryId === "all"
                ? "rounded-full border border-zinc-300 bg-zinc-900 px-3 py-1 text-sm font-medium text-white dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
                : "rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
            }
          >
            {index("categoryAll")}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategoryId(category.id)}
              className={
                selectedCategoryId === category.id
                  ? "rounded-full border border-zinc-300 bg-zinc-900 px-3 py-1 text-sm font-medium text-white dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
                  : "rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
              }
            >
              {index(category.titleKey)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <div className="font-semibold">{index("noResultsTitle")}</div>
          <div className="mt-1">{index("noResultsBody")}</div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((calculator) => (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="font-semibold">
                {home(calculator.titleKey)}
              </div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {home(calculator.descriptionKey)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
