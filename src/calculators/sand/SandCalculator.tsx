"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateSand } from "./calc";
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

type DensityPresetId = "dry" | "packed" | "wet" | "custom";
type PriceMode = "none" | "volume" | "weight";

const DENSITY_PRESETS_LB_PER_YD3: Record<
  Exclude<DensityPresetId, "custom">,
  number
> = {
  dry: 2700,
  packed: 3000,
  wet: 3300,
};

function lbPerYd3ToKgPerM3(lbPerYd3: number) {
  const kgPerYd3 = Math.max(0, lbPerYd3) * KG_PER_LB;
  return kgPerYd3 * YD3_PER_M3;
}

function kgPerM3ToLbPerYd3(kgPerM3: number) {
  const kgPerYd3 = Math.max(0, kgPerM3) * M3_PER_YD3;
  const lbPerYd3 = kgPerYd3 / KG_PER_LB;
  return lbPerYd3;
}

function shortTonsToMetricTonnes(shortTons: number) {
  const pounds = Math.max(0, shortTons) * 2000;
  const kilograms = pounds * KG_PER_LB;
  return kilograms / 1000;
}

const METRIC_TONNES_PER_SHORT_TON = (2000 * KG_PER_LB) / 1000;

export function SandCalculator() {
  const t = useTranslations("sand");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "300";
  const defaultDepth = "2";
  const defaultWaste = "10";
  const defaultDensityPreset: DensityPresetId = "dry";
  const defaultDensityCustom = "";
  const defaultPriceMode: PriceMode = "none";
  const defaultPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [depth, setDepth] = useQueryParamState("depth", defaultDepth);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [densityPresetRaw, setDensityPresetRaw] = useQueryParamState(
    "dp",
    defaultDensityPreset,
  );
  const densityPreset: DensityPresetId =
    densityPresetRaw === "dry" ||
    densityPresetRaw === "packed" ||
    densityPresetRaw === "wet" ||
    densityPresetRaw === "custom"
      ? densityPresetRaw
      : defaultDensityPreset;
  const setDensityPreset = (next: DensityPresetId) => setDensityPresetRaw(next);

  const [densityCustom, setDensityCustom] = useQueryParamState(
    "density",
    defaultDensityCustom,
  );

  const [priceModeRaw, setPriceModeRaw] = useQueryParamState(
    "pm",
    defaultPriceMode,
  );
  const priceMode: PriceMode =
    priceModeRaw === "none" ||
    priceModeRaw === "volume" ||
    priceModeRaw === "weight"
      ? priceModeRaw
      : defaultPriceMode;
  const setPriceMode = (next: PriceMode) => setPriceModeRaw(next);

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

  const { baseCubicYards, wasteCubicYards, cubicYards, shortTons, cost } = useMemo(
    () => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const depthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(depth)) : parseNumber(depth);

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);

    const pricePerCubicYd =
      hasPrice && priceMode === "volume"
        ? unitSystem === "metric"
          ? rawPrice * M3_PER_YD3
          : rawPrice
        : undefined;

    const pricePerShortTon =
      hasPrice && priceMode === "weight"
        ? unitSystem === "metric"
          ? rawPrice * METRIC_TONNES_PER_SHORT_TON
          : rawPrice
        : undefined;

    return calculateSand({
      areaSqFt: areaSqFtValue,
      depthIn: depthInValue,
      wastePercent: parseNumber(waste),
      densityLbPerYd3,
      pricePerCubicYd,
      pricePerShortTon,
    });
    },
    [area, densityLbPerYd3, depth, price, priceMode, unitSystem, waste],
  );

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
                setDepth(roundForInput(inToCm(parseNumber(depth)), 1));

                if (densityPreset === "custom" && densityCustom.trim()) {
                  setDensityCustom(
                    roundForInput(lbPerYd3ToKgPerM3(parseNumber(densityCustom)), 0),
                  );
                }

                if (price.trim()) {
                  if (priceMode === "volume") {
                    setPrice(roundForInput(parseNumber(price) * YD3_PER_M3, 2));
                  } else if (priceMode === "weight") {
                    setPrice(
                      roundForInput(
                        parseNumber(price) / METRIC_TONNES_PER_SHORT_TON,
                        2,
                      ),
                    );
                  }
                }

                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setDepth(roundForInput(cmToIn(parseNumber(depth)), 2));

              if (densityPreset === "custom" && densityCustom.trim()) {
                setDensityCustom(
                  roundForInput(kgPerM3ToLbPerYd3(parseNumber(densityCustom)), 0),
                );
              }

              if (price.trim()) {
                if (priceMode === "volume") {
                  setPrice(roundForInput(parseNumber(price) * M3_PER_YD3, 2));
                } else if (priceMode === "weight") {
                  setPrice(
                    roundForInput(
                      parseNumber(price) * METRIC_TONNES_PER_SHORT_TON,
                      2,
                    ),
                  );
                }
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
            label={unitSystem === "metric" ? t("inputs.depthCm") : t("inputs.depthIn")}
            value={depth}
            onChange={setDepth}
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
              <option value="dry">{t("densityPresets.dry")}</option>
              <option value="packed">{t("densityPresets.packed")}</option>
              <option value="wet">{t("densityPresets.wet")}</option>
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
            placeholder={densityPreset === "custom" ? "e.g. 1600" : undefined}
          />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.priceMode")}
            </span>
            <select
              value={priceMode}
              onChange={(e) => {
                const next = e.target.value as PriceMode;
                setPriceMode(next);
                if (next === "none") setPrice("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="none">{t("priceModes.none")}</option>
              <option value="volume">{t("priceModes.volume")}</option>
              <option value="weight">{t("priceModes.weight")}</option>
            </select>
          </label>

          <CalculatorField
            label={
              priceMode === "volume"
                ? unitSystem === "metric"
                  ? t("inputs.pricePerCubicM")
                  : t("inputs.pricePerCubicYd")
                : priceMode === "weight"
                  ? unitSystem === "metric"
                    ? t("inputs.pricePerTonne")
                    : t("inputs.pricePerTon")
                  : t("inputs.pricePlaceholderLabel")
            }
            value={price}
            onChange={setPrice}
            placeholder={priceMode === "none" ? "" : "e.g. 55"}
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setDepth(defaultDepth);
                setWaste(defaultWaste);
                setDensityPreset(defaultDensityPreset);
                setDensityCustom(defaultDensityCustom);
                setPriceMode(defaultPriceMode);
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
          {typeof cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(cost)} />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
