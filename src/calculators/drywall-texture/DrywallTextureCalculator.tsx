"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculateDrywallTexture } from "./calc";
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
import { m2ToSqFt, roundForInput, sqFtToM2 } from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function DrywallTextureCalculator() {
  const t = useTranslations("drywallTexture");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultArea = "800";
  const defaultCoats = "1";
  const defaultWaste = "10";
  const defaultCoverage = "400";

  const [area, setArea] = useQueryParamState("area", defaultArea);
  const [coats, setCoats] = useQueryParamState("coats", defaultCoats);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [coverage, setCoverage] = useQueryParamState("cov", defaultCoverage);

  const results = useMemo(() => {
    const areaSqFt =
      unitSystem === "metric" ? m2ToSqFt(parseNumber(area)) : parseNumber(area);
    const coverageSqFtPerBag =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(coverage))
        : parseNumber(coverage);

    return calculateDrywallTexture({
      areaSqFt,
      coats: parseNumber(coats),
      wastePercent: parseNumber(waste),
      coverageSqFtPerBag,
    });
  }, [area, coats, coverage, unitSystem, waste]);

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
                setCoverage(roundForInput(sqFtToM2(parseNumber(coverage)), 2));
                setUnitSystem("metric");
                return;
              }

              setArea(roundForInput(m2ToSqFt(parseNumber(area)), 0));
              setCoverage(roundForInput(m2ToSqFt(parseNumber(coverage)), 0));
              setUnitSystem("us");
            }}
          />

          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={area}
            onChange={setArea}
          />
          <CalculatorField label={t("inputs.coats")} value={coats} onChange={setCoats} />
          <CalculatorField label={t("inputs.waste")} value={waste} onChange={setWaste} />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.coveragePerBagM2")
                : t("inputs.coveragePerBagSqFt")
            }
            value={coverage}
            onChange={setCoverage}
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setArea(defaultArea);
                setCoats(defaultCoats);
                setWaste(defaultWaste);
                setCoverage(defaultCoverage);
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
          <CalculatorResultRow label={t("results.bags")} value={results.bags} />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.neededM2")
                : t("results.neededSqFt")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(sqFtToM2(results.neededSqFt), 2)
                : formatNumber(results.neededSqFt, 0)
            }
          />
        </CalculatorResultList>
      </CalculatorCard>
    </div>
  );
}

