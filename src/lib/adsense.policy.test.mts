import test from "node:test";
import assert from "node:assert/strict";

import { canRenderAdSlot } from "./adsense.ts";

test("returns false when client id is missing", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "",
      slot: "123",
      reviewMode: false,
    }),
    false,
  );
});

test("returns false when slot is missing", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "ca-pub-abc",
      slot: "",
      reviewMode: false,
    }),
    false,
  );
});

test("returns false in review mode", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "ca-pub-abc",
      slot: "123",
      reviewMode: true,
    }),
    false,
  );
});

test("returns true when enabled and not in review mode", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "ca-pub-abc",
      slot: "123",
      reviewMode: false,
    }),
    true,
  );
});

test("returns true when placement is explicitly allowed", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "ca-pub-abc",
      slot: "123",
      reviewMode: false,
      placement: "calculatorAfterResult",
      allowedPlacements: ["calculatorAfterResult"],
    }),
    true,
  );
});

test("returns false when placement is not in allowed list", () => {
  assert.equal(
    canRenderAdSlot({
      clientId: "ca-pub-abc",
      slot: "123",
      reviewMode: false,
      placement: "homeTop",
      allowedPlacements: ["calculatorAfterResult"],
    }),
    false,
  );
});
