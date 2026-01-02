"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateDrywallMudTape } from "./calc";
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
import { ftToM, m2ToSqFt, mToFt, roundForInput, sqFtToM2 } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type SheetPresetId = "4x8" | "4x10" | "4x12" | "custom";

const SHEET_PRESETS_FT: Record<Exclude<SheetPresetId, "custom">, { w: number; l: number }> =
  {
    "4x8": { w: 4, l: 8 },
    "4x10": { w: 4, l: 10 },
    "4x12": { w: 4, l: 12 },
  };

export function DrywallMudTapeCalculator() {
  const t = useTranslations("drywallMudTape");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "1000";
  const defaultWaste = "10";
  const defaultSheetPreset: SheetPresetId = "4x8";
  const defaultSheetWidth = "";
  const defaultSheetLength = "";

  const defaultRollLength = "250";
  const defaultCoats = "3";
  const defaultJointWidth = "6";
  const defaultThickness = "0.03";
  const defaultFeatherFactor = "0.6";
  const defaultBucketGallons = "4.5";
  const defaultPricePerRoll = "";
  const defaultPricePerBucket = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [sheetPresetRaw, setSheetPresetRaw] = useQueryParamState("sp", defaultSheetPreset);
  const sheetPreset: SheetPresetId =
    sheetPresetRaw === "4x8" ||
    sheetPresetRaw === "4x10" ||
    sheetPresetRaw === "4x12" ||
    sheetPresetRaw === "custom"
      ? sheetPresetRaw
      : defaultSheetPreset;
  const setSheetPreset = (next: SheetPresetId) => setSheetPresetRaw(next);

  const [sheetWidth, setSheetWidth] = useQueryParamState("sw", defaultSheetWidth);
  const [sheetLength, setSheetLength] = useQueryParamState("sl", defaultSheetLength);

  const [rollLength, setRollLength] = useQueryParamState("roll", defaultRollLength);
  const [coats, setCoats] = useQueryParamState("coats", defaultCoats);
  const [jointWidth, setJointWidth] = useQueryParamState("jw", defaultJointWidth);
  const [thickness, setThickness] = useQueryParamState("th", defaultThickness);
  const [featherFactor, setFeatherFactor] = useQueryParamState("ff", defaultFeatherFactor);
  const [bucketGallons, setBucketGallons] = useQueryParamState("bg", defaultBucketGallons);
  const [pricePerRoll, setPricePerRoll] = useQueryParamState("pr", defaultPricePerRoll);
  const [pricePerBucket, setPricePerBucket] = useQueryParamState("pb", defaultPricePerBucket);

  const sheetSizeFt = useMemo(() => {
    if (sheetPreset !== "custom") return SHEET_PRESETS_FT[sheetPreset];
    const w = unitSystem === "metric" ? mToFt(parseNumber(sheetWidth)) : parseNumber(sheetWidth);
    const l = unitSystem === "metric" ? mToFt(parseNumber(sheetLength)) : parseNumber(sheetLength);
    return { w, l };
  }, [sheetLength, sheetPreset, sheetWidth, unitSystem]);

  const results = useMemo(() => {
    const areaSqFt = unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);

    const rollLengthFt =
      unitSystem === "metric" ? mToFt(parseNumber(rollLength)) : parseNumber(rollLength);

    const bucketGallonsValue = parseNumber(bucketGallons);

    const priceRoll = pricePerRoll.trim().length ? parseNumber(pricePerRoll) : undefined;
    const priceBucket = pricePerBucket.trim().length ? parseNumber(pricePerBucket) : undefined;

    return calculateDrywallMudTape({
      areaSqFt,
      sheetWidthFt: sheetSizeFt.w,
      sheetLengthFt: sheetSizeFt.l,
      wastePercent: parseNumber(waste),
      tapeRollLengthFt: rollLengthFt,
      coats: parseNumber(coats),
      jointWidthIn: parseNumber(jointWidth),
      avgThicknessIn: parseNumber(thickness),
      featherFactor: parseNumber(featherFactor),
      bucketGallons: bucketGallonsValue,
      pricePerRoll: priceRoll,
      pricePerBucket: priceBucket,
    });
  }, [
    area,
    bucketGallons,
    coats,
    featherFactor,
    jointWidth,
    pricePerBucket,
    pricePerRoll,
    rollLength,
    sheetSizeFt.l,
    sheetSizeFt.w,
    thickness,
    unitSystem,
    waste,
  ]);

  const seamMeters = results.seamFeet * 0.3048;
  const compoundLiters = results.compoundGallons * 3.785411784;

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
                setRollLength(roundForInput(ftToM(parseNumber(rollLength)), 1));

                if (sheetPreset === "custom") {
                  if (sheetWidth.trim()) setSheetWidth(roundForInput(ftToM(parseNumber(sheetWidth)), 2));
                  if (sheetLength.trim()) setSheetLength(roundForInput(ftToM(parseNumber(sheetLength)), 2));
                }

                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setRollLength(roundForInput(mToFt(parseNumber(rollLength)), 0));

              if (sheetPreset === "custom") {
                if (sheetWidth.trim()) setSheetWidth(roundForInput(mToFt(parseNumber(sheetWidth)), 2));
                if (sheetLength.trim()) setSheetLength(roundForInput(mToFt(parseNumber(sheetLength)), 2));
              }

              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={area}
            onChange={setArea}
          />

          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

          <label className="grid gap-1 text-sm">
            <span className="text-zinc-700 dark:text-zinc-300">{t("inputs.sheetPreset")}</span>
            <select
              value={sheetPreset}
              onChange={(e) => {
                const next = e.target.value as SheetPresetId;
                setSheetPreset(next);
                if (next !== "custom") {
                  setSheetWidth("");
                  setSheetLength("");
                }
              }}
              className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="4x8">{t("sheetPresets.s48")}</option>
              <option value="4x10">{t("sheetPresets.s410")}</option>
              <option value="4x12">{t("sheetPresets.s412")}</option>
              <option value="custom">{t("sheetPresets.custom")}</option>
            </select>
          </label>

          {sheetPreset === "custom" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <CalculatorField
                label={unitSystem === "metric" ? t("inputs.sheetWidthM") : t("inputs.sheetWidthFt")}
                value={sheetWidth}
                onChange={setSheetWidth}
                placeholder={unitSystem === "metric" ? "e.g. 1.2" : "e.g. 4"}
              />
              <CalculatorField
                label={unitSystem === "metric" ? t("inputs.sheetLengthM") : t("inputs.sheetLengthFt")}
                value={sheetLength}
                onChange={setSheetLength}
                placeholder={unitSystem === "metric" ? "e.g. 2.4" : "e.g. 8"}
              />
            </div>
          ) : null}

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.tapeTitle")}
            </div>
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.rollLengthM") : t("inputs.rollLengthFt")}
              value={rollLength}
              onChange={setRollLength}
            />
            <CalculatorField
              label={t("inputs.pricePerRoll")}
              value={pricePerRoll}
              onChange={setPricePerRoll}
              placeholder="e.g. 6.99"
            />
          </div>

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.compoundTitle")}
            </div>
            <CalculatorField label={t("inputs.coats")} value={coats} onChange={setCoats} />
            <CalculatorField
              label={t("inputs.jointWidthIn")}
              value={jointWidth}
              onChange={setJointWidth}
            />
            <CalculatorField
              label={t("inputs.avgThicknessIn")}
              value={thickness}
              onChange={setThickness}
            />
            <CalculatorField
              label={t("inputs.featherFactor")}
              value={featherFactor}
              onChange={setFeatherFactor}
            />
            <CalculatorField
              label={t("inputs.bucketGallons")}
              value={bucketGallons}
              onChange={setBucketGallons}
            />
            <CalculatorField
              label={t("inputs.pricePerBucket")}
              value={pricePerBucket}
              onChange={setPricePerBucket}
              placeholder="e.g. 19.99"
            />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              {t("inputs.compoundHint")}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setWaste(defaultWaste);
                setSheetPresetRaw(defaultSheetPreset);
                setSheetWidth(defaultSheetWidth);
                setSheetLength(defaultSheetLength);
                setRollLength(defaultRollLength);
                setCoats(defaultCoats);
                setJointWidth(defaultJointWidth);
                setThickness(defaultThickness);
                setFeatherFactor(defaultFeatherFactor);
                setBucketGallons(defaultBucketGallons);
                setPricePerRoll(defaultPricePerRoll);
                setPricePerBucket(defaultPricePerBucket);
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
            label={unitSystem === "metric" ? t("results.seamMeters") : t("results.seamFeet")}
            value={unitSystem === "metric" ? formatNumber(seamMeters, 0) : formatNumber(results.seamFeet, 0)}
          />
          <CalculatorResultRow label={t("results.tapeRolls")} value={formatNumber(results.tapeRolls, 0)} />
          <CalculatorResultRow
            label={unitSystem === "metric" ? t("results.compoundLiters") : t("results.compoundGallons")}
            value={unitSystem === "metric" ? formatNumber(compoundLiters, 1) : formatNumber(results.compoundGallons, 1)}
          />
          <CalculatorResultRow label={t("results.compoundBuckets")} value={formatNumber(results.compoundBuckets, 0)} />
          {typeof results.cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(results.cost)} />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}

