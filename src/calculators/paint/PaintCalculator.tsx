"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { calculatePaint } from "./calc";
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
  coverageM2PerLToSqFtPerGal,
  coverageSqFtPerGalToM2PerL,
  gallonsToLiters,
  m2ToSqFt,
  roundForInput,
  sqFtToM2,
  GAL_PER_L,
  L_PER_GAL,
} from "@/lib/units";

function parseNumber(value: string) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function PaintCalculator() {
  const t = useTranslations("paint");
  const common = useTranslations("common");

  const [unitSystemRaw, setUnitSystemRaw] = useQueryParamState("u", "us");
  const unitSystem: UnitSystem =
    unitSystemRaw === "metric" || unitSystemRaw === "us" ? unitSystemRaw : "us";
  const setUnitSystem = (next: UnitSystem) => setUnitSystemRaw(next);

  const defaultAreaSqFt = "800";
  const defaultCoats = "2";
  const defaultCoverage = "350";
  const defaultWaste = "10";
  const defaultPrice = "";

  const [areaSqFt, setAreaSqFt] = useQueryParamState("area", defaultAreaSqFt);
  const [coats, setCoats] = useQueryParamState("coats", defaultCoats);
  const [coverage, setCoverage] = useQueryParamState("cov", defaultCoverage);
  const [waste, setWaste] = useQueryParamState("waste", defaultWaste);
  const [price, setPrice] = useQueryParamState("price", defaultPrice);

  const { baseGallons, wasteGallons, gallons, cost } = useMemo(() => {
    const areaSqFtValue =
      unitSystem === "metric"
        ? m2ToSqFt(parseNumber(areaSqFt))
        : parseNumber(areaSqFt);
    const coverageSqFtPerGallon =
      unitSystem === "metric"
        ? coverageM2PerLToSqFtPerGal(parseNumber(coverage))
        : parseNumber(coverage);
    const pricePerGallon =
      unitSystem === "metric"
        ? parseNumber(price) * L_PER_GAL
        : parseNumber(price);

    return calculatePaint({
      areaSqFt: areaSqFtValue,
      coats: parseNumber(coats),
      coverageSqFtPerGallon,
      wastePercent: parseNumber(waste),
      pricePerGallon: price.trim() ? pricePerGallon : undefined,
    });
  }, [areaSqFt, coats, coverage, price, unitSystem, waste]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <CalculatorCard title={t("title")} subtitle={t("subtitle")}>
        <div className="grid gap-4">
          <UnitSystemToggle
            value={unitSystem}
            onChange={(next) => {
              if (next === unitSystem) return;

              if (next === "metric") {
                setAreaSqFt(roundForInput(sqFtToM2(parseNumber(areaSqFt)), 2));
                setCoverage(
                  roundForInput(
                    coverageSqFtPerGalToM2PerL(parseNumber(coverage)),
                    2,
                  ),
                );
                setPrice(
                  price.trim()
                    ? roundForInput(parseNumber(price) * GAL_PER_L, 2)
                    : "",
                );
                setUnitSystem("metric");
                return;
              }

              setAreaSqFt(roundForInput(m2ToSqFt(parseNumber(areaSqFt)), 0));
              setCoverage(
                roundForInput(
                  coverageM2PerLToSqFtPerGal(parseNumber(coverage)),
                  0,
                ),
              );
              setPrice(
                price.trim()
                  ? roundForInput(parseNumber(price) * L_PER_GAL, 2)
                  : "",
              );
              setUnitSystem("us");
            }}
          />
          <CalculatorField
            label={unitSystem === "metric" ? t("inputs.areaM2") : t("inputs.areaSqFt")}
            value={areaSqFt}
            onChange={setAreaSqFt}
          />
          <CalculatorField
            label={t("inputs.coats")}
            value={coats}
            onChange={setCoats}
            inputMode="numeric"
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.coverageMetric")
                : t("inputs.coverage")
            }
            value={coverage}
            onChange={setCoverage}
          />
          <CalculatorField
            label={t("inputs.waste")}
            value={waste}
            onChange={setWaste}
          />
          <CalculatorField
            label={
              unitSystem === "metric"
                ? t("inputs.priceMetric")
                : t("inputs.price")
            }
            value={price}
            onChange={setPrice}
            placeholder="e.g. 35"
          />

          <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => {
                setUnitSystem("us");
                setAreaSqFt(defaultAreaSqFt);
                setCoats(defaultCoats);
                setCoverage(defaultCoverage);
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
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.baseLiters")
                : t("results.baseGallons")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(gallonsToLiters(baseGallons), 2)
                : formatNumber(baseGallons, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric"
                ? t("results.wasteLiters")
                : t("results.wasteGallons")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(gallonsToLiters(wasteGallons), 2)
                : formatNumber(wasteGallons, 2)
            }
          />
          <CalculatorResultRow
            label={
              unitSystem === "metric" ? t("results.liters") : t("results.gallons")
            }
            value={
              unitSystem === "metric"
                ? formatNumber(gallonsToLiters(gallons), 2)
                : formatNumber(gallons, 2)
            }
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
