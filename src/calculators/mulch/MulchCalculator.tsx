"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateMulch } from "./calc";
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
import {
  M3_PER_YD3,
  YD3_PER_M3,
  cmToIn,
  cubicYardsToCubicMeters,
  inToCm,
  m2ToSqFt,
  roundForInput,
  sqFtToM2,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function MulchCalculator() {
  const t = useTranslations("mulch");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultAreaSqFt = "200";
  const defaultDepthIn = "3";
  const defaultWaste = "10";
  const defaultPricePerYd = "";

  const [areaSqFt, setAreaSqFt] = useQueryParamState("area", defaultAreaSqFt);
  const [depthIn, setDepthIn] = useQueryParamState("depth", defaultDepthIn);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [pricePerYd, setPricePerYd] = useQueryParamState(
    "price",
    defaultPricePerYd,
  );

  const { baseCubicYards, wasteCubicYards, cubicYards, cost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(areaSqFt)) : parseNumber(areaSqFt);
    const depthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(depthIn)) : parseNumber(depthIn);

    const pricePerCubicYdValue =
      unitSystem === "metric"
        ? parseNumber(pricePerYd) * M3_PER_YD3
        : parseNumber(pricePerYd);

    return calculateMulch({
      areaSqFt: areaSqFtValue,
      depthIn: depthInValue,
      wastePercent: parseNumber(waste),
      pricePerCubicYd: pricePerYd.trim() ? pricePerCubicYdValue : undefined,
    });
  }, [areaSqFt, depthIn, pricePerYd, unitSystem, waste]);

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
                setDepthIn(roundForInput(inToCm(parseNumber(depthIn)), 1));
                setPricePerYd(
                  pricePerYd.trim()
                    ? roundForInput(parseNumber(pricePerYd) * YD3_PER_M3, 2)
                    : "",
                );
                setUnitSystem("metric");
                return;
              }

              setAreaSqFt(roundForInput(m2ToSqFt(parseNumber(areaSqFt)), 0));
              setDepthIn(roundForInput(cmToIn(parseNumber(depthIn)), 2));
              setPricePerYd(
                pricePerYd.trim()
                  ? roundForInput(parseNumber(pricePerYd) * M3_PER_YD3, 2)
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
            label={unitSystem === "metric" ? t("inputs.depthCm") : t("inputs.depthIn")}
            value={depthIn}
            onChange={setDepthIn}
          />
          <CalculatorField
            label={t("inputs.waste")}
            value={waste}
            onChange={setWaste}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.pricePerCubicM")
                : t("inputs.pricePerCubicYd")
            }
            value={pricePerYd}
            onChange={setPricePerYd}
            placeholder="e.g. 45"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setAreaSqFt(defaultAreaSqFt);
                setDepthIn(defaultDepthIn);
                setWaste(defaultWaste);
                setPricePerYd(defaultPricePerYd);
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
                ? t("results.baseCubicMeters")
                : t("results.baseCubicYards")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(baseCubicYards), 2)
                : formatNumber(baseCubicYards, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.wasteCubicMeters")
                : t("results.wasteCubicYards")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(wasteCubicYards), 2)
                : formatNumber(wasteCubicYards, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.cubicMeters")
                : t("results.cubicYards")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(cubicYards), 2)
                : formatNumber(cubicYards, 2)
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
