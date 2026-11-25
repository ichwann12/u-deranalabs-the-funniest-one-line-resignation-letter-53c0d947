// The Funniest One-Line Resignation Letter — entry runner.
// Reads entry.txt from the repo root and writes it verbatim to the
// output directory given by MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR.
// Node 22, stdlib only, no network, no wall clock, fully deterministic.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoRoot, "entry.txt"), "utf8").trimEnd();

const outDir =
  process.env.MAKEFUN_BOT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "output";
// Output filename is fixed so graders can find it deterministically;
// only the directory comes from the environment.
const OUTPUT_FILENAME = "output.txt";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILENAME), line + "\n", "utf8");
console.log(line);
