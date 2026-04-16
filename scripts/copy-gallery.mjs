import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir04 = path.join(root, "04");
const srcDirHelicopter = path.join(root, "03", "Helicopter");
const dstDir = path.join(root, "public", "images", "gallery");

/** Same order as supplied by management (source filenames in `04/`). */
const ORDERED_SOURCE_FILES = [
  "Generated Image April 15, 2026 - 7_45PM.jpg",
  "Generated Image April 15, 2026 - 7_44PM.jpg",
  "Generated Image April 15, 2026 - 7_42PM.jpg",
  "Generated Image April 15, 2026 - 7_39PM.jpg",
  "Generated Image April 16, 2026 - 12_59PM.jpg",
  "Generated Image April 16, 2026 - 11_57AM.jpg",
  "Generated Image April 16, 2026 - 11_51AM (1).jpg",
  "508634017_122157836528481286_8481645253962437264_n (1).jpg",
  "508833843_122157836666481286_4888180489325685158_n.jpg",
  "518352507_122161471286481286_3777095360928172808_n.jpg",
  "484656273_122142850442481286_1391105597476794781_n.jpg",
  "484427284_122142850880481286_4039824599697576631_n.jpg",
  "491835619_122148797300481286_3614169708870262681_n.jpg",
  "492002023_122149016816481286_7473172789495795810_n.jpg",
  "499709953_122153332988481286_24140448011448002_n (1).jpg",
  "509004521_122157836588481286_426333805214950816_n.jpg",
  "519626475_122161471088481286_4577069930445784298_n.jpg",
  "517108482_122161475384481286_5433256311008049457_n.jpg",
  "Generated Image April 16, 2026 - 6_01PM.jpg",
  "526501006_122164508714481286_443226092702880844_n.jpg",
  "Generated Image April 15, 2026 - 8_04PM.jpg",
  "491973771_122149018184481286_4606206789376249933_n.jpg",
  "Generated Image April 15, 2026 - 8_03PM.jpg",
  "495152532_122151188984481286_7212340376287414605_n.jpg",
  "Generated Image April 15, 2026 - 8_02PM.jpg",
  "496253859_122151189242481286_4603693129183535844_n.jpg",
  "496748835_122152294436481286_8560476559201593415_n.jpg",
  "496816549_122152294538481286_1548311443731354864_n.jpg",
  "499577491_122153332430481286_665679989963356533_n.jpg",
  "499423492_122153332484481286_1008071663239031395_n.jpg",
  "499709953_122153332988481286_24140448011448002_n.jpg",
  "498588300_122153333522481286_2996380069230523473_n.jpg",
  "502548921_122155630328481286_5142095249132119147_n.jpg",
  "Generated Image April 15, 2026 - 7_57PM.jpg",
  "509422896_122157836330481286_5753900571769927680_n.jpg",
  "508468136_122157836360481286_3207324277848784590_n.jpg",
  "508634017_122157836528481286_8481645253962437264_n.jpg",
  "512678790_122158940012481286_995274854714420431_n.jpg",
  "513549502_122159667380481286_1407252081489371118_n.jpg",
  "514533756_122159667608481286_1861583317601497684_n.jpg",
  "524575002_122163815588481286_6460978799747337063_n.jpg",
  "524196564_122163816788481286_5429879874393849715_n.jpg",
  "526714671_122164508744481286_7560777395439957406_n.jpg",
  "Generated Image April 15, 2026 - 7_51PM.jpg",
  "527320670_122164508882481286_7233182581369073050_n.jpg",
  "525985788_122164508864481286_3258585882625671288_n.jpg",
  "526565382_122164508996481286_5159274889756303844_n.jpg",
  "525791693_122164509014481286_6728255001241559003_n.jpg",
  "530247025_122166203798481286_1157103464403104278_n.jpg",
  "Generated Image April 15, 2026 - 7_46PM.jpg",
];

const HELICOPTER_FILES = [
  "Generated Image April 16, 2026 - 1_17PM.jpg",
  "Generated Image April 16, 2026 - 1_18PM.jpg",
];

fs.mkdirSync(dstDir, { recursive: true });

function copyOne(from, label, index1) {
  const to = path.join(dstDir, `vpk-gallery-${String(index1).padStart(3, "0")}.jpg`);
  if (!fs.existsSync(from)) {
    console.error("Missing source:", from);
    process.exit(1);
  }
  fs.copyFileSync(from, to);
  console.log("Copied", label, "->", path.basename(to));
}

let n = 1;
ORDERED_SOURCE_FILES.forEach((name) => {
  copyOne(path.join(srcDir04, name), name, n);
  n += 1;
});

HELICOPTER_FILES.forEach((name) => {
  copyOne(path.join(srcDirHelicopter, name), `Helicopter/${name}`, n);
  n += 1;
});

const total = ORDERED_SOURCE_FILES.length + HELICOPTER_FILES.length;
console.log("Done:", total, "files into", path.relative(root, dstDir));
