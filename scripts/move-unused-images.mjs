import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const unused = [
  "/images/home/brotherhood-bento-archive.png",
  "/images/home/culture-bento-archive.png",
  "/images/home/solitary-tracker-archive.png",
  "/images/home/species-bento-archive.png",
  "/images/species/blue-wildebeest/blue-wildebeest-intro-panorama.jpg",
];

const destRoot = path.join(root, "unused-images");

for (const rel of unused) {
  const from = path.join(root, "public", rel.replace(/^\//, ""));
  const to = path.join(destRoot, rel.replace(/^\//, ""));
  if (!fs.existsSync(from)) {
    console.warn("Skip missing:", from);
    continue;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.renameSync(from, to);
  console.log("Moved", rel, "->", path.relative(root, to));
}
