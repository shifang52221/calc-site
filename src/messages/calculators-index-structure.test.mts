import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

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

function wordCount(text: string) {
  return (text.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)?/g) ?? []).length;
}

const REQUIRED_REVIEW_GUIDANCE_KEYS = [
  "calculatorsIndex.reviewIntro",
  "calculatorsIndex.reviewUseTitle",
  "calculatorsIndex.reviewUseBody",
  "calculatorsIndex.reviewMeasureTitle",
  "calculatorsIndex.reviewMeasureBody",
  "calculatorsIndex.reviewWasteTitle",
  "calculatorsIndex.reviewWasteBody",
  "calculatorsIndex.reviewCheckTitle",
  "calculatorsIndex.reviewCheckBody",
] as const;

test("en calculators index includes review-ready guidance copy", () => {
  const messages = loadEnMessages();
  const parts: string[] = [];

  for (const key of REQUIRED_REVIEW_GUIDANCE_KEYS) {
    const value = getByPath(messages, key);
    assert.equal(typeof value, "string", `Missing string key "${key}"`);
    parts.push(value);
  }

  const text = parts.join(" ");
  assert.ok(
    wordCount(text) >= 140,
    "Calculators index guidance should be substantial enough to support review",
  );
  assert.match(text, /measurement/i);
  assert.match(text, /waste|overage/i);
  assert.match(text, /round/i);
  assert.match(text, /product label|manufacturer/i);
});
