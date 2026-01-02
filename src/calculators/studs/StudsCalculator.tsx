"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateStuds } from "./calc";
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
import { cmToIn, ftToM, inToCm, mToFt, roundForInput } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type SpacingPreset = "16" | "24" | "custom";

export function StudsCalculator() {
  const t = useTranslations("studs");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultTotalLength = "40";
  const defaultWallCount = "1";
  const defaultWaste = "10";
  const defaultDoors = "0";
  const defaultWindows = "0";
  const defaultStudsPerOpening = "4";
  const defaultTopPlates = "2";
  const defaultBottomPlate = "yes";
  const defaultPricePerStud = "";
  const defaultPricePerPlateFt = "";

  const [totalLength, setTotalLength] = useQueryParamState("len", defaultTotalLength);
  const [wallCount, setWallCount] = useQueryParamState("walls", defaultWallCount);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [doors, setDoors] = useQueryParamState("doors", defaultDoors);
  const [windows, setWindows] = useQueryParamState("windows", defaultWindows);
  const [studsPerOpening, setStudsPerOpening] = useQueryParamState(
    "spo",
    defaultStudsPerOpening,
  );

  const [topPlates, setTopPlates] = useQueryParamState("tp", defaultTopPlates);
  const [bottomPlate, setBottomPlate] = useQueryParamState("bp", defaultBottomPlate);

  const [pricePerStud, setPricePerStud] = useQueryParamState("ps", defaultPricePerStud);
  const [pricePerPlateFt, setPricePerPlateFt] = useQueryParamState(
    "pp",
    defaultPricePerPlateFt,
  );

  const [spacingPresetRaw, setSpacingPresetRaw] = useQueryParamState("sp", "16");
  const spacingPreset: SpacingPreset =
    spacingPresetRaw === "16" || spacingPresetRaw === "24" || spacingPresetRaw === "custom"
      ? spacingPresetRaw
      : "16";
  const setSpacingPreset = (next: SpacingPreset) => setSpacingPresetRaw(next);

  const [spacingCustom, setSpacingCustom] = useQueryParamState("s", "");

  const studSpacingIn = useMemo(() => {
    if (spacingPreset !== "custom") return parseNumber(spacingPreset);
    const raw = parseNumber(spacingCustom);
    return unitSystem === "metric" ? cmToIn(raw) : raw;
  }, [spacingCustom, spacingPreset, unitSystem]);

  const spacingDisplayValue = useMemo(() => {
    if (spacingPreset === "custom") return spacingCustom;
    return unitSystem === "metric"
      ? roundForInput(inToCm(parseNumber(spacingPreset)), 0)
      : String(spacingPreset);
  }, [spacingCustom, spacingPreset, unitSystem]);

  const results = useMemo(() => {
    const totalWallLengthFt =
      unitSystem === "metric" ? mToFt(parseNumber(totalLength)) : parseNumber(totalLength);

    const spacingInValue = studSpacingIn;

    const platePricePerFt =
      pricePerPlateFt.trim().length > 0 && Number.isFinite(parseNumber(pricePerPlateFt))
        ? parseNumber(pricePerPlateFt)
        : undefined;
    const studPrice =
      pricePerStud.trim().length > 0 && Number.isFinite(parseNumber(pricePerStud))
        ? parseNumber(pricePerStud)
        : undefined;

    return calculateStuds({
      totalWallLengthFt,
      wallCount: parseNumber(wallCount),
      studSpacingIn: spacingInValue,
      wastePercent: parseNumber(waste),
      doorOpenings: parseNumber(doors),
      windowOpenings: parseNumber(windows),
      studsPerOpening: parseNumber(studsPerOpening),
      topPlateCount: parseNumber(topPlates),
      includeBottomPlate: bottomPlate === "yes",
      pricePerStud: studPrice,
      pricePerLinearFtPlate: platePricePerFt,
    });
  }, [
    bottomPlate,
    doors,
    pricePerPlateFt,
    pricePerStud,
    studSpacingIn,
    studsPerOpening,
    topPlates,
    totalLength,
    unitSystem,
    wallCount,
    waste,
    windows,
  ]);

  const platesMeters = results.platesLinearFeet * 0.3048;
  const platesMetersBeforeWaste = results.platesLinearFeetBeforeWaste * 0.3048;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setTotalLength(roundForInput(ftToM(parseNumber(totalLength)), 2));

                if (spacingPreset === "custom" && spacingCustom.trim()) {
                  setSpacingCustom(roundForInput(inToCm(parseNumber(spacingCustom)), 0));
                }

                setUnitSystem("metric");
                return;
              }

              setTotalLength(roundForInput(mToFt(parseNumber(totalLength)), 2));

              if (spacingPreset === "custom" && spacingCustom.trim()) {
                setSpacingCustom(roundForInput(cmToIn(parseNumber(spacingCustom)), 2));
              }

              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.totalWallLengthM")
                : t("inputs.totalWallLengthFt")
            }
            value={totalLength}
            onChange={setTotalLength}
          />
          <CalculatorField
            label={t("inputs.wallCount")}
            value={wallCount}
            onChange={setWallCount}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">
              {t("inputs.spacingPreset")}
            </span>
            <select
              value={spacingPreset}
              onChange={(e) => {
                const next = e.target.value as SpacingPreset;
                setSpacingPreset(next);
                if (next !== "custom") setSpacingCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="16">{t("spacingPresets.sixteen")}</option>
              <option value="24">{t("spacingPresets.twentyFour")}</option>
              <option value="custom">{t("spacingPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.spacingCm") : t("inputs.spacingIn")}
            value={spacingDisplayValue}
            onChange={(next) => {
              setSpacingPreset("custom");
              setSpacingCustom(next);
            }}
            placeholder={
              spacingPreset === "custom" ? (unitSystem === "metric" ? "e.g. 40" : "e.g. 16") : undefined
            }
          />

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.openingsTitle")}
            </div>
            <CalculatorField label={t("inputs.doors")} value={doors} onChange={setDoors} />
            <CalculatorField
              label={t("inputs.windows")}
              value={windows}
              onChange={setWindows}
            />
            <CalculatorField
              label={t("inputs.studsPerOpening")}
              value={studsPerOpening}
              onChange={setStudsPerOpening}
              placeholder="e.g. 4"
            />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              {t("inputs.openingsHint")}
            </div>
          </div>

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.platesTitle")}
            </div>
            <CalculatorField
              label={t("inputs.topPlates")}
              value={topPlates}
              onChange={setTopPlates}
            />
            <label className="grid gap-1 text-sm">
              <span className="text-zinc-700 dark:text-zinc-300">
                {t("inputs.bottomPlate")}
              </span>
              <select
                value={bottomPlate}
                onChange={(e) => setBottomPlate(e.target.value)}
                className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
              >
                <option value="yes">{t("yes")}</option>
                <option value="no">{t("no")}</option>
              </select>
            </label>
          </div>

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.pricesTitle")}
            </div>
            <CalculatorField
              label={t("inputs.pricePerStud")}
              value={pricePerStud}
              onChange={setPricePerStud}
              placeholder="e.g. 4.50"
            />
            <CalculatorField
              label={t("inputs.pricePerPlateFt")}
              value={pricePerPlateFt}
              onChange={setPricePerPlateFt}
              placeholder="e.g. 0.80"
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
                setTotalLength(defaultTotalLength);
                setWallCount(defaultWallCount);
                setWaste(defaultWaste);
                setDoors(defaultDoors);
                setWindows(defaultWindows);
                setStudsPerOpening(defaultStudsPerOpening);
                setTopPlates(defaultTopPlates);
                setBottomPlate(defaultBottomPlate);
                setPricePerStud(defaultPricePerStud);
                setPricePerPlateFt(defaultPricePerPlateFt);
                setSpacingPreset("16");
                setSpacingCustom("");
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
          <CalculatorResultRow label={t("results.studs")} value={formatNumber(results.studs, 0)} />
          <CalculatorResultRow
            label={t("results.studsBeforeWaste")}
            value={formatNumber(results.studsBeforeWaste, 0)}
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.platesMeters")
                : t("results.platesLinearFeet")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(platesMeters, 2)
                : formatNumber(results.platesLinearFeet, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.platesMetersBeforeWaste")
                : t("results.platesLinearFeetBeforeWaste")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(platesMetersBeforeWaste, 2)
                : formatNumber(results.platesLinearFeetBeforeWaste, 2)
            }
          />
          {typeof results.cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(results.cost)} />
          ) : null}
        </CalculatorResultList>

        <div className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
          {t("results.note")}
        </div>
      </CalculatorCard>
    </div>
  );
}

