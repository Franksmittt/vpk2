# Gemsbok monograph - AI image prompts (`/species/gemsbok`)

**Reference research:** `Gemsbok AI Image Generation Field Notes.txt` (taxonomy, confusion pairs, low dimorphism, C1-C13, Kalahari light, background discipline).

**Site filenames:** **14** exports under `public/images/species/gemsbok/` (stems from `imageSeed: "gemsbok"` in `monoSeeds` plus `gemsbok-horns.jpg`). **Shot order is permuted** versus impala, blue wildebeest, and nyala: **coat macro** uses the ecology stem, **barely visible** uses the panorama stem, **hooves** uses the rut stem (see table).

**Species target:** **Gemsbok** *Oryx gazella* (southern African / estate and Kalahari-Karoo edge). **Not** scimitar-horned oryx *Oryx dammah* (deep curved horns, different palette). **Not** Arabian oryx *Oryx leucoryx* (smaller, often very pale). **Not** beisa oryx *Oryx beisa* as a stand-in for SA “gemsbok” marketing unless you explicitly want East African reference. Baseline phenotype: **fawn-grey to taupe** coat, **sandy ear interiors** (southern standard); steer away from Angolan **stark white ear interior** unless that is your brief.

---

## Shot vocabulary (13 animal types + 1 extra)

Same 13 animal shot types as other species; **gemsbok mapping to stems** is in the table below.

---

## READ FIRST - realism and background (every prompt)

**Realism first.** Wildlife documentary still: natural ISO grain, believable mass and hide, **no** plastic fur, **no** oversharpen, **no** HDR glow, **no** duplicated limbs, **no** stretched “centaur” torsos, **no** delicate gazelle proportions on an animal this heavy.

**Condition:** **Healthy ordinary** wild gemsbok. **Not** ribby, not a fantasy horn machine. Horns **long and straight** but within **biological** bands (see dimorphism below).

**Background (estate-safe):** **Extreme shallow depth of field** where portraits demand it (about **f/2–f/4** telephoto look). Background = **anonymous** red-sand, bleached grass, and soft thorn-tree blobs. **No** readable **fences**, **borehole windmills** as hero props, **lodges**, **vehicles**, **signs**, or **distinctive mountain silhouettes**. Open savanna may appear only as **colour wash**, not a geotagged panorama.

**Species lock:** *Oryx gazella*. **Heavy horse-like build**, **front quarters larger** than hind; **subtle** downslope from withers toward rump (**never** gnu-grade plunging back). **Long flowing black tail** past hocks (**not** fluffy white deer scut, **not** short tufted cow tail). **Geometric black-and-white facial mask** on adults. **Fawn-grey / taupe** upper body, **clean white** underbelly, **continuous black lower-flank stripe** separating fawn above from white below. **Black bands on upper front of all four legs** just above knees/hocks; **lower legs bright white “socks”**. Narrow **black dorsal stripe** to tail root. **Ears** long, pointed, slightly leaf-shaped; **sandy** inner fur, **dark** outer rim.

**Horns (critical):** **Both sexes horned at all ages past calf stage.** **Never** hornless adults. Horns **long, nearly straight**, **V-shaped** from crown, bases **close together** on top of skull; **heavy annulations** on lower **half to two-thirds**, **smooth dark tips**; matte grey-black keratin, dust in ridges OK. Overall curve length often cited about **85–125 cm** along the arc for field-class animals; **dimorphism:** **bulls** tend **shorter, thicker** bases (roughly **~84–97 cm** class in many texts, rarely extreme fantasy); **cows** often **longer, narrower** horns, exceptional cows toward **~125 cm** with possible **slight** tip warp, still **fundamentally straight spears**. **No** scimitar deep curve, **no** sable sickle, **no** kudu corkscrew, **no** branching antlers.

**Dimorphism prompts:** Bull = **thicker neck**, tougher skin folds, **heavier horn bases**, more **front-loaded** mass. Cow = **slightly lighter frame**, **longer thinner** horns; still full mask and leg bands.

**Eyes:** **Transverse oval (horizontal) pupil**; deep brown iris; eye **embedded in black mask stripe** through orbit; long **dark** lashes. Calm: **no** full white scleral ring.

**Mouth:** **No upper incisors**; **hard dental pad**; **lower incisors**; prehensile lips; tearing jerk. **Never** upper front teeth.

**Calves (if a calf appears):** **Warm brownish-tan**, **no** adult mask or bold flank graphics yet; **tiny horn buds** only when age-appropriate. **Do not** shrink an adult-mask animal and call it a calf.

**Confusion negatives:** roan (shorter curved horns, roan coat, different ears), sable (sickle horns, standing mane, black body), eland (dewlap, spiral horns, hump), wildebeest (beard, horizontal cow-like horns, heavy down-slope), hartebeest (elongated face, heart-shaped horn set), springbok (small, white rump pocket, lyre horns, side stripe read).

**No text, no watermark, no logos.**

---

## Gemsbok: shot type to filename (permuted for this species)

| # | Shot type | Save as (`public/images/species/gemsbok/`) |
|---|-----------|-----------------------------------------------|
| 1 | Full body | `gemsbokmonohero.jpg` |
| 2 | Eyes | `gemsbokmonintro.jpg` |
| 3 | Horns (both sexes) | `gemsbok-horns.jpg` |
| 4 | Female (cow) | `gemsbokmonoformb.jpg` |
| 5 | Male (bull) | `gemsbokmonoforma.jpg` |
| 6 | Eating | `gemsbokmonofeed.jpg` |
| 7 | Drinking | `gemsbokmonopred.jpg` |
| 8 | Coat | `gemsbokmonoeco.jpg` |
| 9 | Barely visible | `gemsbokmonopan.jpg` |
| 10 | Hooves | `gemsbokmonorut.jpg` |
| 11 | Front half from side | `gemsbokmonohunt.jpg` |
| 12 | Back half from side | `gemsbokmonotrophy.jpg` |
| 13 | Half face close-up | `gemsbokmonorifle.jpg` |
| 14 | Extra (meat) | `gemsbokmonomeat.jpg` |

*Stems match `monoSeeds` for `imageSeed` `"gemsbok"` and `${speciesId}-horns`. Ecology and rut slots on the page therefore carry **coat** and **hooves** content for this species by design.*

---

Copy each block **whole** into your image tool.

---

## 01 - Full body (`gemsbokmonohero.jpg`)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. JPEG or PNG.

PROMPT: Ultra-realistic documentary photograph. **Full body gemsbok** *Oryx gazella* (bull **or** cow): entire animal, **heavy muscular** frame, **front-heavy** but **subtle** wither-to-rump slope (**not** wildebeest plunge). **Adult** shows **bold black-and-white facial mask**, **fawn-grey to taupe** body, **white underbelly**, **black lower-flank stripe** dividing fawn from white, **black leg bands** above knees/hocks, **long white lower legs**, **long black horse-like tail** past hocks. **Both sexes horned:** long **straight rapier** horns in **V** from crown, **ridged lower two-thirds**, smooth tips; cow horns **longer and thinner** feel, bull **thicker bases** and slightly shorter arc on average. **Large pointed ears** forward or scanning. Red dust on socks OK. **Extreme shallow DOF**, background soft red sand and pale grass bokeh only. No scimitar curve, no hornless adult, no sable mane, no text, no watermark.
```

---

## 02 - Eyes (`gemsbokmonintro.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic extreme close-up: **one eye** of **gemsbok** *Oryx gazella* dominating frame. **Horizontal transverse-oval pupil**, deep brown iris, **thick dark upper lashes**, lid pigment dark. Eye sits **inside continuous black mask stripe** from horn base through orbit to cheek (**no** white fur ring around orbit). Calm: soft lid, **no** huge human sclera. Horn base may touch frame edge. Background creamy bokeh, f/2.8 look, tack-sharp on iris and mask hair boundary. No round pupil, no vertical cat slit, no text, no watermark.
```

---

## 03 - Horns - both sexes (`gemsbok-horns.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **living gemsbok** *Oryx gazella* **head with both horns** from crown. Horns **straight spears** in narrow **V**, bases **close** on coronal ridge, **deep horizontal annulations** on lower two-thirds fading to **smooth sharp** dark tips; matte grey-black keratin, fine dust in grooves, small tip chips OK, slight natural asymmetry OK. **Cow version:** visibly **longer, narrower** shafts vs **bull** with **massively thick** ridged bases and slightly shorter overall arc on average. **Never** hornless, never branching, never deep scimitar or sable sickle, no unihorn merge, no text, no watermark.
```

---

## 04 - Female (`gemsbokmonoformb.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **gemsbok cow** *Oryx gazella*: **horned** (long, relatively **slender** straight horns, exceptional length believable but not sci-fi). Slightly **less front-heavy** than old bull; neck muscular but **not** extreme armour folds unless mature. Full **black-and-white mask**, fawn-grey body, white belly, leg bands and socks, long black tail. Optional soft herd bokeh. **Never** polled female, never thick bull-only bases on a slight frame, no text, no watermark.
```

---

## 05 - Male (`gemsbokmonoforma.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **gemsbok bull** *Oryx gazella*: **massive thick neck** with tough skin, **deep chest**, **heavily annulated shorter** straight horns than cow average, **thick bases**. Full mask, matte dusty coat, red sand on legs and horn ridges. Subtle healed neck scars OK. Stoic alert posture, ears forward. Background anonymous warm blur. No bison dewlap, no shoulder hump eland, no fantasy ultra-long thick horns, no text, no watermark.
```

---

## 06 - Eating (`gemsbokmonofeed.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **grazing or browsing gemsbok** *Oryx gazella*: **forelegs splayed** when grazing low; **prehensile lips** and tongue selecting dry grass or thorn browse; if mouth visible show **lower incisors** on **dark hard upper dental pad**, **no upper front teeth**, **diastema**. Horns clear of ground geometry. Dry **yellow-bleached** tuft grass or **camel thorn** twigs soft in background. No human smile teeth, no floating grass through muzzle, no text, no watermark.
```

---

## 07 - Drinking (`gemsbokmonopred.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **drinking gemsbok** *Oryx gazella*: **forelegs markedly splayed** or deep knee bend to lower long neck; **muzzle breaks** water with **concentric ripples**, **stiff wet vibrissae**; **ears swivelled back or sideways** alert. Long horns stay **rigid** (parallel to ground or slight rise), **not** rubber-bent into water. Soft reflections, far bank blur. No mirror-flat water, no submerged eyes, no text, no watermark.
```

---

## 08 - Coat (`gemsbokmonoeco.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **coat macro** of **gemsbok** *Oryx gazella*: **short coarse** hair, **matte dusty** (fine red sand in guard hairs), **fawn-grey** dorsal transitioning to **clean white** ventral along a **sharp black horizontal lower-flank stripe** (not vertical zebra bars). **Black foreleg bands** above white sock zone if in frame. Show **individual hair direction** and crisp pigment boundaries. No metallic gloss, no airbrushed stripe, no text, no watermark.
```

---

## 09 - Barely visible (`gemsbokmonopan.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **environmental slice**: **gemsbok** *Oryx gazella* **half lost** in **bleached tall grass** and/or **strong heat shimmer** above red sand; body mid-tones **merge** with grass colour while **mask and horn lines** stay readable above grass line. Optional mirage **optical** warp on lower legs (**not** melted anatomy). One razor anchor (eye in mask, horn tips, ear outline). Extreme shallow DOF, foreground grass soft. No neon outline subject, no anatomy fused into grass, no text, no watermark.
```

---

## 10 - Hooves (`gemsbokmonorut.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **gemsbok** *Oryx gazella* **large dark cloven hooves** on **red sand**; **two main toes**, **broad** for sand (bigger than woodland nyala feel); **sharply pointed front**, **heart-shaped** track impression; matte dusty keratin, small **dewclaws** above hoof may show on hind. Short white leg fur meeting coronary band. Shallow DOF. Not single horse hoof, not wildebeest-round print, no text, no watermark.
```

---

## 11 - Front half from the side (`gemsbokmonohunt.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **strict side view, front half** of **gemsbok** *Oryx gazella*: **heavy neck** with short **dark bristly dorsal mane** from horn base toward shoulders; **black stripe** from throat under jaw through shoulder then **horizontal** along flank; **thick forelegs** with **black band** above **white sock**; horns emerge from **crown** angling **back** in straight lines (**not** from brow mid-face). Crop before mid-back. Background bokeh. No giraffe neck, no flowing horse mane, no text, no watermark.
```

---

## 12 - Back half from the side (`gemsbokmonotrophy.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **side view, rear half** of **gemsbok** *Oryx gazella*: **muscled haunch**, fawn-grey rump with **pale rear patch** where research notes lighter rear; **white belly** meeting fawn and **black flank stripe** termination clean (**not** muddy gradient). **Long black tail** dense past hocks (**not** deer scut). Hind legs with upper dark markings and **white lower legs**. Head out of frame or soft OOF. No short white tail, no text, no watermark.
```

---

## 13 - Half face close-up (`gemsbokmonorifle.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **half-face macro** of **gemsbok** *Oryx gazella*: **vertical split** showing **white muzzle base**, **bold black central nose stripe**, black band through **eye** with **horizontal pupil**, and cheek connection under chin; **dark granular nose leather**; **stiff sparse vibrissae** in organic rows from muzzle (**not** chaotic scribbles). Hair-level **organic** black-white boundaries. Cornea with soft sky or heat shimmer reflection. No vector-sharp paint edges, no plastic skin, no rifle in frame, no text, no watermark.
```

---

## 14 - Extra: meat (`gemsbokmonomeat.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **raw gemsbok venison**, deep red **lean** muscle, fine grain; coarse salt, cracked pepper on **cast iron** or wood; warm kitchen light; shallow DOF, dark background blur. No styrofoam, no gore, no text, no watermark.
```

---

## After export

1. Create folder `public/images/species/gemsbok/` if missing.  
2. Save files using the table names.  
3. In `data/monographs/content/gemsbok.ts`, extend `monoSeeds(s, true, { … })` with `heroLocalBase: "/images/species/gemsbok"`, `heroLocalExt: "jpg"`, and the same pattern for every stem you export (mirror `nyala.ts` / `impala.ts`).

---

*Next species briefs can reuse the same 13 shot labels with a **different permutation** on the 14 stems.*
