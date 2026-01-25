#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function countWords(text) {
  if (!text) return 0;
  const cjk =
    (text.match(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g) || [])
      .length;
  const latinWords = text
    .replace(/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u30FF\uAC00-\uD7AF]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latinWords;
}

function normalizeForCount(s) {
  return s.replace(/https?:\/\/\S+/g, " ").replace(/\s+/g, " ").trim();
}

function unescapeTsString(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function scanObjectBlocks(fileText) {
  // Find top-level keys in `CALCULATOR_CONTENT_EN: { ... }`.
  const start = fileText.indexOf("export const CALCULATOR_CONTENT_EN");
  if (start < 0) throw new Error("CALCULATOR_CONTENT_EN not found");
  const braceStart = fileText.indexOf("{", start);
  if (braceStart < 0) throw new Error("Object start brace not found");

  const blocks = [];
  let depth = 0;
  let inString = false;
  let stringQuote = null;
  let escaped = false;

  let i = braceStart;
  let currentKey = null;
  let blockStart = null;

  function readKeyAt(pos) {
    const re = /\s*([a-zA-Z0-9_]+)\s*:\s*{/y;
    re.lastIndex = pos;
    const m = re.exec(fileText);
    if (!m) return null;
    return { key: m[1], at: re.lastIndex - 1 };
  }

  while (i < fileText.length) {
    const ch = fileText[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === stringQuote) {
        inString = false;
        stringQuote = null;
      }
      i++;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === "`") {
      inString = true;
      stringQuote = ch;
      i++;
      continue;
    }

    if (ch === "{") {
      depth++;
      // depth===2 means we just entered `{` for a top-level calculator entry.
      if (depth === 2) {
        const keyMatch = /([a-zA-Z0-9_]+)\s*:\s*{$/.exec(
          fileText.slice(Math.max(braceStart, i - 80), i + 1),
        );
        if (keyMatch) {
          currentKey = keyMatch[1];
          blockStart = i;
        }
      }
      i++;
      continue;
    }

    if (ch === "}") {
      if (depth === 2 && currentKey && blockStart != null) {
        blocks.push({
          id: currentKey,
          block: fileText.slice(blockStart, i + 1),
        });
        currentKey = null;
        blockStart = null;
      }
      depth--;
      if (depth === 0) break;
      i++;
      continue;
    }

    // Try to detect `key: {` at depth 1.
    if (depth === 1) {
      const m = readKeyAt(i);
      if (m) {
        // advance to `{` char
        i = m.at;
        continue;
      }
    }

    i++;
  }

  return blocks;
}

function getArrayLen(block, key) {
  const re = new RegExp(`${key}:\\s*\\[`, "m");
  const start = block.search(re);
  if (start < 0) return null;
  const bracketStart = block.indexOf("[", start);
  if (bracketStart < 0) return null;

  let depth = 0;
  let inString = false;
  let quote = null;
  let escaped = false;
  let items = 0;
  let sawItem = false;

  for (let i = bracketStart; i < block.length; i++) {
    const ch = block[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === quote) inString = false;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      inString = true;
      quote = ch;
      sawItem = true;
      continue;
    }
    if (ch === "[") {
      depth++;
      continue;
    }
    if (ch === "]") {
      depth--;
      if (depth === 0) break;
      continue;
    }
    if (depth === 1 && ch === "," && sawItem) {
      items++;
      sawItem = false;
    }
  }
  // If we saw at least one item, commas count is items; total items is commas+1.
  return sawItem ? items + 1 : items;
}

function estimateWordCountFromBlock(block) {
  const stringRe = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  let totalWords = 0;
  let s;
  while ((s = stringRe.exec(block))) {
    const raw = unescapeTsString(s[1]);
    totalWords += countWords(normalizeForCount(raw));
  }
  return totalWords;
}

async function main() {
  const args = new Map();
  for (const arg of process.argv.slice(2)) {
    const [k, v] = arg.split("=");
    if (k.startsWith("--")) args.set(k.slice(2), v ?? true);
  }

  const file =
    (args.get("file") && String(args.get("file"))) ||
    path.join("src", "lib", "content", "calculatorsEn.ts");
  const minWords = Number(args.get("minWords") ?? 260);
  const top = Number(args.get("top") ?? 10);

  const filePath = path.resolve(process.cwd(), file);
  const text = fs.readFileSync(filePath, "utf8");

  const blocks = scanObjectBlocks(text);
  const results = blocks.map(({ id, block }) => {
    const wordEstimate = estimateWordCountFromBlock(block);
    const lens = {
      quick: getArrayLen(block, "quick"),
      deepDive: getArrayLen(block, "deepDive"),
      howToMeasureSteps: getArrayLen(block, "howToMeasureSteps"),
      assumptions: getArrayLen(block, "assumptions"),
      buyingTips: getArrayLen(block, "buyingTips"),
      commonMistakes: getArrayLen(block, "commonMistakes"),
    };
    const missing = Object.entries(lens)
      .filter(([, v]) => v == null)
      .map(([k]) => k);
    return { id, wordEstimate, lens, missing };
  });

  const thin = results
    .filter((r) => r.wordEstimate < minWords)
    .sort((a, b) => a.wordEstimate - b.wordEstimate)
    .slice(0, top);

  const incomplete = results
    .filter((r) => r.missing.length)
    .sort((a, b) => a.id.localeCompare(b.id))
    .slice(0, top);

  console.log(
    JSON.stringify(
      {
        file: file.replace(/\\/g, "/"),
        calculators: results.length,
        thresholds: { minWords },
        thinTop: thin,
        missingArraysTop: incomplete,
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

