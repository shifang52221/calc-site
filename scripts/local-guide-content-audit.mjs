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

function safeReadJson(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function flattenStrings(value, out = []) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => flattenStrings(v, out));
  else if (value && typeof value === "object") {
    Object.values(value).forEach((v) => flattenStrings(v, out));
  }
  return out;
}

function mean(nums) {
  if (!nums.length) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function stddev(nums) {
  if (nums.length < 2) return 0;
  const m = mean(nums);
  const v = nums.reduce((a, b) => a + (b - m) ** 2, 0) / nums.length;
  return Math.sqrt(v);
}

function buildHistogram(nums) {
  const bins = [
    { label: "<300", min: -Infinity, max: 299 },
    { label: "300-449", min: 300, max: 449 },
    { label: "450-599", min: 450, max: 599 },
    { label: "600-799", min: 600, max: 799 },
    { label: "800-999", min: 800, max: 999 },
    { label: "1000+", min: 1000, max: Infinity },
  ];
  const out = Object.fromEntries(bins.map((b) => [b.label, 0]));
  for (const n of nums) {
    const b = bins.find((x) => n >= x.min && n <= x.max);
    if (b) out[b.label]++;
  }
  return out;
}

async function main() {
  const args = new Map();
  for (const arg of process.argv.slice(2)) {
    const [k, v] = arg.split("=");
    if (k.startsWith("--")) args.set(k.slice(2), v ?? true);
  }

  const file =
    (args.get("file") && String(args.get("file"))) ||
    path.join("src", "messages", "en.json");
  const minWords = Number(args.get("minWords") ?? 260);
  const top = Number(args.get("top") ?? 10);

  const filePath = path.resolve(process.cwd(), file);
  const json = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const groups = Object.entries(json)
    .filter(([k]) => /^guide[A-Z]/.test(k))
    .map(([id, value]) => {
      const strings = flattenStrings(value);
      const joined = strings.join(" ");
      const wordEstimate = countWords(normalizeForCount(joined));
      return { id, wordEstimate, strings: strings.length };
    });

  const variantsArg = args.get("variants");
  const defaultVariantsPath = path.resolve(
    process.cwd(),
    path.join("docs", "guide-content-variants.json"),
  );
  const variantsPath =
    variantsArg === "false"
      ? null
      : path.resolve(
          process.cwd(),
          variantsArg ? String(variantsArg) : defaultVariantsPath,
        );
  const variants = variantsPath ? safeReadJson(variantsPath) : null;

  const results = groups
    .map((g) => {
      let target = null;
      if (variants) {
        const defaultTarget = variants.default ?? null;
        const byId = (variants.byId && variants.byId[g.id]) || null;
        const applyDefaultToAll = Boolean(
          defaultTarget && defaultTarget.applyDefaultToAll,
        );
        const tier =
          byId && byId.tier && variants.tiers && variants.tiers[byId.tier]
            ? variants.tiers[byId.tier]
            : null;
        const targetMinWords =
          (tier && tier.targetMinWords) ||
          (byId && byId.targetMinWords) ||
          (applyDefaultToAll && defaultTarget && defaultTarget.targetMinWords) ||
          null;
        const targetMaxWords =
          (tier && tier.targetMaxWords) ||
          (byId && byId.targetMaxWords) ||
          (applyDefaultToAll && defaultTarget && defaultTarget.targetMaxWords) ||
          null;
        if (byId && (targetMinWords || targetMaxWords)) {
          target = {
            tier: (byId && byId.tier) || null,
            targetMinWords,
            targetMaxWords,
          };
        }
      }
      return { ...g, target };
    })
    .sort((a, b) => a.wordEstimate - b.wordEstimate);

  const thin = results.filter((r) => r.wordEstimate < minWords).slice(0, top);
  const estimates = results.map((r) => r.wordEstimate);
  const stats = {
    mean: Math.round(mean(estimates) * 10) / 10,
    stddev: Math.round(stddev(estimates) * 10) / 10,
    min: Math.min(...estimates),
    max: Math.max(...estimates),
    histogram: buildHistogram(estimates),
  };

  const targetable = results.filter((r) => r.target && r.target.targetMinWords);
  const belowTarget = targetable
    .filter((r) => r.target && r.wordEstimate < r.target.targetMinWords)
    .sort(
      (a, b) =>
        a.wordEstimate - (a.target?.targetMinWords ?? 0) -
        (b.wordEstimate - (b.target?.targetMinWords ?? 0)),
    )
    .slice(0, top);
  const aboveTarget = results
    .filter((r) => r.target && r.target.targetMaxWords != null)
    .filter((r) => r.target && r.wordEstimate > r.target.targetMaxWords)
    .sort(
      (a, b) =>
        (b.wordEstimate - (b.target?.targetMaxWords ?? 0)) -
        (a.wordEstimate - (a.target?.targetMaxWords ?? 0)),
    )
    .slice(0, top);

  console.log(
    JSON.stringify(
      {
        file: file.replace(/\\/g, "/"),
        guides: results.length,
        thresholds: { minWords },
        thinCount: results.filter((r) => r.wordEstimate < minWords).length,
        wordStats: stats,
        variants: variants
          ? {
              enabled: true,
              file: path
                .relative(process.cwd(), variantsPath)
                .replace(/\\/g, "/"),
              belowTargetCount: targetable.filter(
                (r) => r.target && r.wordEstimate < r.target.targetMinWords,
              ).length,
              aboveTargetCount: results.filter(
                (r) =>
                  r.target &&
                  r.target.targetMaxWords != null &&
                  r.wordEstimate > r.target.targetMaxWords,
              ).length,
              belowTargetTop: belowTarget,
              aboveTargetTop: aboveTarget,
            }
          : { enabled: false },
        thinTop: thin,
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
