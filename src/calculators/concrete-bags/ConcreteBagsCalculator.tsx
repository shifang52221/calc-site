"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateConcreteBags } from "./calc";
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
  cubicYardsToCubicMeters,
  inToCm,
  m2ToSqFt,
  roundForInput,
  sqFtToM2,
} from "@/lib/units";

const L_PER_FT3 = 28.316846592;
const FT3_PER_L = 1 / L_PER_FT3;

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function cuFtToLiters(cuFt: number) {
  return Math.max(0, cuFt) * L_PER_FT3;
}

function litersToCuFt(liters: number) {
  return Math.max(0, liters) * FT3_PER_L;
}

type BagPresetId = "80lb" | "60lb" | "50lb" | "40lb" | "custom";

const BAG_YIELD_CUFT: Record<Exclude<BagPresetId, "custom">, number> = {
  "80lb": 0.6,
  "60lb": 0.45,
  "50lb": 0.375,
  "40lb": 0.3,
};

export function ConcreteBagsCalculator() {
  const t = useTranslations("concreteBags");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "120";
  const defaultThickness = "4";
  const defaultWaste = "10";
  const defaultBagPreset: BagPresetId = "80lb";
  const defaultBagCustom = "";
  const defaultPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [thickness, setThickness] = useQueryParamState("thickness", defaultThickness);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [bagPresetRaw, setBagPresetRaw] = useQueryParamState("bp", defaultBagPreset);
  const bagPreset: BagPresetId =
    bagPresetRaw === "80lb" ||
    bagPresetRaw === "60lb" ||
    bagPresetRaw === "50lb" ||
    bagPresetRaw === "40lb" ||
    bagPresetRaw === "custom"
      ? bagPresetRaw
      : defaultBagPreset;
  const setBagPreset = (next: BagPresetId) => setBagPresetRaw(next);

  const [bagCustom, setBagCustom] = useQueryParamState("yield", defaultBagCustom);
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const bagYieldCuFt = useMemo(() => {
    if (bagPreset !== "custom") return BAG_YIELD_CUFT[bagPreset];
    const raw = parseNumber(bagCustom);
    return unitSystem === "metric" ? litersToCuFt(raw) : raw;
  }, [bagCustom, bagPreset, unitSystem]);

  const bagYieldDisplay = useMemo(() => {
    if (bagPreset === "custom") return bagCustom;
    const yieldCuFt = BAG_YIELD_CUFT[bagPreset];
    return unitSystem === "metric"
      ? roundForInput(cuFtToLiters(yieldCuFt), 0)
      : roundForInput(yieldCuFt, 3);
  }, [bagCustom, bagPreset, unitSystem]);

  const { cubicYards, cubicFeet, bags, cost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const thicknessInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(thickness)) : parseNumber(thickness);

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);

    return calculateConcreteBags({
      areaSqFt: areaSqFtValue,
      thicknessIn: thicknessInValue,
      wastePercent: parseNumber(waste),
      bagYieldCubicFeet: bagYieldCuFt,
      pricePerBag: hasPrice ? rawPrice : undefined,
    });
  }, [area, bagYieldCuFt, price, thickness, unitSystem, waste]);

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
                if (bagPreset === "custom" && bagCustom.trim()) {
                  setBagCustom(roundForInput(cuFtToLiters(parseNumber(bagCustom)), 0));
                }
                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setThickness(roundForInput(cmToIn(parseNumber(thickness)), 2));
              if (bagPreset === "custom" && bagCustom.trim()) {
                setBagCustom(roundForInput(litersToCuFt(parseNumber(bagCustom)), 3));
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
                ? t("inputs.thicknessCm")
                : t("inputs.thicknessIn")
            }
            value={thickness}
            onChange={setThickness}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.bagPreset")}</span>
            <select
              value={bagPreset}
              onChange={(e) => {
                const next = e.target.value as BagPresetId;
                setBagPreset(next);
                if (next !== "custom") setBagCustom("");
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="80lb">{t("bagPresets.lb80")}</option>
              <option value="60lb">{t("bagPresets.lb60")}</option>
              <option value="50lb">{t("bagPresets.lb50")}</option>
              <option value="40lb">{t("bagPresets.lb40")}</option>
              <option value="custom">{t("bagPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.bagYieldLiters")
                : t("inputs.bagYieldCubicFeet")
            }
            value={bagYieldDisplay}
            onChange={(next) => {
              setBagPreset("custom");
              setBagCustom(next);
            }}
            placeholder={bagPreset === "custom" ? (unitSystem === "metric" ? "e.g. 17" : "e.g. 0.6") : undefined}
          />

          <CalculatorField
            label={t("inputs.pricePerBag")}
            value={price}
            onChange={setPrice}
            placeholder="e.g. 6.99"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setThickness(defaultThickness);
                setWaste(defaultWaste);
                setBagPreset(defaultBagPreset);
                setBagCustom(defaultBagCustom);
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
            label={unitSystem === "metric" ? t("results.cubicMeters") : t("results.cubicYards")}
            value={
              unitSystem === "metric"
                ? formatNumber(cubicYardsToCubicMeters(cubicYards), 2)
                : formatNumber(cubicYards, 2)
            }
          />
          <CalculatorResultRow label={t("results.cubicFeet")} value={formatNumber(cubicFeet, 1)} />
          <CalculatorResultRow label={t("results.bags")} value={formatNumber(bags, 0)} />
          {typeof cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(cost)} />
          ) : null}
        </CalculatorResultList>

        <div className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
          {t("results.yieldNote")}
        </div>
      </CalculatorCard>
    </div>
  );
}

