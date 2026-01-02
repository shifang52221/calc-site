"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateGravelTons } from "./calc";
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
  KG_PER_LB,
  M3_PER_YD3,
  YD3_PER_M3,
  cubicMetersToCubicYards,
  cubicYardsToCubicMeters,
  roundForInput,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type Mode = "v2w" | "w2v";
type DensityPresetId = "peaGravel" | "crushedStone" | "baseRock" | "custom";

const DENSITY_PRESETS_LB_PER_YD3: Record<
  Exclude<DensityPresetId, "custom">,
  number
> = {
  peaGravel: 2700,
  crushedStone: 2800,
  baseRock: 3000,
};

function lbPerYd3ToKgPerM3(lbPerYd3: number) {
  const kgPerYd3 = Math.max(0, lbPerYd3) * KG_PER_LB;
  return kgPerYd3 * YD3_PER_M3;
}

function kgPerM3ToLbPerYd3(kgPerM3: number) {
  const kgPerYd3 = Math.max(0, kgPerM3) * M3_PER_YD3;
  return kgPerYd3 / KG_PER_LB;
}

function shortTonsToMetricTonnes(shortTons: number) {
  const pounds = Math.max(0, shortTons) * 2000;
  const kilograms = pounds * KG_PER_LB;
  return kilograms / 1000;
}

function metricTonnesToShortTons(metricTonnes: number) {
  const kilograms = Math.max(0, metricTonnes) * 1000;
  const pounds = kilograms / KG_PER_LB;
  return pounds / 2000;
}

const METRIC_TONNES_PER_SHORT_TON = (2000 * KG_PER_LB) / 1000;

export function GravelTonsCalculator() {
  const t = useTranslations("gravelTonsCalc");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultMode: Mode = "v2w";
  const defaultVolume = "3";
  const defaultWeight = "4";
  const defaultDensityPreset: DensityPresetId = "crushedStone";
  const defaultDensityCustom = "";
  const defaultPrice = "";

  const [modeRaw, setModeRaw] = useQueryParamState("m", defaultMode);
  const mode: Mode = modeRaw === "v2w" || modeRaw === "w2v" ? modeRaw : defaultMode;

  const [volume, setVolume] = useQueryParamState("v", defaultVolume);
  const [weight, setWeight] = useQueryParamState("w", defaultWeight);

  const [densityPresetRaw, setDensityPresetRaw] = useQueryParamState(
    "dp",
    defaultDensityPreset,
  );
  const densityPreset: DensityPresetId =
    densityPresetRaw === "peaGravel" ||
    densityPresetRaw === "crushedStone" ||
    densityPresetRaw === "baseRock" ||
    densityPresetRaw === "custom"
      ? densityPresetRaw
      : defaultDensityPreset;
  const setDensityPreset = (next: DensityPresetId) => setDensityPresetRaw(next);

  const [densityCustom, setDensityCustom] = useQueryParamState(
    "density",
    defaultDensityCustom,
  );
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const densityLbPerYd3 = useMemo(() => {
    if (densityPreset !== "custom") return DENSITY_PRESETS_LB_PER_YD3[densityPreset];
    const raw = parseNumber(densityCustom);
    return unitSystem === "metric" ? kgPerM3ToLbPerYd3(raw) : raw;
  }, [densityCustom, densityPreset, unitSystem]);

  const densityDisplayValue = useMemo(() => {
    if (densityPreset === "custom") return densityCustom;
    return unitSystem === "metric"
      ? roundForInput(
          lbPerYd3ToKgPerM3(DENSITY_PRESETS_LB_PER_YD3[densityPreset]),
          0,
        )
      : roundForInput(DENSITY_PRESETS_LB_PER_YD3[densityPreset], 0);
  }, [densityCustom, densityPreset, unitSystem]);

  const results = useMemo(() => {
    const cubicYardsValue =
      unitSystem === "metric"
        ? cubicMetersToCubicYards(parseNumber(volume))
        : parseNumber(volume);

    const shortTonsValue =
      unitSystem === "metric"
        ? metricTonnesToShortTons(parseNumber(weight))
        : parseNumber(weight);

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);
    const pricePerShortTon =
      hasPrice && unitSystem === "metric" ? rawPrice * METRIC_TONNES_PER_SHORT_TON : hasPrice ? rawPrice : undefined;

    return calculateGravelTons({
      cubicYards: cubicYardsValue,
      shortTons: shortTonsValue,
      densityLbPerYd3,
      pricePerShortTon,
    });
  }, [densityLbPerYd3, price, unitSystem, volume, weight]);

  const displayedTons =
    mode === "v2w" ? results.shortTonsFromYards : parseNumber(weight);
  const displayedYards =
    mode === "w2v" ? results.cubicYardsFromTons : parseNumber(volume);

  const displayedCost =
    price.trim().length === 0
      ? undefined
      : mode === "v2w"
        ? results.costFromYards
        : results.costFromTons;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setVolume(roundForInput(cubicYardsToCubicMeters(parseNumber(volume)), 2));
                setWeight(roundForInput(shortTonsToMetricTonnes(parseNumber(weight)), 2));

                if (densityPreset === "custom" && densityCustom.trim()) {
                  setDensityCustom(roundForInput(lbPerYd3ToKgPerM3(parseNumber(densityCustom)), 0));
                }

                if (price.trim()) {
                  setPrice(roundForInput(parseNumber(price) / METRIC_TONNES_PER_SHORT_TON, 2));
                }

                setUnitSystem("metric");
                return;
              }

              setVolume(roundForInput(cubicMetersToCubicYards(parseNumber(volume)), 2));
              setWeight(roundForInput(metricTonnesToShortTons(parseNumber(weight)), 2));

              if (densityPreset === "custom" && densityCustom.trim()) {
                setDensityCustom(roundForInput(kgPerM3ToLbPerYd3(parseNumber(densityCustom)), 0));
              }

              if (price.trim()) {
                setPrice(roundForInput(parseNumber(price) * METRIC_TONNES_PER_SHORT_TON, 2));
              }

              setUnitSystem("us");
            }}
          />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.mode")}</span>
            <select
              value={mode}
              onChange={(e) => setModeRaw(e.target.value)}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="v2w">{t("modes.v2w")}</option>
              <option value="w2v">{t("modes.w2v")}</option>
            </select>
          </label>

          {mode === "v2w" ? (
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.volumeM3") : t("inputs.volumeYd3")}
              value={volume}
              onChange={setVolume}
            />
          ) : (
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.weightTonnes") : t("inputs.weightTons")}
              value={weight}
              onChange={setWeight}
            />
          )}

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.densityPreset")}</span>
            <select
              value={densityPreset}
              onChange={(e) => {
                const next = e.target.value as DensityPresetId;
                setDensityPreset(next);
                if (next !== "custom") setDensityCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="peaGravel">{t("densityPresets.peaGravel")}</option>
              <option value="crushedStone">{t("densityPresets.crushedStone")}</option>
              <option value="baseRock">{t("densityPresets.baseRock")}</option>
              <option value="custom">{t("densityPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.densityKgPerM3") : t("inputs.densityLbPerYd3")}
            value={densityDisplayValue}
            onChange={(next) => {
              setDensityPreset("custom");
              setDensityCustom(next);
            }}
            placeholder={densityPreset === "custom" ? (unitSystem === "metric" ? "e.g. 1600" : "e.g. 2800") : undefined}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.pricePerTonne") : t("inputs.pricePerTon")}
            value={price}
            onChange={setPrice}
            placeholder="e.g. 45"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setModeRaw(defaultMode);
                setVolume(defaultVolume);
                setWeight(defaultWeight);
                setDensityPresetRaw(defaultDensityPreset);
                setDensityCustom(defaultDensityCustom);
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
            label={unitSystem === "metric" ? t("results.volumeM3") : t("results.volumeYd3")}
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(displayedYards), 2)
                : formatNumber(displayedYards, 2)
            }
          />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.weightTonnes") : t("results.weightTons")}
            value={
              unitSystem === "metric"
                ? formatNumber(shortTonsToMetricTonnes(displayedTons), 2)
                : formatNumber(displayedTons, 2)
            }
          />
          {typeof displayedCost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(displayedCost)} />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}

