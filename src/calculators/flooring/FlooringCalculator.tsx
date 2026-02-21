"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateFlooring } from "./calc";
import { formatCurrencyUSD, formatNumber } from "@/lib/format";
import { useQueryParamState } from "@/lib/useQueryParamState";
import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { CalculatorField } from "@/components/calculator/CalculatorField";
import {
  CalculatorResultList,
  CalculatorResultRow,
} from "@/components/calculator/CalculatorResult";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { UnitSystemToggle } from "@/components/calculator/UnitSystemToggle";
import type { UnitSystem } from "@/lib/units";
import { m2ToSqFt, roundForInput, sqFtToM2, SQFT_PER_M2 } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function FlooringCalculator() {
  const t = useTranslations("flooring");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultAreaSqFt = "500";
  const defaultWaste = "10";
  const defaultPrice = "";

  const [areaSqFt, setAreaSqFt] = useQueryParamState("area", defaultAreaSqFt);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const { baseAreaSqFt, wasteSqFt, neededSqFt, cost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(areaSqFt)) : parseNumber(areaSqFt);
    const pricePerSqFtValue =
      unitSystem === "metric"
        ? parseNumber(price) / SQFT_PER_M2
        : parseNumber(price);

    return calculateFlooring({
      areaSqFt: areaSqFtValue,
      wastePercent: parseNumber(waste),
      pricePerSqFt: price.trim() ? pricePerSqFtValue : undefined,
    });
  }, [areaSqFt, price, unitSystem, waste]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setAreaSqFt(roundForInput(sqFtToM2(parseNumber(areaSqFt)), 2));
                setPrice(
                  price.trim()
                    ? roundForInput(parseNumber(price) * SQFT_PER_M2, 2)
                    : "",
                );
                setUnitSystem("metric");
                return;
              }

              setAreaSqFt(roundForInput(m2ToSqFt(parseNumber(areaSqFt)), 0));
              setPrice(
                price.trim()
                  ? roundForInput(parseNumber(price) / SQFT_PER_M2, 2)
                  : "",
              );
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={areaSqFt}
            onChange={setAreaSqFt}
          />
          <CalculatorField
            label={t("inputs.waste")}
            value={waste}
            onChange={setWaste}
          />
          <CalculatorField
            label={
              unitSystem === "metric" ? t("inputs.priceMetric") : t("inputs.price")
            }
            value={price}
            onChange={setPrice}
            placeholder="e.g. 3.25"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setAreaSqFt(defaultAreaSqFt);
                setWaste(defaultWaste);
                setPrice(defaultPrice);
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              {common("reset")}
            </button>
            <CopyLinkButton />
          </div>
        </div>
      </CalculatorCard>

      <CalculatorCard title={t("results.title")}>
        <CalculatorResultList>
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.baseM2")
                : t("results.baseSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(baseAreaSqFt), 2)
                : formatNumber(baseAreaSqFt, 1)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.wasteM2")
                : t("results.wasteSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(wasteSqFt), 2)
                : formatNumber(wasteSqFt, 1)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric" ? t("results.neededM2") : t("results.neededSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(neededSqFt), 2)
                : formatNumber(neededSqFt, 1)
            }
          />
          {typeof cost === "number" ? (
            <CalculatorResultRow
              label={t("results.cost")}
              value={formatCurrencyUSD(cost)}
            />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
