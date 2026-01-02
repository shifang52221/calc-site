"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculatePaverBase } from "./calc";
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

type DensityPresetId = "baseCrushedStone" | "baseGravel" | "sandDry" | "sandPacked" | "sandWet" | "custom";
type PriceMode = "none" | "volume" | "weight";

const DENSITY_PRESETS_LB_PER_YD3: Record<Exclude<DensityPresetId, "custom">, number> =
  {
    baseCrushedStone: 2800,
    baseGravel: 2700,
    sandDry: 2700,
    sandPacked: 3000,
    sandWet: 3300,
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

export function PaverBaseCalculator() {
  const t = useTranslations("paverBase");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "200";
  const defaultBaseDepth = "4";
  const defaultSandDepth = "1";
  const defaultWaste = "10";

  const defaultBaseDensityPreset: DensityPresetId = "baseCrushedStone";
  const defaultSandDensityPreset: DensityPresetId = "sandDry";
  const defaultBaseDensityCustom = "";
  const defaultSandDensityCustom = "";

  const defaultPriceMode: PriceMode = "none";
  const defaultBasePrice = "";
  const defaultSandPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [baseDepth, setBaseDepth] = useQueryParamState("baseDepth", defaultBaseDepth);
  const [sandDepth, setSandDepth] = useQueryParamState("sandDepth", defaultSandDepth);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [baseDensityPresetRaw, setBaseDensityPresetRaw] = useQueryParamState(
    "bdp",
    defaultBaseDensityPreset,
  );
  const baseDensityPreset: DensityPresetId =
    baseDensityPresetRaw === "baseCrushedStone" ||
    baseDensityPresetRaw === "baseGravel" ||
    baseDensityPresetRaw === "custom"
      ? baseDensityPresetRaw
      : defaultBaseDensityPreset;
  const setBaseDensityPreset = (next: DensityPresetId) => setBaseDensityPresetRaw(next);

  const [sandDensityPresetRaw, setSandDensityPresetRaw] = useQueryParamState(
    "sdp",
    defaultSandDensityPreset,
  );
  const sandDensityPreset: DensityPresetId =
    sandDensityPresetRaw === "sandDry" ||
    sandDensityPresetRaw === "sandPacked" ||
    sandDensityPresetRaw === "sandWet" ||
    sandDensityPresetRaw === "custom"
      ? sandDensityPresetRaw
      : defaultSandDensityPreset;
  const setSandDensityPreset = (next: DensityPresetId) => setSandDensityPresetRaw(next);

  const [baseDensityCustom, setBaseDensityCustom] = useQueryParamState(
    "bdensity",
    defaultBaseDensityCustom,
  );
  const [sandDensityCustom, setSandDensityCustom] = useQueryParamState(
    "sdensity",
    defaultSandDensityCustom,
  );

  const [priceModeRaw, setPriceModeRaw] = useQueryParamState("pm", defaultPriceMode);
  const priceMode: PriceMode =
    priceModeRaw === "none" || priceModeRaw === "volume" || priceModeRaw === "weight"
      ? priceModeRaw
      : defaultPriceMode;
  const setPriceMode = (next: PriceMode) => setPriceModeRaw(next);

  const [basePrice, setBasePrice] = useQueryParamState("pBase", defaultBasePrice);
  const [sandPrice, setSandPrice] = useQueryParamState("pSand", defaultSandPrice);

  const baseDensityLbPerYd3 = useMemo(() => {
    if (baseDensityPreset !== "custom") return DENSITY_PRESETS_LB_PER_YD3[baseDensityPreset];
    const raw = parseNumber(baseDensityCustom);
    return unitSystem === "metric" ? kgPerM3ToLbPerYd3(raw) : raw;
  }, [baseDensityCustom, baseDensityPreset, unitSystem]);

  const sandDensityLbPerYd3 = useMemo(() => {
    if (sandDensityPreset !== "custom") return DENSITY_PRESETS_LB_PER_YD3[sandDensityPreset];
    const raw = parseNumber(sandDensityCustom);
    return unitSystem === "metric" ? kgPerM3ToLbPerYd3(raw) : raw;
  }, [sandDensityCustom, sandDensityPreset, unitSystem]);

  const baseDensityDisplay = useMemo(() => {
    if (baseDensityPreset === "custom") return baseDensityCustom;
    return unitSystem === "metric"
      ? roundForInput(lbPerYd3ToKgPerM3(DENSITY_PRESETS_LB_PER_YD3[baseDensityPreset]), 0)
      : roundForInput(DENSITY_PRESETS_LB_PER_YD3[baseDensityPreset], 0);
  }, [baseDensityCustom, baseDensityPreset, unitSystem]);

  const sandDensityDisplay = useMemo(() => {
    if (sandDensityPreset === "custom") return sandDensityCustom;
    return unitSystem === "metric"
      ? roundForInput(lbPerYd3ToKgPerM3(DENSITY_PRESETS_LB_PER_YD3[sandDensityPreset]), 0)
      : roundForInput(DENSITY_PRESETS_LB_PER_YD3[sandDensityPreset], 0);
  }, [sandDensityCustom, sandDensityPreset, unitSystem]);

  const { base, sand, totalCost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const baseDepthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(baseDepth)) : parseNumber(baseDepth);
    const sandDepthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(sandDepth)) : parseNumber(sandDepth);

    const baseRawPrice = parseNumber(basePrice);
    const sandRawPrice = parseNumber(sandPrice);

    const baseHasPrice = basePrice.trim().length > 0 && Number.isFinite(baseRawPrice);
    const sandHasPrice = sandPrice.trim().length > 0 && Number.isFinite(sandRawPrice);

    const basePricePerCubicYd =
      baseHasPrice && priceMode === "volume"
        ? unitSystem === "metric"
          ? baseRawPrice * M3_PER_YD3
          : baseRawPrice
        : undefined;
    const sandPricePerCubicYd =
      sandHasPrice && priceMode === "volume"
        ? unitSystem === "metric"
          ? sandRawPrice * M3_PER_YD3
          : sandRawPrice
        : undefined;

    const basePricePerShortTon =
      baseHasPrice && priceMode === "weight"
        ? unitSystem === "metric"
          ? baseRawPrice * METRIC_TONNES_PER_SHORT_TON
          : baseRawPrice
        : undefined;
    const sandPricePerShortTon =
      sandHasPrice && priceMode === "weight"
        ? unitSystem === "metric"
          ? sandRawPrice * METRIC_TONNES_PER_SHORT_TON
          : sandRawPrice
        : undefined;

    return calculatePaverBase({
      areaSqFt: areaSqFtValue,
      baseDepthIn: baseDepthInValue,
      sandDepthIn: sandDepthInValue,
      wastePercent: parseNumber(waste),
      baseDensityLbPerYd3,
      sandDensityLbPerYd3,
      basePricePerCubicYd: basePricePerCubicYd,
      sandPricePerCubicYd: sandPricePerCubicYd,
      basePricePerShortTon: basePricePerShortTon,
      sandPricePerShortTon: sandPricePerShortTon,
    });
  }, [
    area,
    baseDepth,
    baseDensityLbPerYd3,
    basePrice,
    sandDensityLbPerYd3,
    sandDepth,
    sandPrice,
    priceMode,
    unitSystem,
    waste,
  ]);

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
                setBaseDepth(roundForInput(inToCm(parseNumber(baseDepth)), 1));
                setSandDepth(roundForInput(inToCm(parseNumber(sandDepth)), 1));

                if (baseDensityPreset === "custom" && baseDensityCustom.trim()) {
                  setBaseDensityCustom(
                    roundForInput(
                      lbPerYd3ToKgPerM3(parseNumber(baseDensityCustom)),
                      0,
                    ),
                  );
                }
                if (sandDensityPreset === "custom" && sandDensityCustom.trim()) {
                  setSandDensityCustom(
                    roundForInput(
                      lbPerYd3ToKgPerM3(parseNumber(sandDensityCustom)),
                      0,
                    ),
                  );
                }

                if (priceMode === "volume") {
                  if (basePrice.trim()) setBasePrice(roundForInput(parseNumber(basePrice) * YD3_PER_M3, 2));
                  if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) * YD3_PER_M3, 2));
                } else if (priceMode === "weight") {
                  if (basePrice.trim()) setBasePrice(roundForInput(parseNumber(basePrice) / METRIC_TONNES_PER_SHORT_TON, 2));
                  if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) / METRIC_TONNES_PER_SHORT_TON, 2));
                }

                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setBaseDepth(roundForInput(cmToIn(parseNumber(baseDepth)), 2));
              setSandDepth(roundForInput(cmToIn(parseNumber(sandDepth)), 2));

              if (baseDensityPreset === "custom" && baseDensityCustom.trim()) {
                setBaseDensityCustom(
                  roundForInput(
                    kgPerM3ToLbPerYd3(parseNumber(baseDensityCustom)),
                    0,
                  ),
                );
              }
              if (sandDensityPreset === "custom" && sandDensityCustom.trim()) {
                setSandDensityCustom(
                  roundForInput(
                    kgPerM3ToLbPerYd3(parseNumber(sandDensityCustom)),
                    0,
                  ),
                );
              }

              if (priceMode === "volume") {
                if (basePrice.trim()) setBasePrice(roundForInput(parseNumber(basePrice) * M3_PER_YD3, 2));
                if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) * M3_PER_YD3, 2));
              } else if (priceMode === "weight") {
                if (basePrice.trim()) setBasePrice(roundForInput(parseNumber(basePrice) * METRIC_TONNES_PER_SHORT_TON, 2));
                if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) * METRIC_TONNES_PER_SHORT_TON, 2));
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
            label={unitSystem === "metric" ? t("inputs.baseDepthCm") : t("inputs.baseDepthIn")}
            value={baseDepth}
            onChange={setBaseDepth}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.sandDepthCm") : t("inputs.sandDepthIn")}
            value={sandDepth}
            onChange={setSandDepth}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.baseDensityPreset")}
            </span>
            <select
              value={baseDensityPreset}
              onChange={(e) => {
                const next = e.target.value as DensityPresetId;
                setBaseDensityPreset(next);
                if (next !== "custom") setBaseDensityCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="baseCrushedStone">{t("densityPresets.baseCrushedStone")}</option>
              <option value="baseGravel">{t("densityPresets.baseGravel")}</option>
              <option value="custom">{t("densityPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.baseDensityKgPerM3")
                : t("inputs.baseDensityLbPerYd3")
            }
            value={baseDensityDisplay}
            onChange={(next) => {
              setBaseDensityPreset("custom");
              setBaseDensityCustom(next);
            }}
            placeholder={baseDensityPreset === "custom" ? "e.g. 1600" : undefined}
          />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.sandDensityPreset")}
            </span>
            <select
              value={sandDensityPreset}
              onChange={(e) => {
                const next = e.target.value as DensityPresetId;
                setSandDensityPreset(next);
                if (next !== "custom") setSandDensityCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="sandDry">{t("densityPresets.sandDry")}</option>
              <option value="sandPacked">{t("densityPresets.sandPacked")}</option>
              <option value="sandWet">{t("densityPresets.sandWet")}</option>
              <option value="custom">{t("densityPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.sandDensityKgPerM3")
                : t("inputs.sandDensityLbPerYd3")
            }
            value={sandDensityDisplay}
            onChange={(next) => {
              setSandDensityPreset("custom");
              setSandDensityCustom(next);
            }}
            placeholder={sandDensityPreset === "custom" ? "e.g. 1600" : undefined}
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
                if (next === "none") {
                  setBasePrice("");
                  setSandPrice("");
                }
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
                  ? t("inputs.basePricePerCubicM")
                  : t("inputs.basePricePerCubicYd")
                : priceMode === "weight"
                  ? unitSystem === "metric"
                    ? t("inputs.basePricePerTonne")
                    : t("inputs.basePricePerTon")
                  : t("inputs.basePricePlaceholderLabel")
            }
            value={basePrice}
            onChange={setBasePrice}
            placeholder={priceMode === "none" ? "" : "e.g. 55"}
          />

          <CalculatorField
            label={
              priceMode === "volume"
                ? unitSystem === "metric"
                  ? t("inputs.sandPricePerCubicM")
                  : t("inputs.sandPricePerCubicYd")
                : priceMode === "weight"
                  ? unitSystem === "metric"
                    ? t("inputs.sandPricePerTonne")
                    : t("inputs.sandPricePerTon")
                  : t("inputs.sandPricePlaceholderLabel")
            }
            value={sandPrice}
            onChange={setSandPrice}
            placeholder={priceMode === "none" ? "" : "e.g. 55"}
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setBaseDepth(defaultBaseDepth);
                setSandDepth(defaultSandDepth);
                setWaste(defaultWaste);
                setBaseDensityPreset(defaultBaseDensityPreset);
                setSandDensityPreset(defaultSandDensityPreset);
                setBaseDensityCustom(defaultBaseDensityCustom);
                setSandDensityCustom(defaultSandDensityCustom);
                setPriceMode(defaultPriceMode);
                setBasePrice(defaultBasePrice);
                setSandPrice(defaultSandPrice);
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
        <div className="grid gap-5">
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("results.baseTitle")}
            </div>
            <CalculatorResultList>
              <CalculatorResultRow
                label={
                  unitSystem === "metric"
                    ? t("results.cubicMeters")
                    : t("results.cubicYards")
                }
                value={
                  unitSystem === "metric"
                    ? formatNumber(cubicYardsToCubicMeters(base.cubicYards), 2)
                    : formatNumber(base.cubicYards, 2)
                }
              />
              <CalculatorResultRow
                label={
                  unitSystem === "metric"
                    ? t("results.metricTonnes")
                    : t("results.shortTons")
                }
                value={
                  unitSystem === "metric"
                    ? formatNumber(shortTonsToMetricTonnes(base.shortTons), 2)
                    : formatNumber(base.shortTons, 2)
                }
              />
              {typeof base.cost === "number" ? (
                <CalculatorResultRow
                  label={t("results.cost")}
                  value={formatCurrencyUSD(base.cost)}
                />
              ) : null}
            </CalculatorResultList>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("results.sandTitle")}
            </div>
            <CalculatorResultList>
              <CalculatorResultRow
                label={
                  unitSystem === "metric"
                    ? t("results.cubicMeters")
                    : t("results.cubicYards")
                }
                value={
                  unitSystem === "metric"
                    ? formatNumber(cubicYardsToCubicMeters(sand.cubicYards), 2)
                    : formatNumber(sand.cubicYards, 2)
                }
              />
              <CalculatorResultRow
                label={
                  unitSystem === "metric"
                    ? t("results.metricTonnes")
                    : t("results.shortTons")
                }
                value={
                  unitSystem === "metric"
                    ? formatNumber(shortTonsToMetricTonnes(sand.shortTons), 2)
                    : formatNumber(sand.shortTons, 2)
                }
              />
              {typeof sand.cost === "number" ? (
                <CalculatorResultRow
                  label={t("results.cost")}
                  value={formatCurrencyUSD(sand.cost)}
                />
              ) : null}
            </CalculatorResultList>
          </div>

          {typeof totalCost === "number" ? (
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-zinc-700 dark:text-zinc-300">
                {t("results.totalCost")}
              </div>
              <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatCurrencyUSD(totalCost)}
              </div>
            </div>
          ) : null}
        </div>
      </CalculatorCard>
    </div>
  );
}

