#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

function normalizeText(s) {
  return s
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\d+/g, "0")
    .replace(/\s+/g, " ")
    .trim();
}

function unescapeTsString(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function stableHash(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

function extractBlocksByKey(fileText, keyRegex) {
  const matches = [];
  let m;
  while ((m = keyRegex.exec(fileText))) {
    matches.push({ id: m[1], index: m.index });
  }
  return matches.map((entry, i) => {
    const start = entry.index;
    const end = i + 1 < matches.length ? matches[i + 1].index : fileText.length;
    return { id: entry.id, block: fileText.slice(start, end) };
  });
}

function extractStringLiterals(block) {
  const stringRe = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  const out = [];
  let m;
  while ((m = stringRe.exec(block))) out.push(unescapeTsString(m[1]));
  return out;
}

function groupDuplicates(items, minGroup = 2) {
  const byHash = new Map();
  for (const item of items) {
    const list = byHash.get(item.hash) ?? [];
    list.push(item);
    byHash.set(item.hash, list);
  }
  return [...byHash.entries()]
    .filter(([, list]) => list.length >= minGroup)
    .map(([hash, list]) => ({ hash, count: list.length, items: list }))
    .sort((a, b) => b.count - a.count);
}

async function main() {
  const args = new Map();
  for (const arg of process.argv.slice(2)) {
    const [k, v] = arg.split("=");
    if (k.startsWith("--")) args.set(k.slice(2), v ?? true);
  }

  const calculatorsFile =
    (args.get("calculators") && String(args.get("calculators"))) ||
    path.join("src", "lib", "content", "calculatorsEn.ts");
  const resourcesFile =
    (args.get("resources") && String(args.get("resources"))) ||
    path.join("src", "lib", "content", "resourcesEn.ts");
  const maxGroups = Number(args.get("maxGroups") ?? 20);

  const calculatorsText = fs.readFileSync(
    path.resolve(process.cwd(), calculatorsFile),
    "utf8",
  );
  const resourcesText = fs.readFileSync(
    path.resolve(process.cwd(), resourcesFile),
    "utf8",
  );

  const calculatorBlocks = extractBlocksByKey(
    calculatorsText,
    /^\s*([a-zA-Z0-9_]+):\s*{\s*$/gm,
  )
    // the file contains other objects; only keep blocks that look like calculator entries
    .filter(({ block }) => block.includes("quick:") && block.includes("howToMeasure"));

  const resourceBlocks = extractBlocksByKey(
    resourcesText,
    /^\s*slug:\s*"([^"]+)"\s*,?\s*$/gm,
  );

  const calculatorHashes = calculatorBlocks.map(({ id, block }) => {
    const joined = extractStringLiterals(block).join("\n");
    const normalized = normalizeText(joined);
    return { kind: "calculator", id, hash: stableHash(normalized) };
  });

  const resourceHashes = resourceBlocks.map(({ id, block }) => {
    const joined = extractStringLiterals(block).join("\n");
    const normalized = normalizeText(joined);
    return { kind: "resource", id, hash: stableHash(normalized) };
  });

  const calculatorDupes = groupDuplicates(calculatorHashes).slice(0, maxGroups);
  const resourceDupes = groupDuplicates(resourceHashes).slice(0, maxGroups);

  console.log(
    JSON.stringify(
      {
        calculatorsFile: calculatorsFile.replace(/\\/g, "/"),
        resourcesFile: resourcesFile.replace(/\\/g, "/"),
        calculators: calculatorHashes.length,
        resources: resourceHashes.length,
        exactDuplicateGroups: {
          calculators: calculatorDupes.map((g) => ({
            count: g.count,
            ids: g.items.map((i) => i.id),
          })),
          resources: resourceDupes.map((g) => ({
            count: g.count,
            slugs: g.items.map((i) => i.id),
          })),
        },
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

