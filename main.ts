// Robot Romance: One-Line Pickup Lines for AI
// make.fun bounty u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
// Deterministic, no model calls, no network.
// Writes one pickup line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: a gradient-descent joke aimed squarely at an AI.
// Setup ("Are you a gradient?") + punch ("my loss drops to zero") land
// inside one breath, and the laugh comes from the machine premise —
// a loss function falling to zero — not from a generic compliment.
// It sidesteps the worn robot moves (batteries, charging, rebooting),
// and it reads like something a person would really say to a machine.
const ENTRY =
  "Are you a gradient? Because every time I see you, my loss drops to zero.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate guard: the sealed scorer only judges UTF-8 text of 1-200 chars,
// a single line, not only whitespace. Refuse to write anything invalid.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry is ${chars.length} chars, gate needs 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${chars.length} chars to ${OUTPUT_PATH}`);
