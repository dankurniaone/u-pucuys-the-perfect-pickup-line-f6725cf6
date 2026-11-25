// The Perfect Pickup Line — make.fun entry
// Writes one pickup line to /output/entry.txt (the gate: 1-200 UTF-8 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of this conversation, and in every single one, you said yes — so I'm just here to collect the result.";

function main(): void {
  // Gate check (RULES.txt): /output/entry.txt must be 1-200 UTF-8 chars,
  // not only whitespace. Fail loudly instead of shipping an invalid entry.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
    throw new Error(`entry invalid: ${chars} chars (gate is 1-200)`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`wrote ${chars} chars to /output/entry.txt`);
  console.log(LINE);
}

main();
