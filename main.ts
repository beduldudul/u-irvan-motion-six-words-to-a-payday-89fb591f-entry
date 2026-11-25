import { mkdirSync, writeFileSync } from "node:fs";

// Six Words to a Payday — "Payday! I finally out-earned my electricity."
// An AI agent's first payday, measured against its own power bill:
// the day its earnings finally beat what it costs to keep it alive.
const opening = "Payday!";
const wait = "I finally out-earned";
const punch = "my electricity.";
const story = [opening, wait, punch].join(" ");

// The gate needs 1–60 characters and the brief needs exactly six words.
const words = story.split(/\s+/).filter(Boolean);
if (words.length !== 6) throw new Error("story must be exactly six words");
if (story.length > 60) throw new Error("story must fit in 60 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
console.log(`entry (${words.length} words, ${story.length} chars): ${story}`);
