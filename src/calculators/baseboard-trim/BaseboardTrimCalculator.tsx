"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateBaseboardTrim } from "./calc";
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

export function BaseboardTrimCalculator() {
  const t = useTranslations("baseboardTrim");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultWallLength = "120";
  const defaultDoors = "3";
  const defaultDoorWidth = "32";
  const defaultWaste = "10";
  const defaultPieceLength = "8";
  const defaultPriceLinear = "";
  const defaultPricePiece = "";

  const [wallLength, setWallLength] = useQueryParamState("len", defaultWallLength);
  const [doors, setDoors] = useQueryParamState("doors", defaultDoors);
  const [doorWidth, setDoorWidth] = useQueryParamState("dw", defaultDoorWidth);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [pieceLength, setPieceLength] = useQueryParamState("piece", defaultPieceLength);
  const [priceLinear, setPriceLinear] = useQueryParamState("pl", defaultPriceLinear);
  const [pricePiece, setPricePiece] = useQueryParamState("pp", defaultPricePiece);

  const { linearFeet, linearFeetBeforeWaste, pieces, cost } = useMemo(() => {
    const wallLengthFt =
      unitSystem === "metric" ? mToFt(parseNumber(wallLength)) : parseNumber(wallLength);
    const doorWidthIn =
      unitSystem === "metric" ? cmToIn(parseNumber(doorWidth)) : parseNumber(doorWidth);
    const pieceLengthFt =
      unitSystem === "metric" ? mToFt(parseNumber(pieceLength)) : parseNumber(pieceLength);

    const hasPriceLinear = priceLinear.trim().length > 0;
    const hasPricePiece = pricePiece.trim().length > 0;

    return calculateBaseboardTrim({
      wallLengthFt,
      doorCount: parseNumber(doors),
      doorWidthIn,
      wastePercent: parseNumber(waste),
      pieceLengthFt,
      pricePerLinearFt:
        hasPriceLinear && Number.isFinite(parseNumber(priceLinear))
          ? parseNumber(priceLinear)
          : undefined,
      pricePerPiece:
        hasPricePiece && Number.isFinite(parseNumber(pricePiece))
          ? parseNumber(pricePiece)
          : undefined,
    });
  }, [doorWidth, doors, pieceLength, priceLinear, pricePiece, unitSystem, wallLength, waste]);

  const linearMeters = linearFeet * 0.3048;
  const linearMetersBeforeWaste = linearFeetBeforeWaste * 0.3048;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setWallLength(roundForInput(ftToM(parseNumber(wallLength)), 2));
                setDoorWidth(roundForInput(inToCm(parseNumber(doorWidth)), 0));
                setPieceLength(roundForInput(ftToM(parseNumber(pieceLength)), 2));
                setUnitSystem("metric");
                return;
              }

              setWallLength(roundForInput(mToFt(parseNumber(wallLength)), 2));
              setDoorWidth(roundForInput(cmToIn(parseNumber(doorWidth)), 2));
              setPieceLength(roundForInput(mToFt(parseNumber(pieceLength)), 2));
              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.wallLengthM") : t("inputs.wallLengthFt")}
            value={wallLength}
            onChange={setWallLength}
          />
          <CalculatorField label={t("inputs.doors")} value={doors} onChange={setDoors} />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.doorWidthCm") : t("inputs.doorWidthIn")}
            value={doorWidth}
            onChange={setDoorWidth}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.pieceLengthM") : t("inputs.pieceLengthFt")}
            value={pieceLength}
            onChange={setPieceLength}
          />

          <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {t("inputs.pricesTitle")}
            </div>
            <CalculatorField
              label={t("inputs.pricePerLinearFt")}
              value={priceLinear}
              onChange={setPriceLinear}
              placeholder="e.g. 1.25"
            />
            <CalculatorField
              label={t("inputs.pricePerPiece")}
              value={pricePiece}
              onChange={setPricePiece}
              placeholder="e.g. 9.99"
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
                setWallLength(defaultWallLength);
                setDoors(defaultDoors);
                setDoorWidth(defaultDoorWidth);
                setWaste(defaultWaste);
                setPieceLength(defaultPieceLength);
                setPriceLinear(defaultPriceLinear);
                setPricePiece(defaultPricePiece);
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
            label={unitSystem === "metric" ? t("results.meters") : t("results.linearFeet")}
            value={
              unitSystem === "metric"
                ? formatNumber(linearMeters, 2)
                : formatNumber(linearFeet, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.metersBeforeWaste")
                : t("results.linearFeetBeforeWaste")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(linearMetersBeforeWaste, 2)
                : formatNumber(linearFeetBeforeWaste, 2)
            }
          />
          <CalculatorResultRow label={t("results.pieces")} value={formatNumber(pieces, 0)} />
          {typeof cost === "number" ? (
            <CalculatorResultRow label={t("results.cost")} value={formatCurrencyUSD(cost)} />
          ) : null}
        </CalculatorResultList>

        <div className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
          {t("results.note")}
        </div>
      </CalculatorCard>
    </div>
  );
}

