"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateDrywall } from "./calc";
import { formatCurrencyUSD } from "@/lib/format";
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
import { m2ToSqFt, roundForInput, sqFtToM2 } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function DrywallCalculator() {
  const t = useTranslations("drywall");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultAreaSqFt = "800";
  const defaultWaste = "12";
  const defaultSheetCoverage = "32";
  const defaultPricePerSheet = "";

  const [areaSqFt, setAreaSqFt] = useQueryParamState("area", defaultAreaSqFt);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [sheetCoverage, setSheetCoverage] = useQueryParamState(
    "sheet",
    defaultSheetCoverage,
  );
  const [pricePerSheet, setPricePerSheet] = useQueryParamState(
    "price",
    defaultPricePerSheet,
  );

  const { sheets, cost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(areaSqFt)) : parseNumber(areaSqFt);
    const sheetCoverageSqFt =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(sheetCoverage))
        : parseNumber(sheetCoverage);

    return calculateDrywall({
      areaSqFt: areaSqFtValue,
      wastePercent: parseNumber(waste),
      sheetCoverageSqFt: Math.max(1, sheetCoverageSqFt),
      pricePerSheet: pricePerSheet.trim() ? parseNumber(pricePerSheet) : undefined,
    });
  }, [areaSqFt, pricePerSheet, sheetCoverage, unitSystem, waste]);

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
                setSheetCoverage(
                  roundForInput(sqFtToM2(parseNumber(sheetCoverage)), 2),
                );
                setUnitSystem("metric");
                return;
              }

              setAreaSqFt(roundForInput(m2ToSqFt(parseNumber(areaSqFt)), 0));
              setSheetCoverage(
                roundForInput(m2ToSqFt(parseNumber(sheetCoverage)), 0),
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
              unitSystem === "metric"
                ? t("inputs.sheetCoverageM2")
                : t("inputs.sheetCoverage")
            }
            value={sheetCoverage}
            onChange={setSheetCoverage}
          />
          <CalculatorField
            label={t("inputs.pricePerSheet")}
            value={pricePerSheet}
            onChange={setPricePerSheet}
            placeholder="e.g. 14"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setAreaSqFt(defaultAreaSqFt);
                setWaste(defaultWaste);
                setSheetCoverage(defaultSheetCoverage);
                setPricePerSheet(defaultPricePerSheet);
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
          <CalculatorResultRow label={t("results.sheets")} value={sheets} />
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
