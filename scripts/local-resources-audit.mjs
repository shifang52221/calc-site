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
  return s
    .replace(/https?:\/\/\S+/g, " ")
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

function extractArticleBlocks(fileText) {
  const slugRe = /slug:\s*"([^"]+)"/g;
  const matches = [];
  let m;
  while ((m = slugRe.exec(fileText))) {
    matches.push({ slug: m[1], index: m.index });
  }
  return matches.map((entry, i) => {
    const start = entry.index;
    const end = i + 1 < matches.length ? matches[i + 1].index : fileText.length;
    return { slug: entry.slug, block: fileText.slice(start, end) };
  });
}

function estimateWordCountFromBlock(block) {
  const stringRe = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  let totalWords = 0;
  let s;
  while ((s = stringRe.exec(block))) {
    const raw = unescapeTsString(s[1]);
    const cleaned = normalizeForCount(raw);
    totalWords += countWords(cleaned);
  }
  return totalWords;
}

async function main() {
  const args = new Map();
  for (const arg of process.argv.slice(2)) {
    const [k, v] = arg.split("=");
    if (k.startsWith("--")) args.set(k.slice(2), v ?? true);
  }

  const relPath =
    (args.get("file") && String(args.get("file"))) ||
    path.join("src", "lib", "content", "resourcesEn.ts");
  const top = Number(args.get("top") ?? 30);
  const min = Number(args.get("min") ?? 0);

  const redirectsArg = args.get("redirects");
  const defaultRedirectsPath = path.resolve(
    process.cwd(),
    path.join("docs", "resources-redirects.json"),
  );
  const redirectsPath =
    redirectsArg === "false"
      ? null
      : path.resolve(
          process.cwd(),
          redirectsArg ? String(redirectsArg) : defaultRedirectsPath,
        );

  let redirects = null;
  try {
    if (redirectsPath && fs.existsSync(redirectsPath)) {
      redirects = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));
    }
  } catch {
    redirects = null;
  }

  const filePath = path.resolve(process.cwd(), relPath);
  const text = fs.readFileSync(filePath, "utf8");

  const blocks = extractArticleBlocks(text);
  const scored = blocks
    .map(({ slug, block }) => ({
      slug,
      estimatedWords: estimateWordCountFromBlock(block),
    }))
    .filter((r) => !(redirects && redirects[r.slug]))
    .sort((a, b) => a.estimatedWords - b.estimatedWords);

  const thin = min > 0 ? scored.filter((r) => r.estimatedWords < min) : scored;

  console.log(
    JSON.stringify(
      {
        file: relPath.replace(/\\/g, "/"),
        articles: blocks.length,
        thresholds: min > 0 ? { minWords: min } : undefined,
        redirects: redirects
          ? {
              enabled: true,
              file: path
                .relative(process.cwd(), redirectsPath)
                .replace(/\\/g, "/"),
              excludedCount: Object.keys(redirects).length,
            }
          : { enabled: false },
        thinCount: thin.length,
        topLowest: thin.slice(0, top),
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
