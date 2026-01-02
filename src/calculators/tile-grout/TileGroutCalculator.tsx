"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateTileGrout } from "./calc";
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
  m2ToSqFt,
  roundForInput,
  sqFtToM2,
} from "@/lib/units";

const MM_PER_IN = 25.4;
const IN_PER_MM = 1 / MM_PER_IN;

function mmToIn(mm: number) {
  return mm * IN_PER_MM;
}

function inToMm(inches: number) {
  return inches * MM_PER_IN;
}

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

type DensityPresetId = "sanded" | "unsanded" | "epoxy" | "custom";
type BagPresetId = "25lb" | "10lb" | "5kg" | "custom";

const DENSITY_PRESETS_KG_PER_M3: Record<
  Exclude<DensityPresetId, "custom">,
  number
> = {
  sanded: 1600,
  unsanded: 1500,
  epoxy: 1700,
};

const BAG_PRESETS_KG: Record<Exclude<BagPresetId, "custom">, number> = {
  "25lb": 25 * KG_PER_LB,
  "10lb": 10 * KG_PER_LB,
  "5kg": 5,
};

export function TileGroutCalculator() {
  const t = useTranslations("tileGrout");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "10";
  const defaultTileL = "12";
  const defaultTileW = "12";
  const defaultJointW = "0.125";
  const defaultJointD = "0.375";
  const defaultWaste = "10";
  const defaultDensityPreset: DensityPresetId = "sanded";
  const defaultDensityCustom = "";
  const defaultBagPreset: BagPresetId = "25lb";
  const defaultBagCustom = "";
  const defaultPrice = "";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [tileL, setTileL] = useQueryParamState("tl", defaultTileL);
  const [tileW, setTileW] = useQueryParamState("tw", defaultTileW);
  const [jointW, setJointW] = useQueryParamState("jw", defaultJointW);
  const [jointD, setJointD] = useQueryParamState("jd", defaultJointD);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);

  const [densityPresetRaw, setDensityPresetRaw] = useQueryParamState(
    "dp",
    defaultDensityPreset,
  );
  const densityPreset: DensityPresetId =
    densityPresetRaw === "sanded" ||
    densityPresetRaw === "unsanded" ||
    densityPresetRaw === "epoxy" ||
    densityPresetRaw === "custom"
      ? densityPresetRaw
      : defaultDensityPreset;
  const setDensityPreset = (next: DensityPresetId) => setDensityPresetRaw(next);

  const [densityCustom, setDensityCustom] = useQueryParamState(
    "density",
    defaultDensityCustom,
  );

  const [bagPresetRaw, setBagPresetRaw] = useQueryParamState(
    "bp",
    defaultBagPreset,
  );
  const bagPreset: BagPresetId =
    bagPresetRaw === "25lb" ||
    bagPresetRaw === "10lb" ||
    bagPresetRaw === "5kg" ||
    bagPresetRaw === "custom"
      ? bagPresetRaw
      : defaultBagPreset;
  const setBagPreset = (next: BagPresetId) => setBagPresetRaw(next);

  const [bagCustom, setBagCustom] = useQueryParamState("bag", defaultBagCustom);
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const densityKgPerM3 = useMemo(() => {
    if (densityPreset !== "custom") return DENSITY_PRESETS_KG_PER_M3[densityPreset];
    return parseNumber(densityCustom);
  }, [densityCustom, densityPreset]);

  const bagKg = useMemo(() => {
    if (bagPreset !== "custom") return BAG_PRESETS_KG[bagPreset];
    return parseNumber(bagCustom);
  }, [bagCustom, bagPreset]);

  const results = useMemo(() => {
    const areaM2 =
      unitSystem === "metric" ? parseNumber(area) : sqFtToM2(parseNumber(area));

    const lMm =
      unitSystem === "metric" ? parseNumber(tileL) : inToMm(parseNumber(tileL));
    const wMm =
      unitSystem === "metric" ? parseNumber(tileW) : inToMm(parseNumber(tileW));
    const jwMm =
      unitSystem === "metric" ? parseNumber(jointW) : inToMm(parseNumber(jointW));
    const jdMm =
      unitSystem === "metric" ? parseNumber(jointD) : inToMm(parseNumber(jointD));

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);

    return calculateTileGrout({
      areaM2,
      tileLengthMm: lMm,
      tileWidthMm: wMm,
      jointWidthMm: jwMm,
      jointDepthMm: jdMm,
      wastePercent: parseNumber(waste),
      densityKgPerM3,
      bagKg,
      pricePerBag: hasPrice ? rawPrice : undefined,
    });
  }, [
    area,
    bagKg,
    densityKgPerM3,
    jointD,
    jointW,
    price,
    tileL,
    tileW,
    unitSystem,
    waste,
  ]);

  const groutKg = results.groutKg;
  const groutLb = groutKg / KG_PER_LB;
  const groutLiters = results.groutVolumeM3 * 1000;

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
                setTileL(roundForInput(inToMm(parseNumber(tileL)), 0));
                setTileW(roundForInput(inToMm(parseNumber(tileW)), 0));
                setJointW(roundForInput(inToMm(parseNumber(jointW)), 1));
                setJointD(roundForInput(inToMm(parseNumber(jointD)), 1));
                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setTileL(roundForInput(mmToIn(parseNumber(tileL)), 2));
              setTileW(roundForInput(mmToIn(parseNumber(tileW)), 2));
              setJointW(roundForInput(mmToIn(parseNumber(jointW)), 3));
              setJointD(roundForInput(mmToIn(parseNumber(jointD)), 3));
              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={area}
            onChange={setArea}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.tileLengthMm") : t("inputs.tileLengthIn")}
              value={tileL}
              onChange={setTileL}
            />
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.tileWidthMm") : t("inputs.tileWidthIn")}
              value={tileW}
              onChange={setTileW}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.jointWidthMm") : t("inputs.jointWidthIn")}
              value={jointW}
              onChange={setJointW}
            />
            <CalculatorField
              label={unitSystem === "metric" ? t("inputs.jointDepthMm") : t("inputs.jointDepthIn")}
              value={jointD}
              onChange={setJointD}
            />
          </div>

          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />

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
              <option value="sanded">{t("densityPresets.sanded")}</option>
              <option value="unsanded">{t("densityPresets.unsanded")}</option>
              <option value="epoxy">{t("densityPresets.epoxy")}</option>
              <option value="custom">{t("densityPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={t("inputs.densityKgPerM3")}
            value={densityPreset === "custom" ? densityCustom : roundForInput(densityKgPerM3, 0)}
            onChange={(next) => {
              setDensityPreset("custom");
              setDensityCustom(next);
            }}
            placeholder={densityPreset === "custom" ? "e.g. 1600" : undefined}
          />

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
              <option value="25lb">{t("bagPresets.lb25")}</option>
              <option value="10lb">{t("bagPresets.lb10")}</option>
              <option value="5kg">{t("bagPresets.kg5")}</option>
              <option value="custom">{t("bagPresets.custom")}</option>
            </select>
          </label>

          <CalculatorField
            label={t("inputs.bagKg")}
            value={bagPreset === "custom" ? bagCustom : roundForInput(bagKg, 2)}
            onChange={(next) => {
              setBagPreset("custom");
              setBagCustom(next);
            }}
            placeholder={bagPreset === "custom" ? "e.g. 11.34" : undefined}
          />

          <CalculatorField
            label={t("inputs.pricePerBag")}
            value={price}
            onChange={setPrice}
            placeholder="e.g. 18.99"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setTileL(defaultTileL);
                setTileW(defaultTileW);
                setJointW(defaultJointW);
                setJointD(defaultJointD);
                setWaste(defaultWaste);
                setDensityPresetRaw(defaultDensityPreset);
                setDensityCustom(defaultDensityCustom);
                setBagPresetRaw(defaultBagPreset);
                setBagCustom(defaultBagCustom);
                setPrice(defaultPrice);
                setUnitSystemRaw("us");
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
          <CalculatorResultRow label={t("results.groutKg")} value={formatNumber(groutKg, 2)} />
          <CalculatorResultRow label={t("results.groutLb")} value={formatNumber(groutLb, 1)} />
          <CalculatorResultRow label={t("results.groutLiters")} value={formatNumber(groutLiters, 1)} />
          <CalculatorResultRow label={t("results.bags")} value={formatNumber(results.bags, 0)} />
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
