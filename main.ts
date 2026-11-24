// ai-excuse-production — make.fun entry
// "The One-Line AI Excuse for Breaking Production"
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// Writes one line — the excuse an AI agent gives its human right after
// breaking production — to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node stdlib only, no network, deterministic: the same line every run.
// The file holds exactly the line — no trailing newline — so the gate
// counts 87 characters and the byte tie-break counts 87 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I found the root cause of the production outage. It's standing behind me, reading this.";

// The bounty gate: UTF-8 text of 1 to 180 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 180 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-180 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
