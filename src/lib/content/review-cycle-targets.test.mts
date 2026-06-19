import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import { CALCULATOR_CONTENT_EN } from "./calculatorsEn.ts";
import { RESOURCE_ARTICLES_EN } from "./resourcesEn.ts";

type AnyObject = Record<string, unknown>;

function loadEnMessages(): AnyObject {
  const filePath = path.join(process.cwd(), "src", "messages", "en.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as AnyObject;
}

function getByPath(obj: AnyObject, dottedPath: string): unknown {
  return dottedPath.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as AnyObject)) {
      return (acc as AnyObject)[part];
    }
    return undefined;
  }, obj);
}

test("deck mud content keeps shower pan slope, coverage, and floor mud intent together", () => {
  const deckMud = CALCULATOR_CONTENT_EN.deckMud;
  const joined = [
    ...deckMud.quick,
    deckMud.deepDiveTitle ?? "",
    ...(deckMud.deepDive ?? []),
    deckMud.howToMeasureTitle,
    ...deckMud.howToMeasureSteps,
    deckMud.assumptionsTitle,
    ...deckMud.assumptions,
    deckMud.buyingTipsTitle,
    ...deckMud.buyingTips,
    deckMud.commonMistakesTitle ?? "",
    ...(deckMud.commonMistakes ?? []),
  ].join(" ");

  assert.match(joined, /deck mud|dry pack|floor mud|mud bed/i);
  assert.match(joined, /slope|average thickness|shower pan/i);
  assert.match(joined, /coverage chart|coverage|bag yield/i);
  assert.match(joined, /floor mud calculator/i);
  assert.match(joined, /4(:| to )1 mud bed mix/i);
});

test("baseboard trim content keeps joint strategy and stock-length planning visible", () => {
  const baseboard = CALCULATOR_CONTENT_EN.baseboardTrim;
  const joined = [
    ...baseboard.quick,
    baseboard.deepDiveTitle ?? "",
    ...(baseboard.deepDive ?? []),
    baseboard.howToMeasureTitle,
    ...baseboard.howToMeasureSteps,
    baseboard.assumptionsTitle,
    ...baseboard.assumptions,
    baseboard.buyingTipsTitle,
    ...baseboard.buyingTips,
    baseboard.commonMistakesTitle ?? "",
    ...(baseboard.commonMistakes ?? []),
  ].join(" ");

  assert.match(joined, /linear feet|piece length|stock length/i);
  assert.match(joined, /joint strategy|scarf joints|coping|miters/i);
});

test("deck mud support resource still carries full shower-pan planning coverage", () => {
  const resource = RESOURCE_ARTICLES_EN.find(
    (article) => article.slug === "deck-mud-coverage-chart",
  );
  assert.ok(resource, "Expected deck mud coverage chart resource to exist");
  const text = resource!.sections
    .flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
    ])
    .join(" ");

  assert.match(text, /coverage chart|square feet|thickness/i);
  assert.match(text, /shower pan|floor mud|dry pack/i);
  assert.match(text, /4(:| to )1 mud bed mix/i);
});

test("baseboard trim snippet keeps base trim and molding query phrasing visible", () => {
  const messages = loadEnMessages();
  const snippet = [
    getByPath(messages, "baseboardTrim.metaTitle"),
    getByPath(messages, "baseboardTrim.metaDescription"),
    getByPath(messages, "baseboardTrim.subtitle"),
  ].join(" ");

  assert.match(snippet, /baseboard trim calculator/i);
  assert.match(snippet, /base trim calculator/i);
  assert.match(snippet, /baseboard molding|baseboard moulding/i);
});
