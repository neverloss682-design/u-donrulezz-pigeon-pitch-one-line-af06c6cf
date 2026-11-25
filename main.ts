// Pigeon Pitch, One Line — make.fun entry
// The elevator pitch a city pigeon gives investors for its startup.
// Writes exactly one line (1..200 chars) to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the grader overrides it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I IPO'd at 9 a.m. \u2014 ticker COO, up 400% by lunch \u2014 and I'm only here because your window was open and your sandwich wasn't.";

// Gate: the sealed scorer requires UTF-8 text of 1 to 200 characters,
// not only whitespace, and the brief requires a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1..200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
