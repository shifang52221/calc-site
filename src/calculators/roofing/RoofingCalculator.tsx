"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateRoofing } from "./calc";
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
import { m2ToSqFt, roundForInput, sqFtToM2 } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function RoofingCalculator() {
  const t = useTranslations("roofing");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultRoofAreaSqFt = "2000";
  const defaultWaste = "10";
  const defaultCoveragePerBundle = "33.3";
  const defaultPricePerBundle = "";

  const [roofAreaSqFt, setRoofAreaSqFt] = useQueryParamState(
    "area",
    defaultRoofAreaSqFt,
  );
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [coveragePerBundle, setCoveragePerBundle] = useQueryParamState(
    "cov",
    defaultCoveragePerBundle,
  );
  const [pricePerBundle, setPricePerBundle] = useQueryParamState(
    "price",
    defaultPricePerBundle,
  );

  const { baseAreaSqFt, wasteSqFt, neededSqFt, squares, bundles, cost } = useMemo(() => {
    const roofAreaSqFtValue =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(roofAreaSqFt))
        : parseNumber(roofAreaSqFt);
    const coverageSqFtPerBundle =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(coveragePerBundle))
        : parseNumber(coveragePerBundle);

    return calculateRoofing({
      roofAreaSqFt: roofAreaSqFtValue,
      wastePercent: parseNumber(waste),
      coverageSqFtPerBundle: Math.max(1, coverageSqFtPerBundle),
      pricePerBundle: pricePerBundle.trim()
        ? parseNumber(pricePerBundle)
        : undefined,
    });
  }, [coveragePerBundle, pricePerBundle, roofAreaSqFt, unitSystem, waste]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setRoofAreaSqFt(roundForInput(sqFtToM2(parseNumber(roofAreaSqFt)), 2));
                setCoveragePerBundle(
                  roundForInput(sqFtToM2(parseNumber(coveragePerBundle)), 2),
                );
                setUnitSystem("metric");
                return;
              }

              setRoofAreaSqFt(roundForInput(m2ToSqFt(parseNumber(roofAreaSqFt)), 0));
              setCoveragePerBundle(
                roundForInput(m2ToSqFt(parseNumber(coveragePerBundle)), 1),
              );
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.roofAreaM2")
                : t("inputs.roofAreaSqFt")
            }
            value={roofAreaSqFt}
            onChange={setRoofAreaSqFt}
          />
          <CalculatorField
            label={t("inputs.waste")}
            value={waste}
            onChange={setWaste}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.coveragePerBundleM2")
                : t("inputs.coveragePerBundle")
            }
            value={coveragePerBundle}
            onChange={setCoveragePerBundle}
          />
          <CalculatorField
            label={t("inputs.pricePerBundle")}
            value={pricePerBundle}
            onChange={setPricePerBundle}
            placeholder="e.g. 38"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setRoofAreaSqFt(defaultRoofAreaSqFt);
                setWaste(defaultWaste);
                setCoveragePerBundle(defaultCoveragePerBundle);
                setPricePerBundle(defaultPricePerBundle);
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
              unitSystem === "metric"
                ? t("results.neededM2")
                : t("results.neededSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(neededSqFt), 2)
                : formatNumber(neededSqFt, 1)
            }
          />
          {unitSystem === "us" ? (
            <CalculatorResultRow
              label={t("results.squares")}
              value={formatNumber(squares, 2)}
            />
          ) : null}
          <CalculatorResultRow label={t("results.bundles")} value={bundles} />
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
