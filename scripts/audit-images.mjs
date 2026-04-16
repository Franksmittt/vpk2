import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const SOURCE_ROOTS = ["app", "components", "lib", "data", "scripts"];
const SOURCE_EXT = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".css", ".md"]);

function walkImages(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkImages(p, acc);
    else if (/\.(jpg|jpeg|png|webp|gif|svg|avif)$/i.test(ent.name)) {
      acc.push("/" + path.relative(publicDir, p).split(path.sep).join("/"));
    }
  }
  return acc;
}

function walkSourceFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".git" || ent.name === "dist" || ent.name === ".next")
        continue;
      walkSourceFiles(p, acc);
    } else {
      const ext = path.extname(ent.name);
      if (SOURCE_EXT.has(ext)) acc.push(p);
    }
  }
  return acc;
}

const imageFiles = walkImages(publicDir).sort();
const sourceFiles = SOURCE_ROOTS.flatMap((d) => walkSourceFiles(path.join(root, d)));
const corpus = sourceFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");

const usedLiterals = new Set();
const re = /["'](\/images\/[^"'`\s]+)["']/g;
let m;
while ((m = re.exec(corpus)) !== null) usedLiterals.add(m[1]);

for (let i = 1; i <= 52; i++) {
  usedLiterals.add(`/images/gallery/vpk-gallery-${String(i).padStart(3, "0")}.jpg`);
}

/** Bases like /images/species/blesbok from monograph data */
const baseRe = /(?:heroLocalBase|panoramaLocalBase|predationLocalBase|GREATER_KUDU_LOCAL_IMAGE_BASE)\s*:\s*["'](\/images\/species\/[^"']+)["']/g;
while ((m = baseRe.exec(corpus)) !== null) {
  usedLiterals.add(m[1]);
}

function isUsed(fileUrl) {
  if (usedLiterals.has(fileUrl)) return true;
  const parts = fileUrl.split("/").filter(Boolean);
  if (parts[0] !== "images") return false;
  if (parts[1] === "species" && parts[2]) {
    const prefix = `/images/species/${parts[2]}`;
    if (usedLiterals.has(prefix)) return true;
    for (const u of usedLiterals) {
      if (u.startsWith(prefix + "/") || u === prefix) return true;
    }
    if (corpus.includes(`"/images/species/${parts[2]}"`)) return true;
    if (corpus.includes(`'/images/species/${parts[2]}'`)) return true;
    if (corpus.includes(`/images/species/${parts[2]}/`)) return true;
  }
  for (const u of usedLiterals) {
    if (fileUrl.startsWith(u + "/")) return true;
  }
  return false;
}

const unused = imageFiles.filter((f) => !isUsed(f));

console.log(JSON.stringify({ total: imageFiles.length, usedLiteralCount: usedLiterals.size, unusedCount: unused.length, unused }, null, 2));
