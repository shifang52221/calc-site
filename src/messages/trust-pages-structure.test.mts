import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

type AnyObject = Record<string, unknown>;

function loadLocaleMessages(filename: string): AnyObject {
  const filePath = path.join(process.cwd(), "src", "messages", filename);
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

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}

const REQUIRED_KEYS = [
  "aboutPage.responsibilityTitle",
  "aboutPage.responsibility.p1",
  "aboutPage.scopeTitle",
  "aboutPage.correctionsProcessTitle",
  "methodologyPage.ownershipTitle",
  "methodologyPage.reviewProcessTitle",
  "methodologyPage.uncertaintyTitle",
  "editorialPolicyPage.responsibilityTitle",
  "editorialPolicyPage.humanReviewTitle",
  "editorialPolicyPage.correctionsWorkflowTitle",
  "contactPage.whatHappensNextTitle",
  "contactPage.priorityTitle",
] as const;

test("trust page structure includes required responsibility keys across locales", () => {
  const locales = [
    ["en", "en.json"],
    ["es", "es.json"],
    ["zh-TW", "zh-TW.json"],
  ] as const;

  for (const [locale, file] of locales) {
    const messages = loadLocaleMessages(file);

    for (const key of REQUIRED_KEYS) {
      assert.notEqual(
        getByPath(messages, key),
        undefined,
        `Missing key "${key}" in locale "${locale}"`,
      );
    }
  }
});

test("en trust surfaces name the responsible editor instead of anonymous ownership", () => {
  const messages = loadLocaleMessages("en.json");
  const trustText = [
    messages.editorialPolicyPage,
    messages.methodologyPage,
    messages.aboutPage,
    messages.contactPage,
    getByPath(messages, "home.trustPoint1"),
  ]
    .flatMap(collectStrings)
    .join("\n");

  assert.match(trustText, /Ethan Parker/);
  assert.match(trustText, /Editor and Calculator Methodology Lead/);
  assert.doesNotMatch(trustText, /site owner\/editor/i);
  assert.doesNotMatch(trustText, /owner\/editor/i);
});
