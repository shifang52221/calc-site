"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateConcrete } from "./calc";
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
  CM_PER_IN,
  M3_PER_YD3,
  YD3_PER_M3,
  cmToIn,
  cubicYardsToCubicMeters,
  ftToM,
  inToCm,
  mToFt,
  roundForInput,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function ConcreteCalculator() {
  const t = useTranslations("concrete");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultLengthFt = "10";
  const defaultWidthFt = "10";
  const defaultDepthIn = "4";
  const defaultWaste = "10";
  const defaultPricePerYd = "";

  const [lengthFt, setLengthFt] = useQueryParamState("len", defaultLengthFt);
  const [widthFt, setWidthFt] = useQueryParamState("wid", defaultWidthFt);
  const [depthIn, setDepthIn] = useQueryParamState("depth", defaultDepthIn);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [pricePerYd, setPricePerYd] = useQueryParamState(
    "price",
    defaultPricePerYd,
  );

  const { cubicYards, cost } = useMemo(() => {
    const lengthFtValue =
      unitSystem === "metric" ? mToFt(parseNumber(lengthFt)) : parseNumber(lengthFt);
    const widthFtValue =
      unitSystem === "metric" ? mToFt(parseNumber(widthFt)) : parseNumber(widthFt);
    const depthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(depthIn)) : parseNumber(depthIn);

    const pricePerCubicYdValue =
      unitSystem === "metric"
        ? parseNumber(pricePerYd) * M3_PER_YD3
        : parseNumber(pricePerYd);

    return calculateConcrete({
      lengthFt: lengthFtValue,
      widthFt: widthFtValue,
      depthIn: depthInValue,
      wastePercent: parseNumber(waste),
      pricePerCubicYd: pricePerYd.trim() ? pricePerCubicYdValue : undefined,
    });
  }, [depthIn, lengthFt, pricePerYd, unitSystem, waste, widthFt]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setLengthFt(roundForInput(ftToM(parseNumber(lengthFt)), 2));
                setWidthFt(roundForInput(ftToM(parseNumber(widthFt)), 2));
                setDepthIn(roundForInput(inToCm(parseNumber(depthIn)), 1));
                setPricePerYd(
                  pricePerYd.trim()
                    ? roundForInput(parseNumber(pricePerYd) * YD3_PER_M3, 2)
                    : "",
                );
                setUnitSystem("metric");
                return;
              }

              setLengthFt(roundForInput(mToFt(parseNumber(lengthFt)), 0));
              setWidthFt(roundForInput(mToFt(parseNumber(widthFt)), 0));
              setDepthIn(roundForInput(parseNumber(depthIn) / CM_PER_IN, 1));
              setPricePerYd(
                pricePerYd.trim()
                  ? roundForInput(parseNumber(pricePerYd) * M3_PER_YD3, 2)
                  : "",
              );
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.lengthM") : t("inputs.lengthFt")}
            value={lengthFt}
            onChange={setLengthFt}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.widthM") : t("inputs.widthFt")}
            value={widthFt}
            onChange={setWidthFt}
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
            placeholder="e.g. 165"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setLengthFt(defaultLengthFt);
                setWidthFt(defaultWidthFt);
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
