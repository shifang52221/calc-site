import assert from "node:assert/strict";
import test from "node:test";

import { getRobotsForIndexedLocales } from "./seoRobots.ts";

test("non-indexed locales are explicitly noindex during review", () => {
  assert.equal(getRobotsForIndexedLocales("en", ["en"]), undefined);
  assert.deepEqual(getRobotsForIndexedLocales("es", ["en"]), {
    index: false,
    follow: true,
  });
  assert.deepEqual(getRobotsForIndexedLocales("zh-TW", ["en"]), {
    index: false,
    follow: true,
  });
});
