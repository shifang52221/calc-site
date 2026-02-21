"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateAsphaltDriveway } from "./calc";
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

type DensityPresetId = "hotMix" | "warmMix" | "custom";

const DENSITY_PRESETS_LB_PER_YD3: Record<Exclude<DensityPresetId, "custom">, number> =
  {
    hotMix: 4000,
    warmMix: 3900,
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

const METRIC_TONNES_PER_SHORT_TON = (2000 * KG_PER_LB) / 1000;

export function AsphaltDrivewayCalculator() {
  const t = useTranslations("asphaltDriveway");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "600";
  const defaultThickness = "2";
  const defaultWaste = "10";
  const defaultTruckCapacity = "20";
  const defaultDensityPreset: DensityPresetId = "hotMix";
  const defaultDensityCustom = "";
  const defaultPricePerTon = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [thickness, setThickness] = useQueryParamState("thickness", defaultThickness);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [truckCapacity, setTruckCapacity] = useQueryParamState(
    "truck",
    defaultTruckCapacity,
  );

  const [densityPresetRaw, setDensityPresetRaw] = useQueryParamState(
    "dp",
    defaultDensityPreset,
  );
  const densityPreset: DensityPresetId =
    densityPresetRaw === "hotMix" || densityPresetRaw === "warmMix" || densityPresetRaw === "custom"
      ? densityPresetRaw
      : defaultDensityPreset;
  const setDensityPreset = (next: DensityPresetId) => setDensityPresetRaw(next);

  const [densityCustom, setDensityCustom] = useQueryParamState(
    "density",
    defaultDensityCustom,
  );
  const [pricePerTon, setPricePerTon] = useQueryParamState(
    "price",
    defaultPricePerTon,
  );

  const densityLbPerYd3 = useMemo(() => {
    if (densityPreset !== "custom") return DENSITY_PRESETS_LB_PER_YD3[densityPreset];
    const raw = parseNumber(densityCustom);
    return unitSystem === "metric" ? kgPerM3ToLbPerYd3(raw) : raw;
  }, [densityCustom, densityPreset, unitSystem]);

  const densityDisplayValue = useMemo(() => {
    if (densityPreset === "custom") return densityCustom;
    return unitSystem === "metric"
      ? roundForInput(lbPerYd3ToKgPerM3(DENSITY_PRESETS_LB_PER_YD3[densityPreset]), 0)
      : roundForInput(DENSITY_PRESETS_LB_PER_YD3[densityPreset], 0);
  }, [densityCustom, densityPreset, unitSystem]);

  const { baseCubicYards, wasteCubicYards, cubicYards, shortTons, truckloads, cost } =
    useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const thicknessInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(thickness)) : parseNumber(thickness);

    const capacityShortTons =
      unitSystem === "metric"
        ? parseNumber(truckCapacity) * METRIC_TONNES_PER_SHORT_TON
        : parseNumber(truckCapacity);

    const rawPrice = parseNumber(pricePerTon);
    const hasPrice = pricePerTon.trim().length > 0 && Number.isFinite(rawPrice);
    const pricePerShortTon =
      hasPrice && unitSystem === "metric"
        ? rawPrice * METRIC_TONNES_PER_SHORT_TON
        : hasPrice
          ? rawPrice
          : undefined;

    return calculateAsphaltDriveway({
      areaSqFt: areaSqFtValue,
      thicknessIn: thicknessInValue,
      wastePercent: parseNumber(waste),
      densityLbPerYd3,
      truckCapacityShortTons: capacityShortTons,
      pricePerShortTon,
    });
  }, [area, densityLbPerYd3, pricePerTon, thickness, truckCapacity, unitSystem, waste]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setArea(roundForInput(sqFtToM2(parseNumber(area)), 2));
                setThickness(roundForInput(inToCm(parseNumber(thickness)), 1));

                if (densityPreset === "custom" && densityCustom.trim()) {
                  setDensityCustom(
                    roundForInput(lbPerYd3ToKgPerM3(parseNumber(densityCustom)), 0),
                  );
                }

                if (truckCapacity.trim()) {
                  setTruckCapacity(
                    roundForInput(parseNumber(truckCapacity) / METRIC_TONNES_PER_SHORT_TON, 2),
                  );
                }

                if (pricePerTon.trim()) {
                  setPricePerTon(
                    roundForInput(parseNumber(pricePerTon) / METRIC_TONNES_PER_SHORT_TON, 2),
                  );
                }

                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setThickness(roundForInput(cmToIn(parseNumber(thickness)), 2));

              if (densityPreset === "custom" && densityCustom.trim()) {
                setDensityCustom(
                  roundForInput(kgPerM3ToLbPerYd3(parseNumber(densityCustom)), 0),
                );
              }

              if (truckCapacity.trim()) {
                setTruckCapacity(
                  roundForInput(parseNumber(truckCapacity) * METRIC_TONNES_PER_SHORT_TON, 0),
                );
              }

              if (pricePerTon.trim()) {
                setPricePerTon(
                  roundForInput(parseNumber(pricePerTon) * METRIC_TONNES_PER_SHORT_TON, 2),
                );
              }

              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={area}
            onChange={setArea}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.thicknessCm") : t("inputs.thicknessIn")}
            value={thickness}
            onChange={setThickness}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.densityPreset")}
            </span>
            <select
              value={densityPreset}
              onChange={(e) => {
                const next = e.target.value as DensityPresetId;
                setDensityPreset(next);
                if (next !== "custom") setDensityCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="hotMix">{t("densityPresets.hotMix")}</option>
              <option value="warmMix">{t("densityPresets.warmMix")}</option>
              <option value="custom">{t("densityPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.densityKgPerM3")
                : t("inputs.densityLbPerYd3")
            }
            value={densityDisplayValue}
            onChange={(next) => {
              setDensityPreset("custom");
              setDensityCustom(next);
            }}
            placeholder={densityPreset === "custom" ? "e.g. 2300" : undefined}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.truckCapacityTonnes") : t("inputs.truckCapacityTons")}
            value={truckCapacity}
            onChange={setTruckCapacity}
            placeholder={unitSystem === "metric" ? "e.g. 18" : "e.g. 20"}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.pricePerTonne") : t("inputs.pricePerTon")}
            value={pricePerTon}
            onChange={setPricePerTon}
            placeholder="e.g. 120"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setThickness(defaultThickness);
                setWaste(defaultWaste);
                setTruckCapacity(defaultTruckCapacity);
                setDensityPreset(defaultDensityPreset);
                setDensityCustom(defaultDensityCustom);
                setPricePerTon(defaultPricePerTon);
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
            label={unitSystem === "metric" ? t("results.cubicMeters") : t("results.cubicYards")}
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(cubicYards), 2)
                : formatNumber(cubicYards, 2)
            }
          />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.metricTonnes") : t("results.shortTons")}
            value={
              unitSystem === "metric"
                ? formatNumber(shortTonsToMetricTonnes(shortTons), 2)
                : formatNumber(shortTons, 2)
            }
          />
          <CalculatorResultRow label={t("results.truckloads")} value={formatNumber(truckloads, 0)} />
          {typeof cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(cost)} />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
