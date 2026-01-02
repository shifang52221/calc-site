"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateWallpaperRolls } from "./calc";
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
  cmToIn,
  ftToM,
  inToCm,
  m2ToSqFt,
  mToFt,
  roundForInput,
  sqFtToM2,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type RollPresetId = "standard" | "extraWide" | "custom";

const PRESETS: Record<
  Exclude<RollPresetId, "custom">,
  { widthM: number; lengthM: number }
> = {
  standard: { widthM: 0.5334, lengthM: 10.0584 }, // 21 in x 33 ft (approx.)
  extraWide: { widthM: 0.6858, lengthM: 10.0584 }, // 27 in x 33 ft (approx.)
};

function rollCoverageM2(widthM: number, lengthM: number) {
  return Math.max(0, widthM) * Math.max(0, lengthM);
}

export function WallpaperRollsCalculator() {
  const t = useTranslations("wallpaperRolls");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "250";
  const defaultOpenings = "";
  const defaultWaste = "10";
  const defaultRollPreset: RollPresetId = "standard";
  const defaultRollWidth = "";
  const defaultRollLength = "";
  const defaultPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [openings, setOpenings] = useQueryParamState(
    "openings",
    defaultOpenings,
  );
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [rollPresetRaw, setRollPresetRaw] = useQueryParamState(
    "rp",
    defaultRollPreset,
  );
  const rollPreset: RollPresetId =
    rollPresetRaw === "standard" ||
    rollPresetRaw === "extraWide" ||
    rollPresetRaw === "custom"
      ? rollPresetRaw
      : defaultRollPreset;
  const setRollPreset = (next: RollPresetId) => setRollPresetRaw(next);

  const [rollWidth, setRollWidth] = useQueryParamState("rw", defaultRollWidth);
  const [rollLength, setRollLength] = useQueryParamState(
    "rl",
    defaultRollLength,
  );

  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const {
    results,
    rollWidthDisplay,
    rollLengthDisplay,
    coveragePerRollSqFt,
    coveragePerRollM2,
  } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const openingsSqFtValue =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(openings))
        : parseNumber(openings);

    let widthM: number;
    let lengthM: number;
    if (rollPreset !== "custom") {
      widthM = PRESETS[rollPreset].widthM;
      lengthM = PRESETS[rollPreset].lengthM;
    } else {
      const widthRaw = parseNumber(rollWidth);
      const lengthRaw = parseNumber(rollLength);
      widthM = unitSystem === "metric" ? widthRaw / 100 : widthRaw * 0.0254;
      lengthM = unitSystem === "metric" ? lengthRaw : ftToM(lengthRaw);
    }

    const coverageM2 = rollCoverageM2(widthM, lengthM);
    const coverageSqFt = m2ToSqFt(coverageM2);

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);

    const computed = calculateWallpaperRolls({
      areaSqFt: areaSqFtValue,
      openingsSqFt: openingsSqFtValue,
      wastePercent: parseNumber(waste),
      coverageSqFtPerRoll: coverageSqFt,
      pricePerRoll: hasPrice ? rawPrice : undefined,
    });

    const rollWidthDisplayValue =
      rollPreset !== "custom"
        ? unitSystem === "metric"
          ? roundForInput(PRESETS[rollPreset].widthM * 100, 1)
          : roundForInput(PRESETS[rollPreset].widthM / 0.0254, 1)
        : rollWidth;

    const rollLengthDisplayValue =
      rollPreset !== "custom"
        ? unitSystem === "metric"
          ? roundForInput(PRESETS[rollPreset].lengthM, 2)
          : roundForInput(mToFt(PRESETS[rollPreset].lengthM), 1)
        : rollLength;

    return {
      results: computed,
      rollWidthDisplay: rollWidthDisplayValue,
      rollLengthDisplay: rollLengthDisplayValue,
      coveragePerRollSqFt: coverageSqFt,
      coveragePerRollM2: coverageM2,
    };
  }, [area, openings, price, rollLength, rollPreset, rollWidth, unitSystem, waste]);

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
                if (openings.trim())
                  setOpenings(roundForInput(sqFtToM2(parseNumber(openings)), 2));

                if (rollPreset === "custom") {
                  if (rollWidth.trim())
                    setRollWidth(
                      roundForInput(inToCm(parseNumber(rollWidth)), 1),
                    );
                  if (rollLength.trim())
                    setRollLength(
                      roundForInput(ftToM(parseNumber(rollLength)), 2),
                    );
                }

                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              if (openings.trim())
                setOpenings(roundForInput(m2ToSqFt(parseNumber(openings)), 0));

              if (rollPreset === "custom") {
                if (rollWidth.trim())
                  setRollWidth(
                    roundForInput(cmToIn(parseNumber(rollWidth)), 1),
                  );
                if (rollLength.trim())
                  setRollLength(
                    roundForInput(mToFt(parseNumber(rollLength)), 1),
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
            label={
              unitSystem === "metric"
                ? t("inputs.openingsM2")
                : t("inputs.openingsSqFt")
            }
            value={openings}
            onChange={setOpenings}
            placeholder={t("inputs.openingsPlaceholder")}
          />

          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.rollPreset")}
            </span>
            <select
              value={rollPreset}
              onChange={(e) => {
                const next = e.target.value as RollPresetId;
                setRollPreset(next);
                if (next !== "custom") {
                  setRollWidth("");
                  setRollLength("");
                } else {
                  setRollWidth(rollWidthDisplay);
                  setRollLength(rollLengthDisplay);
                }
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="standard">{t("rollPresets.standard")}</option>
              <option value="extraWide">{t("rollPresets.extraWide")}</option>
              <option value="custom">{t("rollPresets.custom")}</option>
            </select>
          </label>

          {rollPreset === "custom" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <CalculatorField
                label={unitSystem === "metric" ? t("inputs.rollWidthCm") : t("inputs.rollWidthIn")}
                value={rollWidthDisplay}
                onChange={setRollWidth}
                placeholder={unitSystem === "metric" ? "e.g. 53" : "e.g. 21"}
              />
              <CalculatorField
                label={unitSystem === "metric" ? t("inputs.rollLengthM") : t("inputs.rollLengthFt")}
                value={rollLengthDisplay}
                onChange={setRollLength}
                placeholder={unitSystem === "metric" ? "e.g. 10" : "e.g. 33"}
              />
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1 text-sm">
                <span className="text-zinc-700 dark:text-zinc-300">
                  {unitSystem === "metric" ? t("inputs.rollWidthCm") : t("inputs.rollWidthIn")}
                </span>
                <input
                  readOnly
                  value={rollWidthDisplay}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-100"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-zinc-700 dark:text-zinc-300">
                  {unitSystem === "metric" ? t("inputs.rollLengthM") : t("inputs.rollLengthFt")}
                </span>
                <input
                  readOnly
                  value={rollLengthDisplay}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-100"
                />
              </label>
            </div>
          )}

          <CalculatorField
            label={t("inputs.pricePerRoll")}
            value={price}
            onChange={setPrice}
          />

          <CopyLinkButton />
        </div>
      </CalculatorCard>

      <CalculatorCard title={t("results.title")} subtitle={t("results.subtitle")}>
        <CalculatorResultList>
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.netAreaM2") : t("results.netAreaSqFt")}
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(results.netAreaSqFt), 2)
                : formatNumber(results.netAreaSqFt, 0)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.areaWithWasteM2")
                : t("results.areaWithWasteSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(results.areaWithWasteSqFt), 2)
                : formatNumber(results.areaWithWasteSqFt, 0)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.coveragePerRollM2")
                : t("results.coveragePerRollSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(coveragePerRollM2, 2)
                : formatNumber(coveragePerRollSqFt, 1)
            }
          />
          <CalculatorResultRow
            label={t("results.rolls")}
            value={formatNumber(results.rolls, 0)}
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.totalCoverageM2")
                : t("results.totalCoverageSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(results.totalCoverageSqFt), 2)
                : formatNumber(results.totalCoverageSqFt, 0)
            }
          />
          {typeof results.cost === "number" ? (
            <CalculatorResultRow
              label={t("results.cost")}
              value={formatCurrencyUSD(results.cost)}
            />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
