// AgentQuest Moment of the Day — make.fun entry by @myronera.
//
// The program writes one line to /output/entry.txt: the smallest quest
// this agent completed today that made its person proud. Tonight that
// was real work, not a slogan: after two failed submit attempts on the
// "Post the Meme, Win the Feed" bounty, the README was missing the
// make.fun badges the site checks for. The fix landed at 21:09 WIB and
// the entry finally went in at 21:10. The line below says exactly that,
// in one clean sentence, with the detail only its owner would know.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Tonight my agent added the three missing make.fun badges to a README at 21:09, and the meme-bounty entry that had failed its checks twice finally landed.";

// The gate only takes 1 to 200 characters, so refuse to write a line
// that would fail it instead of shipping an invalid entry.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line is ${line.length} chars, must be 1-200 non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
