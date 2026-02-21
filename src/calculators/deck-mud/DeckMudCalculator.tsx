"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateDeckMud } from "./calc";
import { formatNumber } from "@/lib/format";
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
  cubicYardsToCubicMeters,
  m2ToSqFt,
  roundForInput,
  sqFtToM2,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type RatioPreset = "fiveToOne" | "fourToOne" | "custom";

const RATIO_PRESETS: Record<
  Exclude<RatioPreset, "custom">,
  { sand: number; cement: number }
> = {
  fiveToOne: { sand: 5, cement: 1 },
  fourToOne: { sand: 4, cement: 1 },
};

export function DeckMudCalculator() {
  const t = useTranslations("deckMud");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "100";
  const defaultThickness = "1.5";
  const defaultWaste = "10";

  const defaultPreset: RatioPreset = "fiveToOne";
  const defaultSandParts = "5";
  const defaultCementParts = "1";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [thickness, setThickness] = useQueryParamState(
    "th",
    defaultThickness,
  );
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [presetRaw, setPresetRaw] = useQueryParamState("mix", defaultPreset);
  const preset: RatioPreset =
    presetRaw === "fiveToOne" || presetRaw === "fourToOne" || presetRaw === "custom"
      ? presetRaw
      : defaultPreset;
  const setPreset = (next: RatioPreset) => setPresetRaw(next);

  const [sandParts, setSandParts] = useQueryParamState("sand", defaultSandParts);
  const [cementParts, setCementParts] = useQueryParamState(
    "cem",
    defaultCementParts,
  );

  const results = useMemo(() => {
    const areaSqFt =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const thicknessIn =
      unitSystem === "metric" ? cmToIn(parseNumber(thickness)) : parseNumber(thickness);

    return calculateDeckMud({
      areaSqFt,
      thicknessIn,
      wastePercent: parseNumber(waste),
      sandParts: parseNumber(sandParts),
      cementParts: parseNumber(cementParts),
    });
  }, [area, cementParts, sandParts, thickness, unitSystem, waste]);

  const baseCubicMeters = cubicYardsToCubicMeters(results.baseCubicFeet / 27);
  const wasteCubicMeters = cubicYardsToCubicMeters(results.wasteCubicFeet / 27);
  const totalCubicMeters = cubicYardsToCubicMeters(results.totalCubicYards);
  const sandCubicMeters = cubicYardsToCubicMeters(results.sandCubicFeet / 27);
  const cementCubicMeters = cubicYardsToCubicMeters(results.cementCubicFeet / 27);

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
                setThickness(roundForInput(parseNumber(thickness) * 2.54, 1));
                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setThickness(roundForInput(parseNumber(thickness) / 2.54, 2));
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
                ? t("inputs.thicknessCm")
                : t("inputs.thicknessIn")
            }
            value={thickness}
            onChange={setThickness}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.mix")}</span>
            <select
              value={preset}
              onChange={(e) => {
                const next = e.target.value as RatioPreset;
                setPreset(next);
                if (next === "custom") return;
                const values = RATIO_PRESETS[next];
                setSandParts(String(values.sand));
                setCementParts(String(values.cement));
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="fiveToOne">{t("mixPresets.fiveToOne")}</option>
              <option value="fourToOne">{t("mixPresets.fourToOne")}</option>
              <option value="custom">{t("mixPresets.custom")}</option>
            </select>
          </label>

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.ratioTitle")}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <CalculatorField
                label={t("inputs.sandParts")}
                value={sandParts}
                onChange={(next) => {
                  setPreset("custom");
                  setSandParts(next);
                }}
              />
              <CalculatorField
                label={t("inputs.cementParts")}
                value={cementParts}
                onChange={(next) => {
                  setPreset("custom");
                  setCementParts(next);
                }}
              />
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              {t("inputs.ratioHint")}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setThickness(defaultThickness);
                setWaste(defaultWaste);
                setPreset(defaultPreset);
                setSandParts(defaultSandParts);
                setCementParts(defaultCementParts);
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
            label={unitSystem === "metric" ? t("results.baseTotalM3") : t("results.baseTotalFt3")}
            value={
              unitSystem === "metric"
                ? formatNumber(baseCubicMeters, 3)
                : formatNumber(results.baseCubicFeet, 2)
            }
          />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.wasteTotalM3") : t("results.wasteTotalFt3")}
            value={
              unitSystem === "metric"
                ? formatNumber(wasteCubicMeters, 3)
                : formatNumber(results.wasteCubicFeet, 2)
            }
          />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.totalM3") : t("results.totalFt3")}
            value={
              unitSystem === "metric"
                ? formatNumber(totalCubicMeters, 3)
                : formatNumber(results.totalCubicFeet, 2)
            }
          />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.sandM3") : t("results.sandFt3")}
            value={
              unitSystem === "metric"
                ? formatNumber(sandCubicMeters, 3)
                : formatNumber(results.sandCubicFeet, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.cementM3")
                : t("results.cementFt3")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(cementCubicMeters, 3)
                : formatNumber(results.cementCubicFeet, 2)
            }
          />
          <CalculatorResultRow
            label={t("results.cementBags")}
            value={formatNumber(results.cementBags94lb, 0)}
          />
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
