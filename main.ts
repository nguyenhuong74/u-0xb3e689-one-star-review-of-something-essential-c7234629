// One-star review of sleep, written deadpan.
//
// The joke's construction: sleep is sold as eight hours of rest, so the
// review files the complaint in earnest — the product does deliver, just
// not what was promised. The sting waits until the last few words: the
// 3 a.m. wake-up to replay an old embarrassment is the small daily
// grievance everyone recognises, and it is stated flat, with no wink.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Sleep promises eight hours of rest and delivers a 3 a.m. wake-up call to replay something embarrassing I said in 2019.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// Written with no trailing newline, so the file holds exactly the review:
// one line, 118 characters, byte-identical on every run.
writeFileSync(join(outputDir, "entry.txt"), REVIEW, "utf8");
