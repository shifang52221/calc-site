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

const REQUIRED_HOME_KEYS = [
  "home.focusTitle",
  "home.focusSubtitle",
  "home.priorityTopicsTitle",
  "home.priorityTopicsIntro",
  "home.priorityDeckMudTitle",
  "home.priorityDeckMudDesc",
  "home.priorityBaseboardTitle",
  "home.priorityBaseboardDesc",
  "home.priorityDrywallTextureTitle",
  "home.priorityDrywallTextureDesc",
  "home.priorityTileWasteTitle",
  "home.priorityTileWasteDesc",
  "home.trustTitle",
  "home.trustIntro",
  "home.trustPoint1",
  "home.trustPoint2",
  "home.trustPoint3",
  "home.popularResourcesTitle",
  "home.popularResourcesDescription",
  "home.viewAllResourcesCta",
] as const;

test("en homepage includes required recovery-focused messaging keys", () => {
  const messages = loadEnMessages();

  for (const key of REQUIRED_HOME_KEYS) {
    assert.notEqual(getByPath(messages, key), undefined, `Missing key "${key}"`);
  }
});
