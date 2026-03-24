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

const REQUIRED_KEYS = [
  "deckMud.reviewNoteTitle",
  "deckMud.reviewNoteBody",
  "deckMud.reviewNoteLinkMethodology",
  "deckMud.reviewNoteLinkEditorial",
  "baseboardTrim.reviewNoteTitle",
  "baseboardTrim.reviewNoteBody",
  "baseboardTrim.reviewNoteLinkMethodology",
  "baseboardTrim.reviewNoteLinkEditorial",
  "drywallTexture.reviewNoteTitle",
  "drywallTexture.reviewNoteBody",
  "drywallTexture.reviewNoteLinkMethodology",
  "drywallTexture.reviewNoteLinkEditorial",
] as const;

test("en core calculators include review note keys", () => {
  const messages = loadEnMessages();

  for (const key of REQUIRED_KEYS) {
    assert.notEqual(getByPath(messages, key), undefined, `Missing key "${key}"`);
  }
});
