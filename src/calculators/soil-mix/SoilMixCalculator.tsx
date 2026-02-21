"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateSoilMix } from "./calc";
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

type MixPreset = "raisedBed5050" | "garden3070" | "leveling5050" | "custom";

const MIX_PRESETS: Record<Exclude<MixPreset, "custom">, { compost: number; topsoil: number; sand: number }> =
  {
    raisedBed5050: { compost: 50, topsoil: 50, sand: 0 },
    garden3070: { compost: 30, topsoil: 70, sand: 0 },
    leveling5050: { compost: 0, topsoil: 50, sand: 50 },
  };

export function SoilMixCalculator() {
  const t = useTranslations("soilMix");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "200";
  const defaultDepth = "6";
  const defaultWaste = "10";

  const defaultPreset: MixPreset = "raisedBed5050";
  const defaultCompost = "50";
  const defaultTopsoil = "50";
  const defaultSand = "0";

  const defaultCompostPrice = "";
  const defaultTopsoilPrice = "";
  const defaultSandPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [depth, setDepth] = useQueryParamState("depth", defaultDepth);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [presetRaw, setPresetRaw] = useQueryParamState("preset", defaultPreset);
  const preset: MixPreset =
    presetRaw === "raisedBed5050" ||
    presetRaw === "garden3070" ||
    presetRaw === "leveling5050" ||
    presetRaw === "custom"
      ? presetRaw
      : defaultPreset;
  const setPreset = (next: MixPreset) => setPresetRaw(next);

  const [compost, setCompost] = useQueryParamState("compost", defaultCompost);
  const [topsoil, setTopsoil] = useQueryParamState("topsoil", defaultTopsoil);
  const [sand, setSand] = useQueryParamState("sand", defaultSand);

  const [compostPrice, setCompostPrice] = useQueryParamState("pCompost", defaultCompostPrice);
  const [topsoilPrice, setTopsoilPrice] = useQueryParamState("pTopsoil", defaultTopsoilPrice);
  const [sandPrice, setSandPrice] = useQueryParamState("pSand", defaultSandPrice);

  const { baseCubicYards, wasteCubicYards, totalCubicYards } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const depthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(depth)) : parseNumber(depth);
    const multiplier = 1 + Math.max(0, parseNumber(waste)) / 100;
    const cubicFeet = Math.max(0, areaSqFtValue) * (Math.max(0, depthInValue) / 12);
    const base = Math.max(0, cubicFeet / 27);
    const total = Math.max(0, base * multiplier);
    const wasteVolume = Math.max(0, total - base);
    return { baseCubicYards: base, wasteCubicYards: wasteVolume, totalCubicYards: total };
  }, [area, depth, unitSystem, waste]);

  const results = useMemo(() => {
    const pricePerCubicYd = (raw: string) => {
      if (!raw.trim()) return undefined;
      const value = parseNumber(raw);
      if (!Number.isFinite(value)) return undefined;
      return unitSystem === "metric" ? value * M3_PER_YD3 : value;
    };

    return calculateSoilMix({
      totalCubicYards,
      compostPercent: parseNumber(compost),
      topsoilPercent: parseNumber(topsoil),
      sandPercent: parseNumber(sand),
      compostPricePerCubicYd: pricePerCubicYd(compostPrice),
      topsoilPricePerCubicYd: pricePerCubicYd(topsoilPrice),
      sandPricePerCubicYd: pricePerCubicYd(sandPrice),
    });
  }, [
    compost,
    compostPrice,
    sand,
    sandPrice,
    topsoil,
    topsoilPrice,
    totalCubicYards,
    unitSystem,
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
                setDepth(roundForInput(inToCm(parseNumber(depth)), 1));
                if (compostPrice.trim()) setCompostPrice(roundForInput(parseNumber(compostPrice) * YD3_PER_M3, 2));
                if (topsoilPrice.trim()) setTopsoilPrice(roundForInput(parseNumber(topsoilPrice) * YD3_PER_M3, 2));
                if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) * YD3_PER_M3, 2));
                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setDepth(roundForInput(cmToIn(parseNumber(depth)), 2));
              if (compostPrice.trim()) setCompostPrice(roundForInput(parseNumber(compostPrice) * M3_PER_YD3, 2));
              if (topsoilPrice.trim()) setTopsoilPrice(roundForInput(parseNumber(topsoilPrice) * M3_PER_YD3, 2));
              if (sandPrice.trim()) setSandPrice(roundForInput(parseNumber(sandPrice) * M3_PER_YD3, 2));
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
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.preset")}</span>
            <select
              value={preset}
              onChange={(e) => {
                const next = e.target.value as MixPreset;
                setPreset(next);
                if (next === "custom") return;
                const values = MIX_PRESETS[next];
                setCompost(String(values.compost));
                setTopsoil(String(values.topsoil));
                setSand(String(values.sand));
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="raisedBed5050">{t("presets.raisedBed5050")}</option>
              <option value="garden3070">{t("presets.garden3070")}</option>
              <option value="leveling5050">{t("presets.leveling5050")}</option>
              <option value="custom">{t("presets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={t("inputs.compostPercent")}
            value={compost}
            onChange={(next) => {
              setPreset("custom");
              setCompost(next);
            }}
            placeholder="e.g. 50"
          />
          <CalculatorField
            label={t("inputs.topsoilPercent")}
            value={topsoil}
            onChange={(next) => {
              setPreset("custom");
              setTopsoil(next);
            }}
            placeholder="e.g. 50"
          />
          <CalculatorField
            label={t("inputs.sandPercent")}
            value={sand}
            onChange={(next) => {
              setPreset("custom");
              setSand(next);
            }}
            placeholder="e.g. 0"
          />

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.pricesTitle")}
            </div>
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.compostPricePerCubicM") : t("inputs.compostPricePerCubicYd")}
              value={compostPrice}
              onChange={setCompostPrice}
              placeholder="e.g. 45"
            />
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.topsoilPricePerCubicM") : t("inputs.topsoilPricePerCubicYd")}
              value={topsoilPrice}
              onChange={setTopsoilPrice}
              placeholder="e.g. 35"
            />
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.sandPricePerCubicM") : t("inputs.sandPricePerCubicYd")}
              value={sandPrice}
              onChange={setSandPrice}
              placeholder="e.g. 50"
            />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              {t("inputs.pricesHint")}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setDepth(defaultDepth);
                setWaste(defaultWaste);
                setPreset(defaultPreset);
                setCompost(defaultCompost);
                setTopsoil(defaultTopsoil);
                setSand(defaultSand);
                setCompostPrice(defaultCompostPrice);
                setTopsoilPrice(defaultTopsoilPrice);
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
              label={unitSystem === "metric" ? t("results.totalCubicMeters") : t("results.totalCubicYards")}
              value={
                unitSystem === "metric"
                  ? formatNumber(cubicYardsToCubicMeters(results.totalCubicYards), 2)
                  : formatNumber(results.totalCubicYards, 2)
              }
            />
          </CalculatorResultList>

          <div className="grid gap-3">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("results.componentsTitle")}
            </div>
            <CalculatorResultList>
              <CalculatorResultRow
                label={t("results.compost")}
                value={
                  unitSystem === "metric"
                    ? `${formatNumber(results.compost.cubicYards, 2)} ${t("results.yd3")} (${formatNumber(cubicYardsToCubicMeters(results.compost.cubicYards), 2)} ${t("results.m3")})`
                    : `${formatNumber(results.compost.cubicYards, 2)} ${t("results.yd3")}`
                }
              />
              <CalculatorResultRow
                label={t("results.topsoil")}
                value={
                  unitSystem === "metric"
                    ? `${formatNumber(results.topsoil.cubicYards, 2)} ${t("results.yd3")} (${formatNumber(cubicYardsToCubicMeters(results.topsoil.cubicYards), 2)} ${t("results.m3")})`
                    : `${formatNumber(results.topsoil.cubicYards, 2)} ${t("results.yd3")}`
                }
              />
              <CalculatorResultRow
                label={t("results.sand")}
                value={
                  unitSystem === "metric"
                    ? `${formatNumber(results.sand.cubicYards, 2)} ${t("results.yd3")} (${formatNumber(cubicYardsToCubicMeters(results.sand.cubicYards), 2)} ${t("results.m3")})`
                    : `${formatNumber(results.sand.cubicYards, 2)} ${t("results.yd3")}`
                }
              />
              {typeof results.compost.cost === "number" ? (
                <CalculatorResultRow label={t("results.compostCost")} value={formatCurrencyUSD(results.compost.cost)} />
              ) : null}
              {typeof results.topsoil.cost === "number" ? (
                <CalculatorResultRow label={t("results.topsoilCost")} value={formatCurrencyUSD(results.topsoil.cost)} />
              ) : null}
              {typeof results.sand.cost === "number" ? (
                <CalculatorResultRow label={t("results.sandCost")} value={formatCurrencyUSD(results.sand.cost)} />
              ) : null}
            </CalculatorResultList>
          </div>

          {typeof results.totalCost === "number" ? (
            <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-zinc-700 dark:text-zinc-300">{t("results.totalCost")}</div>
              <div className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatCurrencyUSD(results.totalCost)}
              </div>
            </div>
          ) : null}
        </div>
      </CalculatorCard>
    </div>
  );
}
