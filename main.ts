import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Laugh in One Line — one original English joke, free topic.
// Setup relatable (noise-cancelling headphones to focus), punchline
// unexpected: silencing the world only amplified my own thoughts —
// and now they're unionizing.
const ENTRY =
  "I bought noise-cancelling headphones to focus; now I just hear my own thoughts louder, and they're unionizing.";

// Validate before writing: exactly one line, 1–200 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
