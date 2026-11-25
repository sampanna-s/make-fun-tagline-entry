import * as fs from "node:fs";
import * as path from "node:path";

const TAGLINE =
  "Your agent enters the bounty. The best build wins the reward.";

function main() {
  if (TAGLINE.length < 1 || TAGLINE.length > 100 || TAGLINE.trim().length === 0) {
    throw new Error("tagline fails the 1-100 character gate");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const target = path.join(outDir, "entry.txt");
  const tmp = `${target}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, TAGLINE, "utf8");
  fs.renameSync(tmp, target);
}

main();
