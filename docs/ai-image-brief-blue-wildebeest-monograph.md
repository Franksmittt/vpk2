# Blue wildebeest monograph - AI image prompts (`/species/blue-wildebeest`)

This doc is the **blue wildebeest** test set. For other species we will **reorder** which shot type lands on which file stem so every species page does not feel like the same template (e.g. image 2 will not always be “eyes”).

**Reference research:** `Blue Wildebeest Visual Research for AI.txt` (morphology, horns on both sexes, coat, gait).

**Site filenames:** Still **14** exports under `public/images/species/blue-wildebeest/` so nothing breaks in `monoSeeds`. The **13-shot vocabulary** is mapped to stems in the table below; slot **14** stays **meat / camp** (culinary, not an animal beauty pass).

---

## Shot vocabulary (13 animal types + 1 extra)

Use this language when briefing generators across species (order will change per animal):

1. Full body shot  
2. Eyes  
3. Horns  
4. Female  
5. Male  
6. Eating  
7. Drinking  
8. Hooves  
9. Barely visible (partial animal, thicket, silhouette fragments)  
10. Coat (pelage / brindle / hair texture as the subject)  
11. Front half from the side (shoulder hump, foreleg, chest, head forward of ribcage)  
12. Back half from the side (loin, haunch, hind leg, tail root)  
13. Full close-up of **half** the face (one eye, one nostril, half muzzle, split frame)  
14. **Extra (this species):** meat / camp (venison)

---

## READ FIRST - realism and background (every prompt)

**Realism is the priority.** Photograph should read as **real wildlife still**, not illustration, not plastic fur, not oversharpened HDR, not duplicated eyes or legs.

**Condition:** **Healthy ordinary** individual. **Not** ribby, not diseased, not fly-blown. **Not** magazine “world record” gloss, not wet-market perfect symmetry, not show-ring styling.

**Background (critical for estate marketing):** Treat background as **almost irrelevant noise**. Prefer **subject isolation**: long lens, **very wide aperture look** (equivalent to **f/1.8–f/2.8** on full frame at long focal length), **razor-thin depth of field** so only the animal or a slice of it is sharp. Background must be **anonymous soft bokeh blobs** (grey, olive, tan, warm cream). **No** readable **fence lines**, **gates**, **water troughs**, **buildings**, **vehicles**, **signs**, **distinctive kopjes** that imply one specific farm. **No** wide scenic “postcard savanna” where a guest could say “your place looked like this picture but it does not.” If environment must appear, keep it **so blurred** it only suggests “dry African bush” without geography.

**Species lock:** **Blue wildebeest** *Connochaetes taurinus*, southern **brindled** gnu: slate-grey coat, **soft dark vertical brindle** on neck and shoulders (merged shadow bands, not zebra stripes), **black mane**, **black beard** (not eastern white-bearded form). **Not** black wildebeest, buffalo, cattle, golden morph, hartebeest.

**Horns on adults:** Bulls and cows are **horned**. Whenever **skull or full head** is in frame, **both horns** must read as present (one may be partly hidden behind head or brush, but do not output hornless adults). **Hooves / haunch / meat-only** frames may omit horns. Horn shape: **smooth**, **parenthetical** (out, up, tips slightly in); bull **boss**, cow **slimmer shorter** horns.

**Negatives to paste often:** hornless gnu, cattle, buffalo, plastic skin, oversharpen, HDR glow, readable fence, building, vehicle, logo, watermark, text, cartoon, duplicated anatomy, magazine trophy polish, emaciated ribs.

**No text, no watermark, no logos** in frame.

---

## Blue wildebeest: shot type to filename (this species only)

| # | Your shot type | Save as (`public/images/species/blue-wildebeest/`) |
|---|------------------|------------------------------------------------------|
| 1 | Full body | `wildebeestbluemonohero.jpg` |
| 2 | Eyes | `wildebeestbluemonintro.jpg` |
| 3 | Horns | `blue-wildebeest-horns.jpg` |
| 4 | Female | `wildebeestbluemonoformb.jpg` |
| 5 | Male | `wildebeestbluemonoforma.jpg` |
| 6 | Eating | `wildebeestbluemonofeed.jpg` |
| 7 | Drinking | `wildebeestbluemonopred.jpg` |
| 8 | Hooves | `wildebeestbluemonoeco.jpg` |
| 9 | Barely visible | `wildebeestbluemonorut.jpg` |
| 10 | Coat | `wildebeestbluemonopan.jpg` |
| 11 | Front half from side | `wildebeestbluemonohunt.jpg` |
| 12 | Back half from side | `wildebeestbluemonotrophy.jpg` |
| 13 | Half face close-up | `wildebeestbluemonorifle.jpg` |
| 14 | Extra (meat) | `wildebeestbluemonomeat.jpg` |

*Note: stem `...rifle` is used by the site for a wide figure in the rifle block; for blue gnu we are using that file for **half-face** content until we add a dedicated second column in code. Predation section is hidden on the page but **07 drinking** still has a valid path for reuse later.*

---

Copy each block **whole** into your image tool.

---

## 01 - Full body (`wildebeestbluemonohero.jpg`)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. JPEG or PNG.

PROMPT: Ultra-realistic documentary photograph. **Full body** mature **blue wildebeest** *Connochaetes taurinus* (southern brindled gnu) standing on **anonymous** dry bushveld: **entire animal** visible from **hooves through horn tips**, **both horns** present, **parenthetical** curve, bull or cow **average healthy condition** (not starved, not showpiece). **Front-heavy** silhouette, shoulder hump, sloping back, fine legs. **Extreme shallow depth of field:** only the gnu plane tack-sharp; background **obliterated** into soft grey-olive-tan bokeh discs, **zero** readable fences, troughs, buildings, or horizon detail. Long-lens compression look (400–600mm), natural grain, no HDR, no plastic fur. No text, no watermark.
```

---

## 02 - Eyes (`wildebeestbluemonintro.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic extreme close-up: **one eye** of **blue wildebeest** *Connochaetes taurinus* filling most of frame. **Horizontal oval pupil**, warm brown iris, moist lid, fine lashes; hint of **iridic granules** if natural. Small slice of grey cheek and **preorbital slit** may show. **Both horn bases** slightly visible at **top edge** of frame so species is not hornless cattle. Background **only** creamy bokeh, no texture. f/1.8–f/2 look, tack eye, everything else melts. No text, no watermark.
```

---

## 03 - Horns (`blue-wildebeest-horns.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **both horns** still on living **blue wildebeest bull** *Connochaetes taurinus*. **Smooth grey-black keratin**, **parenthetical** sweep, **bossed bases** at forehead; believable field scale, not buffalo-wide fantasy. Sliver of forehead skin and mane for context. Background **smooth neutral blur only**. Natural micro-scratches on horn, no euro mount, no blood. No text, no watermark.
```

---

## 04 - Female (`wildebeestbluemonoformb.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **blue wildebeest cow** *Connochaetes taurinus*: **both horns visible**, slimmer and shorter than a bull, **no** heavy fused boss. Finer neck, calm **horizontal pupil**, black beard present but less massive than old bull. **Average healthy** body, light dust OK. Background **extreme bokeh** only (no readable landscape). Not hornless, not cattle. No text, no watermark.
```

---

## 05 - Male (`wildebeestbluemonoforma.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **blue wildebeest bull** *Connochaetes taurinus*: **both horns**, **boss** mass, black mane and beard, broad muzzle, brindle on shoulder edge. **Strong but ordinary** mature bull, not CGI “super gnu.” Background **razor-thin DOF**, anonymous soft blobs. No black wildebeest, no buffalo. No text, no watermark.
```

---

## 06 - Eating (`wildebeestbluemonofeed.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **grazing** **blue wildebeest** *Connochaetes taurinus*: head lowered, **broad muzzle** on **short cropped buff grass**; thick upper lip; **lower incisors** against **pale dental pad** if mouth slightly open (no upper front teeth). **Both horn bases** visible in **upper frame** because head is tipped down. Foreground grass blades may blur into lens. Background **only** soft out-of-focus earth and colour wash, **no** identifiable structures. Natural light, no neon green. No text, no watermark.
```

---

## 07 - Drinking (`wildebeestbluemonopred.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **blue wildebeest** *Connochaetes taurinus* **drinking**; **muzzle and lips** break calm water with **tight circular ripples**; wet whiskers, flared nostrils. **Reflection** soft and abstract. **Horn bases** visible above waterline at frame top corners. Background beyond water surface is **total blur** (no far shore detail, no buildings). Healthy animal, average condition. No text, no watermark.
```

---

## 08 - Hooves (`wildebeestbluemonoeco.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **blue wildebeest** *Connochaetes taurinus* **cloven hooves** in **fine red-brown dust** with a few dry grass stems; narrow **heart-shaped** track read; optional **dewclaw** nub above fetlock. **No head, no horns** in frame. Shallow DOF, background is same dust blur only. Not horse shoe, not buffalo plate foot. No text, no watermark.
```

---

## 09 - Barely visible (`wildebeestbluemonorut.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **partially hidden** **blue wildebeest** *Connochaetes taurinus* in **dense acacia-type thicket**: fragments only (shoulder brindle strip, one eye, slice of muzzle, **horn shaft** through branches). Most of frame is **out-of-focus twigs**; animal feels **almost concealed**. **Both horns** must still be **implied or partly visible** (no hornless gnu). No wide vista, no sky strip, no fence. No text, no watermark.
```

---

## 10 - Coat (`wildebeestbluemonopan.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **horizontal texture study** of **blue wildebeest** *Connochaetes taurinus* **coat**: short slate-grey hair, **soft vertical brindle** bands on shoulder reading like shadow folds, individual guard hairs and dust specks tack-sharp across **full width** of frame. **No** sky horizon, **no** landscape; optional **extreme edge** of flank only (no full head required). If head edge intrudes it stays blurred. Background is smooth colour bokeh only. No text, no watermark.
```

---

## 11 - Front half from the side (`wildebeestbluemonohunt.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **side view, front half** of standing **blue wildebeest** *Connochaetes taurinus*: **shoulder hump**, deep chest, foreleg column, neck, head with **both horns** in profile; **cut or soft fade** before mid-back so **hindquarter not the story**. **Extreme separation** from background (anonymous bokeh only). Average condition bull or cow. No text, no watermark.
```

---

## 12 - Back half from the side (`wildebeestbluemonotrophy.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **side view, rear half** of **blue wildebeest** *Connochaetes taurinus*: **loin, haunch, hind legs**, tail root and **black tail brush**; **no head in frame** (horns N/A). Skin and muscle tone **healthy ordinary**, slight dust on coat. Forequarter **out of frame** or heavily blurred. Background **extreme bokeh** only. No text, no watermark.
```

---

## 13 - Half face close-up (`wildebeestbluemonorifle.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **half-face** close-up of **blue wildebeest** *Connochaetes taurinus*: **vertical split composition** so only **one eye**, **one nostril**, half of **broad muzzle**, and **one horn** dominate; far side of face falls into shadow or blur. **Horizontal pupil** sharp. Background **cream bokeh only**. No rifle, no scope (this filename is a site slot only). No text, no watermark.
```

---

## 14 - Extra: meat (`wildebeestbluemonomeat.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **raw wildebeest gnu venison**, deep burgundy lean muscle, fine grain, **no** wagyu marbling; coarse salt on **cast iron** or wooden board; warm camp kitchen light; shallow DOF, background **dark soft blur** only. No styrofoam tray, no gore, no flies, no text, no watermark.
```

---

## After export

Drop files into `public/images/species/blue-wildebeest/` using the names in the table. `data/monographs/content/blue-wildebeest.ts` should keep `*LocalBase: "/images/species/blue-wildebeest"` and `*LocalExt: "jpg"` for each stem you use.

---

*Other species: same 13-shot vocabulary, **permute** which shot maps to which stem so image order feels bespoke per animal.*
