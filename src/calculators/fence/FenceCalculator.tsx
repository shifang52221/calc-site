"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateFence } from "./calc";
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
import { ftToM, mToFt, roundForInput } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function FenceCalculator() {
  const t = useTranslations("fence");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultFenceLengthFt = "100";
  const defaultPostSpacingFt = "8";
  const defaultPanelWidthFt = "8";
  const defaultWaste = "5";
  const defaultPricePerPanel = "";
  const defaultPricePerPost = "";

  const [fenceLengthFt, setFenceLengthFt] = useQueryParamState(
    "len",
    defaultFenceLengthFt,
  );
  const [postSpacingFt, setPostSpacingFt] = useQueryParamState(
    "spacing",
    defaultPostSpacingFt,
  );
  const [panelWidthFt, setPanelWidthFt] = useQueryParamState(
    "panel",
    defaultPanelWidthFt,
  );
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [pricePerPanel, setPricePerPanel] = useQueryParamState(
    "panelPrice",
    defaultPricePerPanel,
  );
  const [pricePerPost, setPricePerPost] = useQueryParamState(
    "postPrice",
    defaultPricePerPost,
  );

  const { basePanels, wastePanels, panels, basePosts, wastePosts, posts, cost } =
    useMemo(() => {
    const fenceLengthFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(fenceLengthFt))
        : parseNumber(fenceLengthFt);
    const postSpacingFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(postSpacingFt))
        : parseNumber(postSpacingFt);
    const panelWidthFtValue =
      unitSystem === "metric"
        ? mToFt(parseNumber(panelWidthFt))
        : parseNumber(panelWidthFt);

    return calculateFence({
      fenceLengthFt: fenceLengthFtValue,
      postSpacingFt: postSpacingFtValue,
      panelWidthFt: panelWidthFtValue,
      wastePercent: parseNumber(waste),
      pricePerPanel: pricePerPanel.trim()
        ? parseNumber(pricePerPanel)
        : undefined,
      pricePerPost: pricePerPost.trim()
        ? parseNumber(pricePerPost)
        : undefined,
    });
  }, [
    fenceLengthFt,
    panelWidthFt,
    postSpacingFt,
    pricePerPanel,
    pricePerPost,
    unitSystem,
    waste,
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
                setFenceLengthFt(roundForInput(ftToM(parseNumber(fenceLengthFt)), 2));
                setPostSpacingFt(roundForInput(ftToM(parseNumber(postSpacingFt)), 2));
                setPanelWidthFt(roundForInput(ftToM(parseNumber(panelWidthFt)), 2));
                setUnitSystem("metric");
                return;
              }

              setFenceLengthFt(roundForInput(mToFt(parseNumber(fenceLengthFt)), 0));
              setPostSpacingFt(roundForInput(mToFt(parseNumber(postSpacingFt)), 0));
              setPanelWidthFt(roundForInput(mToFt(parseNumber(panelWidthFt)), 0));
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.fenceLengthM")
                : t("inputs.fenceLengthFt")
            }
            value={fenceLengthFt}
            onChange={setFenceLengthFt}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.postSpacingM")
                : t("inputs.postSpacingFt")
            }
            value={postSpacingFt}
            onChange={setPostSpacingFt}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.panelWidthM")
                : t("inputs.panelWidthFt")
            }
            value={panelWidthFt}
            onChange={setPanelWidthFt}
          />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />
          <CalculatorField
            label={t("inputs.pricePerPanel")}
            value={pricePerPanel}
            onChange={setPricePerPanel}
            placeholder="e.g. 65"
          />
          <CalculatorField
            label={t("inputs.pricePerPost")}
            value={pricePerPost}
            onChange={setPricePerPost}
            placeholder="e.g. 22"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setFenceLengthFt(defaultFenceLengthFt);
                setPostSpacingFt(defaultPostSpacingFt);
                setPanelWidthFt(defaultPanelWidthFt);
                setWaste(defaultWaste);
                setPricePerPanel(defaultPricePerPanel);
                setPricePerPost(defaultPricePerPost);
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
            label={t("results.basePanels")}
            value={formatNumber(basePanels, 0)}
          />
          <CalculatorResultRow
            label={t("results.wastePanels")}
            value={formatNumber(wastePanels, 0)}
          />
          <CalculatorResultRow
            label={t("results.panels")}
            value={formatNumber(panels, 0)}
          />
          <CalculatorResultRow
            label={t("results.basePosts")}
            value={formatNumber(basePosts, 0)}
          />
          <CalculatorResultRow
            label={t("results.wastePosts")}
            value={formatNumber(wastePosts, 0)}
          />
          <CalculatorResultRow
            label={t("results.posts")}
            value={formatNumber(posts, 0)}
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
