# Bushbuck monograph — individual AI prompts (`/species/bushbuck`)

Research distilled from project file `Cape Bushbuck AI Image Research.txt` (morphology, pelage, horns, diet, biome). **Prompts below encode those facts** so generators stop inventing generic “African antelope” or CGI wildlife.

---

## READ FIRST — **close-up only** (mandatory for every image below)

**Framing:** Every image is a **close-up or macro** — face fill, horn shaft, eye, ear, muzzle, white socks on cannon bone, dew claws, coat spots, fur macro, gear macro, food macro. **No** full-body pin, wide vistas, tiny animal, aerials.

**Species lock:** **Cape bushbuck** *Tragelaphus sylvaticus* (southern / imbabala population — **spotted**, not the heavily harness-striped northern *T. scriptus*). **Not** buffalo, cattle, wildebeest, impala, nyala, greater kudu, eland, or generic “deer.”

**Horn accuracy (rams only — critical):** Cape bushbuck horns are **swept strongly backward**, running **parallel to the neck line** for much of their length. They show **at most one gentle twist** (the **first loop of a spiral**, not a kudu corkscrew). They carry **sharp longitudinal keels** (ridge along horn); base is **deeply corrugated / bark-like**; tips **smooth and often lighter ivory** from wear. Typical mature length on reference **~26–40 cm** along the curve; **do not** render metre-long corkscrews. **Ewes are hornless** — never horns on a female.

**Coat dimorphism:** **Ram:** base **dark grey-brown to deep chestnut** (can read **near-black** in deep shade); **high-contrast white** geometric patches on ears, chin, neck band (“collar”), tail, flanks (spots); prominent **white “socks”** on lower legs. Short dense sleek hair. **Erectile dorsal mane** along spine (longer coarser hair) — can show raised if tense/display. **Ewe:** **lighter red-brown / chestnut**; spots and stripes **softer** than ram; **no mane** like ram; **no horns.**

**Face:** Often a **pale vertical stripe** forehead toward nose; **dark charcoal** around large **rounded** eyes; **white muzzle rim**; **moist dark grey–black rhinarium**; **long stiff vibrissae** on muzzle and brow.

**Browsing (when mouth visible):** True bovid — **no upper incisors**; **hard upper dental pad**; **lower incisors** (and incisiform lower canine) against pad when stripping browse; tongue often **dark purplish-grey / blue-black**. Strips **small compound leaves** (e.g. **Vachellia / Senegalia-type** fine leaf), **Combretum**, not lawn grass.

**Habitat bokeh (South Africa — Waterberg / bushveld / thicket):** **Dappled shade**, mixed thorn shrub, **olive and grey-green** foliage, **pale bark**, russet dry grass, red earth — **not** European temperate forest, pine plantation, moss carpet, snow, misty fairy-tale woodland. Optional thicket cues: **spekboom** (*Portulacaria*), succulent tangled understory **where it reads Limpopo**, not Oregon coast.

**Photographic realism:** **Documentary wildlife still** — natural light (golden hour or soft thicket shade + **hard sun shafts** allowed in bokeh). **Canon / Nikon 400–600mm telephoto** look: **real depth of field**, subtle noise, **no plastic skin**, **no oversaturated neon grass**, **no AI smooth fur**, **no duplicated eyes**, **no floating horns**, **no wrong dental formula** (no buck teeth upper front). **No text, no watermark, no logos.**

**Web crop:** Sharp subject in **middle ~70% × ~75%**.

---

Copy each code block **whole** into your image tool. **Do not generate** site placeholder panes.

---

## 01 — Hero (full-screen header)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. High-quality JPEG or PNG (site uses `bushbuck-monograph-hero.jpg`).

PROMPT: Ultra-realistic documentary photograph, CLOSE-UP ONLY, 8:5 frame. Subject: mature male Cape bushbuck ram Tragelaphus sylvaticus — NOT buffalo, NOT kudu, NOT cattle. Head and thick short neck fill most of frame; swept-back keeled horns visible: horns grow backward along neck, heavily ridged dark bases, smoother toward forward-curving tips with ivory polish — single gentle twist only, never tall corkscrew. Ram pelage dark chocolate to near-black in shadow with crisp white cheek flash and pale forehead stripe; large dark-edged eye tack-sharp; moist black nose; long vibrissae. Shallow depth of field. Background ONLY soft bokeh of South African bushveld thicket — spekboom tones, acacia-type twigs, dappled sun discs. Lower third slightly darker for UI text. Natural color, slight fine grain, no HDR glow, no CGI. No people, no rifles, no blood, no dead animals, no text, no watermark.
```

**Optional negative:** buffalo, wildebeest, kudu spiral, nyala, eland, impala, deer, European forest, pine, snow, ewe with horns, cartoon, oversharpen, plastic fur, duplicate anatomy, watermark, lens-flare abuse.

**Save as:** `public/images/species/bushbuck/bushbuck-monograph-hero.jpg` (set `heroLocalExt` to `jpg` in `bushbuck.ts`)

---

## 02 — Intro figure (beside overview text)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square, documentary sharpness. Cape bushbuck Tragelaphus sylvaticus — NOT buffalo, NOT impala. Pick ONE: (A) Ram — dark coat macro with white flank spot geometry and sleek short hair; horn base in frame showing corrugation and keel, swept-back not corkscrew. (B) Ewe — warm chestnut coat, softer pale spotting, large rounded ear, absolutely hornless skull at edge of frame; feminine narrower muzzle. Telephoto 400mm aesthetic, natural ISO grain subtle. Thicket bokeh olive and tan. No full body, no wide scene. No text, no watermark.
```

**Optional negative:** buffalo, horns on female, kudu horns, corkscrew spiral, full body distant, European woods, cartoon fur, watermark.

---

## 03 — Panorama strip (wide slot — still **close-up**)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height).

PROMPT: CLOSE-UP ONLY, 16:9 — NOT a landscape vista, NO sky strip, NO horizon. Entire width filled by extreme macro of ONE Cape bushbuck Tragelaphus sylvaticus OR two adjacent bushbuck details. Species-true details only: swept keeled horn shafts crossing frame with bark-textured bases and ivory tips; OR paired dark eyes and charcoal eye masks with pale forehead stripe; OR horizontal band of flank showing white spots on dark ram pelage with individual hair texture. Explicitly NOT buffalo horn, NOT cattle, NOT kudu corkscrew. Background a smooth blur of thicket green and sun bokeh only. Photoreal, natural microcontrast, no collage seams, no text, no watermark.
```

**Optional negative:** buffalo, landscape panorama, skyline, tiny animal, kudu, nyala, forest postcard, pine, snow, watermark.

---

## 04 — Form: “The ram” (column image)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square. Mature male Cape bushbuck ram Tragelaphus sylvaticus — medium compact bovid, NOT kudu. Macro emphasis on horn morphology per species: horns swept back parallel to neck, strong longitudinal keels, deep corrugations at pedicle merging to smoother shaft, tips worn lighter; curvature is shallow “first loop” only. Include bit of dark ram fur and white neck collar or ear edge if in frame. Short dense coat, no shaggy generic antelope mane except possible lifted dorsal crest hairs if alert. Eye dark with pale surround. Natural thicket shade lighting. No ewe. No text, no watermark.
```

**Optional negative:** buffalo, kudu spiral, corkscrew, eland, full body, long straight impala horns, watermark.

---

## 05 — Form: “The ewe” (column image)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square. Adult female Cape bushbuck ewe Tragelaphus sylvaticus — hornless, NOT any bovid with horns. Coat lighter russet to chestnut; white markings present but softer and less graphic than ram; large rounded ear with fine fur; dark eye; narrow feminine muzzle with black moist rhinarium and vibrissae. Macro: eye and eyelashes OR velvety nose OR throat and cheek without horns in any edge of frame. Realistic skin and hair transitions, no porcelain. Bushveld bokeh. No text, no watermark.
```

**Optional negative:** horns, ram, buffalo, deer, full body small, cartoon, watermark.

---

## 06 — Form: horn reference (`bushbuck-horns`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: MACRO ONLY, square, studio-natural outdoor light. Paired horns on a living Cape bushbuck ram Tragelaphus sylvaticus (pedicle and hide may show at frame edge — do not depict detached skull plate or euro mount). Accurate morphology: two horns sweep backward, keeled ridges visible along length, basal third heavily textured like bark, distal third smoother, tips rounded-polished ivory-tan. Twist is subtle — NOT two full corkscrews like greater kudu. Scale believable ~30–45 cm arc for a good ram, not 1 m fantasy. Dry keratin microcracks OK. Dark slate horn base merging to hide. No blood, no broken gore. No text, no watermark.
```

**Optional negative:** buffalo horn, cattle horn, kudu, nyala, spiral staircase horns, metal props, full mounted trophy on wall, watermark.

---

## 07 — Ecology (beside range & diet)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square. Cape bushbuck Tragelaphus sylvaticus anatomy detail — thicket-adapted bovid, NOT buffalo foot. ONE of: dark slate small cloven hoof and narrow pointed track edge in red sand with a few grass stems; OR dark keratin dew claw above hoof with leg hair; OR ram flank macro showing white spot on dark pelage and sleek short guard hairs; OR ewe chestnut fur with subtler spot. Species proportions: neat small hoof, not massive bovid plate. Dappled light on fur. No full animal, no wide habitat. No text, no watermark.
```

**Optional negative:** buffalo, wildebeest, impala heart spoor exaggerated, full body, wide scene, cartoon, watermark.

---

## 08 — Feed wide (wide slot — **close-up**)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height).

PROMPT: CLOSE-UP ONLY, 16:9 horizontal. Cape bushbuck Tragelaphus sylvaticus — dedicated browser, NOT grazer on lawn, NOT buffalo muzzle. Extreme macro: muzzle and mouth stripping a twig of small pinnate acacia-type (Vachellia-like) leaves OR combretum broad leaf; thick mobile upper lip, black nose leather, long vibrissae. If teeth visible: correct bovid pattern — NO upper front teeth, instead contact of lower incisors with pale hard upper dental pad as animal pinches foliage; tongue dark purplish-grey possible at side of mouth. Shallow DOF; background creamy olive bushveld blur. Saliva fine gloss OK. No human hands. No text, no watermark.
```

**Optional negative:** buffalo, cattle chewing cud generic, upper incisors, beaver teeth, grass lawn close graze, kudu, full body, watermark.

---

## 09 — Rut / social (left column figure)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square. Two mature Cape bushbuck rams Tragelaphus sylvaticus — NOT buffalo sparring. Tight frame on: tips of both rams’ swept keeled horns nearly meeting; OR raised dorsal mane hairs bristling on dark neck with glandular skin texture visible; OR stiff high-stepping display showing white socks and dark cannon bones mid-stride — macro only, legs cut by frame edges. Horns remain bushbuck-like (back-swept, keeled), not long curling locks. No blood, no deep wounds. Natural motion blur minimal, high shutter. No text, no watermark.
```

**Optional negative:** buffalo, kudu locked horns wide shot, full bodies, ewes with horns, gore, cartoon dust cloud, watermark.

---

## 10 — Predation (wide slot — **close-up**)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height).

PROMPT: CLOSE-UP ONLY, 16:9. Choose ONE photoreal scene: (A) African leopard Panthera pardus — extreme tight crop on one amber eye and rosette fur, acacia thorn soft foreground, moist nose leather — sympatric predator of bushbuck; OR (B) Cape bushbuck ram Tragelaphus sylvaticus eye macro — horizontal pupil reflection, charcoal eye mask, white facial stripe fragment visible — NOT buffalo eye (no huge wet bovine globe with lashes like domestic cow). No kill, no blood pool, no tiger, no snow leopard. Natural fur clumping, individual whiskers. No text, no watermark.
```

**Optional negative:** buffalo, tiger, lion pride kill, blood, full jungle vista, cartoon cat, watermark.

---

## 11 — Hunting / fieldcraft (column image)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP ONLY, square. Still-hunt detail in South African thicket context. ONE of: binocular front lenses with scratched brass housing reflecting twisted green branches; OR gloved hand on magnesium focus wheel, cuff of neutral safari fabric; OR walnut rifle stock and blued steel receiver with scope ring Torx head in macro — hunting hardware, no species required. Finger never inside trigger guard. Dust and pollen on glass. Natural light, no studio cyclorama. No readable face, no text, no watermark.
```

**Optional negative:** finger on trigger, hero pose full person, TikTok thumbnail, cartoon, watermark.

---

## 12 — Trophy (wide slot — **close-up**)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height).

PROMPT: CLOSE-UP ONLY, 16:9. Living mature Cape bushbuck ram Tragelaphus sylvaticus — assessment portrait for hunting reference, NOT shoulder-mount on wall. Horizontal composition dominated by both horns: swept-back, keeled, corrugated bases, worn tips, believable length under ~45 cm visible arc — NOT kudu. Include ear tip and dark pelage with white marking fragment to anchor species. Eye alert, natural moisture. Soft thicket bokeh. No tape measure, no human hands, no dead animal. No text, no watermark.
```

**Optional negative:** buffalo, kudu, corkscrew, taxidermy mount, ewe, cartoon trophy glow, watermark.

---

## 13 — Rifle / optics (wide slot — **close-up**)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height).

PROMPT: CLOSE-UP ONLY, 16:9. Authentic hunting rifle macro: blued steel scope tube with faint ring marks, ocular bell edge, turret with click detents, OR bolt handle checkering and closed bolt face, OR wood grain with oil sheen and steel floorplate line. Finger outside trigger guard or not in frame. Background soft African bush brown-green bokeh. Real metal machining marks, no sci-fi rail clutter unless subtle. No logos readable, no text, no watermark.
```

**Optional negative:** AR-15 tactical, airsoft, finger on trigger, studio white infinity curve, watermark.

---

## 14 — Meat / camp (column image)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (perfect square).

PROMPT: CLOSE-UP / MACRO ONLY, square. Raw venison from small African antelope — visually lean Cape bushbuck Tragelaphus sylvaticus meat: deep burgundy, fine grain, minimal intramuscular marbling like beef wagyu. Macro slab or diced cubes on cast iron with coarse salt, rosemary needle in focus; OR honest field kit — carbon steel blade spine and linen. NOT beef porterhouse marbling, NOT pork, NOT supermarket styrofoam tray. Warm camp light, no gore pools, no flies. No text, no watermark.
```

**Optional negative:** beef marbling, pork, chicken, styrofoam tray, gore, cartoon steak, watermark.

---

## Reference: seed names

| # | Seed / stem |
|---|-------------|
| 01 | `bushbuck-monograph-hero` |
| 02 | `bushbuckmonintro` |
| 03 | `bushbuckmonopan` |
| 04 | `bushbuckmonoforma` |
| 05 | `bushbuckmonoformb` |
| 06 | `bushbuck-horns` |
| 07 | `bushbuckmonoeco` |
| 08 | `bushbuckmonofeed` |
| 09 | `bushbuckmonorut` |
| 10 | `bushbuckmonopred` |
| 11 | `bushbuckmonohunt` |
| 12 | `bushbuckmonotrophy` |
| 13 | `bushbuckmonorifle` |
| 14 | `bushbuckmonomeat` |

---

*Pixel sizes match `MonographMedia.tsx`. Horn language in this doc follows Cape bushbuck field morphology: **swept-back keeled horns with slight twist**, not kudu-type multi-spiral.*
