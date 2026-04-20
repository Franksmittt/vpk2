# Nyala monograph - AI image prompts (`/species/nyala`)

**Reference research:** `Nyala Field Notes for AI Design.txt` (taxonomy, extreme dimorphism, C1-C13, Waterberg background, cheat sheet).

**Site filenames:** **14** exports under `public/images/species/nyala/` (stems from `imageSeed: "nyala"` in `monoSeeds` plus `nyala-horns.jpg`). **Shot order is permuted** versus impala and blue wildebeest: **barely visible** uses the ecology stem, **hooves** uses the panorama stem (see table).

**Species target:** **Lowland nyala** *Tragelaphus angasii* (southern African thicket / riverine bushveld, Waterberg-style). **Not** mountain nyala *T. buxtoni* (Ethiopia, grey both sexes, different species). No recognised lowland subspecies for prompt scope.

---

## Shot vocabulary (13 animal types + 1 extra)

Same 13 animal shot types as other species; **nyala mapping to stems** is in the table below.

---

## READ FIRST - realism and background (every prompt)

**Realism first.** Wildlife documentary still: natural ISO grain, believable hide and hair direction, **no** plastic fur, **no** oversharpen, **no** HDR glow, **no** duplicated eyes or limbs, **no** generic **cervid** proportions.

**Condition:** **Healthy ordinary** wild nyala. **Not** starved, not grotesque parasite loads. **Not** fantasy spiral horns, not airbrushed lodge brochure polish.

**Background (estate-safe):** **Extreme shallow depth of field** (telephoto look **f/1.8–f/4** equiv). Background = **anonymous** warm olive-tan-red bokeh. **No** readable **fences**, **troughs**, **lodges**, **vehicles**, **signs**, **distinctive kopjes**. Thorn scrub and canopy may appear only as **soft colour and blob shapes**, not a map you could recognise.

**Species lock:** *Tragelaphus angasii*. **Thicket build:** subtle **downward slope from slightly raised rump toward withers** (not level plains-deer back, not gnu front-heavy slab, not kudu tall lanky shoulder hump). **Long slender legs**, **small delicate cloven** hooves. **Very large ovate ears** with **thick white inner fringe** (acoustic thicket adaptation).

**Extreme sexual dimorphism (critical):**

- **Bull:** heavy frame about **92–126 kg**, shoulder about **104–121 cm**; coat **slate-grey to charcoal-brown** (may show **subtle cool steely sheen** in harsh sun, **never** neon or metallic blue). **Shaggy dark ventral mane** from throat through chest and belly; **erectile white-to-grey dorsal crest** unbroken from head to tail root. **10–14** vertical white flank stripes often **faint, broken, or partly lost** in long guard hair. **Lower legs** stay **bright tawny / chestnut “socks”** with **sharp** transition from dark body; **white spot or band** on inner knee area. **Horns only on bulls:** rise from **massive ridged dark bases**, sweep **back** then **tight upward spiral** about **1.5–2** twists in **lyre** trajectory, outer curve about **60–83 cm**; **smooth ivory to pale yellow tips**; slight asymmetry and wear OK. **Bushy tail** dark above, **stark white** below (alarm flash when raised).

- **Ewe:** **55–68 kg**, shoulder about **90–97 cm**; coat **bright chestnut / russet**, **short sleek** hair; **10–18 crisp parallel vertical white stripes** on torso; **scattered white spots** lower flank and upper thigh. **Strictly hornless:** **smooth skull**, **no pedicles**, **no bumps**. **No** shaggy ventral mane. Short dark dorsal ridge along spine only. Face: **dark muzzle**, **white lips**, **white V chevron** between eyes, **two to three white cheek spots** below eyes.

- **Young bull mimicry:** until roughly **10–14 months** can match **ewe** palette and striping; do not invent adult bull pelage on a tiny animal.

**Mouth (when visible):** **No upper incisors**; **dark hard upper dental pad**; **small lower incisors** tear against pad; **long dark prehensile tongue**; wide diastema. **Never** upper front teeth.

**Eyes:** **Horizontal pupil**; **amber to chocolate-brown** iris; thick **upper** lashes; calm pose avoids huge human-style scleral show. Fear may show **slight** scleral flash at corners only.

**Confusion negatives:** **greater kudu** (taller, open corkscrew to about three twists, fewer fainter stripes, shoulder hump beard); **bushbuck** (compact, few spots or faint stripes, different horn); **impala** (tan, no body vertical stripes, lyrate impala horns); **waterbuck** (shaggy grey, **complete white rump ring**); **bongo** (both sexes horned, heavier forest bongo palette); generic deer, **branching antlers**.

**No text, no watermark, no logos.**

---

## Nyala: shot type to filename (permuted for this species)

| # | Shot type | Save as (`public/images/species/nyala/`) |
|---|-----------|---------------------------------------------|
| 1 | Full body | `nyalamonohero.jpg` |
| 2 | Eyes | `nyalamonintro.jpg` |
| 3 | Horns (bull only) | `nyala-horns.jpg` |
| 4 | Female (ewe) | `nyalamonoformb.jpg` |
| 5 | Male (bull) | `nyalamonoforma.jpg` |
| 6 | Eating | `nyalamonofeed.jpg` |
| 7 | Drinking | `nyalamonopred.jpg` |
| 8 | Barely visible | `nyalamonoeco.jpg` |
| 9 | Hooves | `nyalamonopan.jpg` |
| 10 | Coat | `nyalamonorut.jpg` |
| 11 | Front half from side | `nyalamonohunt.jpg` |
| 12 | Back half from side | `nyalamonotrophy.jpg` |
| 13 | Half face close-up | `nyalamonorifle.jpg` |
| 14 | Extra (meat) | `nyalamonomeat.jpg` |

*Stems match `monoSeeds` for `imageSeed` `"nyala"` and `${speciesId}-horns`. On the live page, ecology uses the `...monoeco` path and the intro-wide strip uses `...monopan`; this table assigns **08** and **09** to those paths on purpose so prompts stay species-specific without a code change.*

---

Copy each block **whole** into your image tool.

---

## 01 - Full body (`nyalamonohero.jpg`)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. JPEG or PNG.

PROMPT: Ultra-realistic documentary photograph. **Full body lowland nyala** *Tragelaphus angasii* (bull **or** ewe): entire animal readable, **thicket proportions**, **slight downslope from rump to withers**, **long fine legs**, small cloven hooves, **large ovate ears** with pale inner fringe. If **bull**: charcoal / slate coat, **heavy dark ventral mane** throat to belly, **white dorsal crest** line visible along spine, **tawny lower-leg socks** with clean break from dark body, **lyrate ridged horns** with pale tips (both visible or one partly occluded). If **ewe**: **bright chestnut** coat, **10–18 sharp vertical white stripes**, **no horns** smooth crown, **no** belly mane, white facial chevron and cheek spots. Bushy tail, dark above. **Healthy ordinary** individual, light red dust on socks OK. **Extreme shallow DOF**, background anonymous thicket bokeh only, no fences, lodges, or readable landmarks. Not kudu, not impala, not waterbuck ring, no text, no watermark.
```

---

## 02 - Eyes (`nyalamonintro.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic extreme close-up: **one eye** of **lowland nyala** *Tragelaphus angasii* filling frame. **Horizontal pupil**, deep **amber to chocolate-brown** iris, **thick dark upper eyelashes**, moist lid, dark periocular skin. **Precise white V chevron** visible on frontal bone between eyes (show half or full chevron as framing allows); **two or three clean white cheek spots** on the cheek below the eye, not random speckle. Calm animal: **no** huge round human sclera. If bull, horn base may enter edge only; if ewe, **smooth hornless** forehead. Background creamy canopy bokeh, f/2 look, tack-sharp iris. No vertical cat pupil, no neon eye glow, no text, no watermark.
```

---

## 03 - Horns - bull only (`nyala-horns.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **living nyala bull** *Tragelaphus angasii* **head with both horns** attached. Horns: **massive dark ridged bases**, sweep **backward** then **tight upward spiral** with about **1.5 to 2** twists, **lyre** trajectory (not kudu-wide corkscrew). Length along outer curve **about 60–83 cm**, believable wild wear: **ivory to pale yellow smooth tips**, minor asymmetry or shallow scratches OK. Coarse dark forehead and crest hairs at horn roots. Living skin at bases, not a skull mount. Background smooth neutral blur. **No branching antlers**, no horns on ewe, no fantasy metre-long spirals, no text, no watermark.
```

---

## 04 - Female (`nyalamonoformb.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **nyala ewe** *Tragelaphus angasii*: **strictly hornless**, **smooth crown** from forehead to nape (**no pedicles**, **no horn buds**). **Vibrant chestnut / russet** short glossy coat; **10–18 parallel vertical white stripes** on torso from dorsal line toward mid-flank, sharp stripe edges (not zebra zigzag); scattered white spots on lower flank and upper thigh. **White lips**, dark muzzle, **white V chevron** between eyes, **two or three white cheek spots**. **Slender neck**, **no** shaggy throat or belly mane; short dark dorsal ridge only. Large ears, white inner fringe. Background extreme bokeh. Not male charcoal mane, not kudu, not branching horns, no text, no watermark.
```

---

## 05 - Male (`nyalamonoforma.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **nyala bull** *Tragelaphus angasii*: **slate-grey to charcoal-brown** coarse coat with **subtle cool sheen** in direct sun (**not** electric blue metal paint). **Heavy shaggy dark ventral mane** hanging from throat across chest and belly; **prominent white-to-grey dorsal crest** from head to tail root. **Tawny chestnut lower legs** as bright socks with **abrupt** colour break at knee / upper leg. Subdued **10–14** flank stripes may read faint or broken through long hair. **Thick muscular neck**, mature **lyrate ridged horns** with pale tips entering frame. Minor thorn scars on neck or flank OK at low intensity. Background anonymous warm bokeh. Not female russet high-contrast striping, not kudu, no text, no watermark.
```

---

## 06 - Eating (`nyalamonofeed.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **browsing or grazing nyala** *Tragelaphus angasii*: neck stretched to **pluck leaves** from low thorn twigs or head lowered to **crop short grass**; **mobile prehensile lips** selecting vegetation. If mouth open: **hard dark upper dental pad**, **no upper front teeth**, **small lower incisors** pressing plant matter against pad, **dark tongue** helping draw foliage, visible **diastema**. Bull shows horn bases and mane edge; ewe shows stripes and smooth crown. Dry tufted **C4** grass feel, thorn twigs soft in background blur. No horse upper teeth, no golf-course lawn, no text, no watermark.
```

---

## 07 - Drinking (`nyalamonopred.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **drinking nyala** *Tragelaphus angasii* at water: **forelegs slightly splayed**, head lowered; **muzzle barely breaks** surface (**lip-suction** drinking, **not** dog tongue lapping). **Wet mystacial vibrissae**, **gentle concentric ripples** at lips only, no chaotic splashing, snout **not** submerged to eyes. **Large ears rotated back or sideways**, alert while drinking; eyes scanning past waterline. Soft abstract reflections. Background and far bank **fully blurred**. Bull or ewe sex-consistent pelage and horns. No waterbuck rump ring, no text, no watermark.
```

---

## 08 - Barely visible (`nyalamonoeco.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **thicket fragment**: **lowland nyala** *Tragelaphus angasii* **almost hidden** in dense **thorn scrub** and dappled shade. **One sharp anchor** only (e.g. **striped russet flank** with vertical white lines, **amber eye** catchlight, **ivory horn tip** in leaves, or **pale ear fringe**). Vertical stripes must **merge with vertical stems** as camouflage, not read as a cut-out sticker. High-contrast **dappled canopy light**, foreground twigs soft OOF, extreme shallow DOF. **No** full unobstructed standing animal, **no** branches growing from fur chimera, no text, no watermark.
```

---

## 09 - Hooves (`nyalamonopan.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **wide low-angle**: **nyala** *Tragelaphus angasii* **small dark cloven hooves** and **narrow heart-shaped** impressions in **red to yellow-brown sandy soil** (Waterberg feel), scale about **5–6 cm** track length implied. **Two main pointed toes**, **rear dewclaws** visible above fetlock on hind track if in frame; short sleek **tawny** leg hair to coronary band, **no** heavy horse feathering. Optional **registering gait** hint (hind print overlapping fore). **No head** required. Shallow DOF, background warm blur. Not solid horse hoof, not bird feet, no text, no watermark.
```

---

## 10 - Coat (`nyalamonorut.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **coat macro** of **nyala** *Tragelaphus angasii*: **directional hair flow**; **ewe** = short fine glossy **chestnut** with **crisp unpigmented white stripe hairs** (sharp follicle boundary, not airbrushed chalk); **bull** = longer coarser **charcoal guard hairs** with cool sheen where light grazes curve, ventral mane hairs **separate strands** not a solid black slab. Show **white dorsal crest** hairs stiffer than flank if in frame. No plastic skin, no painted zebra chaos, no text, no watermark.
```

---

## 11 - Front half from the side (`nyalamonohunt.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **strict side view, front half** of **nyala** *Tragelaphus angasii*: **deep chest**, clean shoulder, foreleg vertical; **abrupt shift** from dark body to **tawny socks** on lower leg; **white patch or band on inner knee** if visible. If **bull**: **shaggy ventral mane** cascading from jaw through throat, **horn arc** in profile from brow (origin above eye, not from neck). If **ewe**: striped russet torso, **hornless** forehead, chevron on face. **Crop** before mid-back. Background extreme bokeh. No sunken chest, no horns from neck, no text, no watermark.
```

---

## 12 - Back half from the side (`nyalamonotrophy.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **side view, rear half** of **nyala** *Tragelaphus angasii*: **sloping croup**, **muscled haunch**, hind legs with **correct hock angle** (no reversed joint); **organic scatter** of white spots on upper thigh (**not** a perfect grid). **Tawny socks** below hock with sharp transition from body colour. **Bushy tail**: dark dorsal hair at rest **or** tail raised showing **brilliant white underside** as herd flash. **No head** in frame unless soft OOF. Background bokeh only. Not hairless rat tail, no text, no watermark.
```

---

## 13 - Half face close-up (`nyalamonorifle.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **half-face macro** of **nyala** *Tragelaphus angasii*: **vertical split** with one **nostril**, one **eye**, half **muzzle**; **moist granular nose leather**; **stiff mystacial vibrissae** in irregular fan arrays from visible follicles (**not** thin cat whiskers). Show portion of **white chevron** and **cheek spots** under eye. Thick upper lashes, horizontal pupil. Bull: one **ridged horn** edge in frame; ewe: **zero horn** material. Background warm cream bokeh. No plastic muzzle, no perfect symmetry, no rifle in frame, no text, no watermark.
```

---

## 14 - Extra: meat (`nyalamonomeat.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **raw nyala venison**, deep red **lean** fine-grained game meat, modest marbling; coarse salt, cracked pepper on **cast iron** or dark wood; warm kitchen light; shallow DOF, background dark blur. No styrofoam tray, no gore, no text, no watermark.
```

---

## After export

1. Create folder `public/images/species/nyala/` if missing.  
2. Save files using the table names.  
3. In `data/monographs/content/nyala.ts`, extend `monoSeeds(s, true, { … })` with `heroLocalBase: "/images/species/nyala"`, `heroLocalExt: "jpg"`, and the same pattern for every stem you export (mirror `impala.ts` / `blue-wildebeest.ts`).

---

*Next species briefs can reuse the same 13 shot labels with a **different permutation** on the 14 stems.*
