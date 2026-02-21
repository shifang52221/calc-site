"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateDeckBoards } from "./calc";
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

export function DeckCalculator() {
  const t = useTranslations("deck");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultDeckLengthFt = "12";
  const defaultDeckWidthFt = "10";
  const defaultBoardWidthIn = "5.5";
  const defaultGapIn = "0.125";
  const defaultBoardLengthFt = "12";
  const defaultWaste = "10";
  const defaultPricePerBoard = "";

  const [deckLengthFt, setDeckLengthFt] = useQueryParamState(
    "len",
    defaultDeckLengthFt,
  );
  const [deckWidthFt, setDeckWidthFt] = useQueryParamState(
    "wid",
    defaultDeckWidthFt,
  );
  const [boardWidthIn, setBoardWidthIn] = useQueryParamState(
    "bw",
    defaultBoardWidthIn,
  );
  const [gapIn, setGapIn] = useQueryParamState("gap", defaultGapIn);
  const [boardLengthFt, setBoardLengthFt] = useQueryParamState(
    "blen",
    defaultBoardLengthFt,
  );
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [pricePerBoard, setPricePerBoard] = useQueryParamState(
    "price",
    defaultPricePerBoard,
  );

  const { baseBoards, wasteBoards, boards, cost } = useMemo(() => {
    const deckLengthFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(deckLengthFt))
        : parseNumber(deckLengthFt);
    const deckWidthFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(deckWidthFt))
        : parseNumber(deckWidthFt);
    const boardWidthInValue =
      unitSystem === "metric"
        ? cmToIn(parseNumber(boardWidthIn))
        : parseNumber(boardWidthIn);
    const gapInValue =
      unitSystem === "metric" ? cmToIn(parseNumber(gapIn)) : parseNumber(gapIn);
    const boardLengthFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(boardLengthFt))
        : parseNumber(boardLengthFt);

    return calculateDeckBoards({
      deckLengthFt: deckLengthFtValue,
      deckWidthFt: deckWidthFtValue,
      boardWidthIn: boardWidthInValue,
      gapIn: gapInValue,
      boardLengthFt: boardLengthFtValue,
      wastePercent: parseNumber(waste),
      pricePerBoard: pricePerBoard.trim()
        ? parseNumber(pricePerBoard)
        : undefined,
    });
  }, [
    deckLengthFt,
    deckWidthFt,
    boardWidthIn,
    gapIn,
    boardLengthFt,
    waste,
    pricePerBoard,
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
                setDeckLengthFt(roundForInput(ftToM(parseNumber(deckLengthFt)), 2));
                setDeckWidthFt(roundForInput(ftToM(parseNumber(deckWidthFt)), 2));
                setBoardWidthIn(roundForInput(inToCm(parseNumber(boardWidthIn)), 1));
                setGapIn(roundForInput(inToCm(parseNumber(gapIn)), 2));
                setBoardLengthFt(
                  roundForInput(ftToM(parseNumber(boardLengthFt)), 2),
                );
                setUnitSystem("metric");
                return;
              }

              setDeckLengthFt(roundForInput(mToFt(parseNumber(deckLengthFt)), 0));
              setDeckWidthFt(roundForInput(mToFt(parseNumber(deckWidthFt)), 0));
              setBoardWidthIn(roundForInput(cmToIn(parseNumber(boardWidthIn)), 2));
              setGapIn(roundForInput(cmToIn(parseNumber(gapIn)), 3));
              setBoardLengthFt(roundForInput(mToFt(parseNumber(boardLengthFt)), 0));
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.deckLengthM")
                : t("inputs.deckLengthFt")
            }
            value={deckLengthFt}
            onChange={setDeckLengthFt}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.deckWidthM")
                : t("inputs.deckWidthFt")
            }
            value={deckWidthFt}
            onChange={setDeckWidthFt}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.boardWidthCm")
                : t("inputs.boardWidthIn")
            }
            value={boardWidthIn}
            onChange={setBoardWidthIn}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.gapCm") : t("inputs.gapIn")}
            value={gapIn}
            onChange={setGapIn}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.boardLengthM")
                : t("inputs.boardLengthFt")
            }
            value={boardLengthFt}
            onChange={setBoardLengthFt}
          />
          <CalculatorField
            label={t("inputs.waste")}
            value={waste}
            onChange={setWaste}
          />
          <CalculatorField
            label={t("inputs.pricePerBoard")}
            value={pricePerBoard}
            onChange={setPricePerBoard}
            placeholder="e.g. 8.5"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setDeckLengthFt(defaultDeckLengthFt);
                setDeckWidthFt(defaultDeckWidthFt);
                setBoardWidthIn(defaultBoardWidthIn);
                setGapIn(defaultGapIn);
                setBoardLengthFt(defaultBoardLengthFt);
                setWaste(defaultWaste);
                setPricePerBoard(defaultPricePerBoard);
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
            label={t("results.baseBoards")}
            value={formatNumber(baseBoards, 0)}
          />
          <CalculatorResultRow
            label={t("results.wasteBoards")}
            value={formatNumber(wasteBoards, 0)}
          />
          <CalculatorResultRow
            label={t("results.boards")}
            value={formatNumber(boards, 0)}
          />
          {typeof cost === "number" ? (
            <CalculatorResultRow
              label={t("results.cost")}
              value={formatCurrencyUSD(cost)}
            />
          ) : null}
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}
