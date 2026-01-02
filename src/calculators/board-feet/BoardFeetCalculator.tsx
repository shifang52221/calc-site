"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateBoardFeet } from "./calc";
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
import { ftToM, inToCm, mToFt, roundForInput, cmToIn } from "@/lib/units";

const IN_PER_MM = 1 / 25.4;
const MM_PER_IN = 25.4;

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function mmToIn(mm: number) {
  return mm * IN_PER_MM;
}

function inToMm(inches: number) {
  return inches * MM_PER_IN;
}

export function BoardFeetCalculator() {
  const t = useTranslations("boardFeet");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultThickness = "1";
  const defaultWidth = "6";
  const defaultLength = "8";
  const defaultQuantity = "10";
  const defaultWaste = "10";
  const defaultPrice = "";

  const [thickness, setThickness] = useQueryParamState("t", defaultThickness);
  const [width, setWidth] = useQueryParamState("w", defaultWidth);
  const [length, setLength] = useQueryParamState("l", defaultLength);
  const [quantity, setQuantity] = useQueryParamState("qty", defaultQuantity);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const { boardFeet, cubicFeet, cost } = useMemo(() => {
    const thicknessInValue =
      unitSystem === "metric" ? mmToIn(parseNumber(thickness)) : parseNumber(thickness);
    const widthInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(width)) : parseNumber(width);
    const lengthFtValue =
      unitSystem === "metric" ? mToFt(parseNumber(length)) : parseNumber(length);

    const rawPrice = parseNumber(price);
    const hasPrice = price.trim().length > 0 && Number.isFinite(rawPrice);

    return calculateBoardFeet({
      thicknessIn: thicknessInValue,
      widthIn: widthInValue,
      lengthFt: lengthFtValue,
      quantity: parseNumber(quantity),
      wastePercent: parseNumber(waste),
      pricePerBoardFoot: hasPrice ? rawPrice : undefined,
    });
  }, [length, price, quantity, thickness, unitSystem, waste, width]);

  const cubicMeters = cubicFeet * 0.028316846592;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setThickness(roundForInput(inToMm(parseNumber(thickness)), 0));
                setWidth(roundForInput(inToCm(parseNumber(width)), 1));
                setLength(roundForInput(ftToM(parseNumber(length)), 2));
                setUnitSystem("metric");
                return;
              }

              setThickness(roundForInput(mmToIn(parseNumber(thickness)), 2));
              setWidth(roundForInput(cmToIn(parseNumber(width)), 2));
              setLength(roundForInput(mToFt(parseNumber(length)), 2));
              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.thicknessMm") : t("inputs.thicknessIn")}
            value={thickness}
            onChange={setThickness}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.widthCm") : t("inputs.widthIn")}
            value={width}
            onChange={setWidth}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.lengthM") : t("inputs.lengthFt")}
            value={length}
            onChange={setLength}
          />
          <CalculatorField label={t("inputs.quantity")} value={quantity} onChange={setQuantity} />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />
          <CalculatorField
            label={t("inputs.pricePerBoardFoot")}
            value={price}
            onChange={setPrice}
            placeholder="e.g. 3.25"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setThickness(defaultThickness);
                setWidth(defaultWidth);
                setLength(defaultLength);
                setQuantity(defaultQuantity);
                setWaste(defaultWaste);
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
          <CalculatorResultRow label={t("results.boardFeet")} value={formatNumber(boardFeet, 2)} />
          <CalculatorResultRow
            label={t("results.cubicFeet")}
            value={formatNumber(cubicFeet, 2)}
          />
          <CalculatorResultRow
            label={t("results.cubicMeters")}
            value={formatNumber(cubicMeters, 3)}
          />
          {typeof cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(cost)} />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}

