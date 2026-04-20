# Red hartebeest monograph - AI image prompts (`/species/red-hartebeest`)

**Reference research:** `AI Image Prompt Field Notes_ SA Wildlife.txt` (Species 2: *Alcelaphus buselaphus caama*, confusion matrix, cursorial anatomy, Highveld background).

**Site filenames:** **14** exports under `public/images/species/red-hartebeest/` (stems from `imageSeed: "hartebeest"` in `monoSeeds` plus `red-hartebeest-horns.jpg`). **Shot order is permuted:** **coat macro** uses the ecology stem, **barely visible** the panorama stem, **hooves** the rut stem (see table).

**Species target:** **Red hartebeest** *Alcelaphus buselaphus caama* (southern African Highveld / open dry savanna). **Not** tsessebe (shorter crescent horns, purplish compact build). **Not** blesbok / bontebok (**white** facial blaze, not **black** caama blaze). **Not** wildebeest (beard, parenthetical horns, different back). **Not** gemsbok (facial mask geometry, straight spear horns from crown, level back).

---

## Shot vocabulary (13 animal types + 1 extra)

Same 13 animal shot types as other species; **red hartebeest mapping to stems** is in the table below.

---

## READ FIRST - realism and background (every prompt)

**Realism first.** Wildlife documentary still: believable **high-withers cursorial** anatomy, **no** “corrected” level horse back, **no** shortened cartoon face, **no** plastic sheen.

**Condition:** **Healthy ordinary** wild red hartebeest. **Not** emaciated, not a fantasy horn spread.

**Background (estate-safe):** **Open horizon**, dry **golden** or **red-brown** grass (Themeda-type feel), **sparse** scrub at most. **Extreme shallow DOF** for tight portraits. **No** dense forest hero background, **no** muddy riparian as default, **no** readable fences or buildings.

**Species lock:** *A. b. caama*. **Pronounced high withers**, **backline slopes steeply down** to lower rump (**signature** silhouette). **Exceptionally long narrow face** with **black blaze** on forehead and nose. **Rich red-brown** short **sleek shiny** coat; **glossy black** markings on **front of shoulders** and **forelegs**, **high black flashes** on **hind legs**; **pale yellow to creamy white** rump and underbelly; **short tail** with **black brush** tip (**not** gemsbok horse tail).

**Horns (critical):** **Both sexes horned.** **Never** hornless adults. Horns rise from **single elevated shared pedicel** at **apex** of skull; **V-shaped** from front, **up**, **out**, **forward**, then **sharp bend backward** (~90° class); **heavy ridging** on lower ~75%, smooth rear tips. Bulls: **thicker bases**, more mass; cows: **slenderer** shafts, same geometry. Typical curve length about **45–70 cm** class (do not invent metre-wide spreads). **No** separated horn roots on sides of skull, no simple C-curve wildebeest horns, no gemsbok straight spears from flat crown.

**Eyes:** **Horizontal slit pupils**; pale brown / amber iris; **large dark preorbital scent gland** patch **below and slightly forward** of each eye (**must** show in many portraits).

**Eyes (reject AI glamour defaults):** **No blue iris**, **no icy or sapphire eyes**, **no bright human-style blue sclera** around the whole iris, **no heterochromia**, **no turquoise / violet / LED glow**, **no oversized glass “Disney” eyes**. Both visible eyes must match the **same** natural **brown–amber** palette and **horizontal** pupil shape.

**Anatomy integrity (especially any shot with 2+ legs visible):** **Exactly four legs**, **no** fused thighs, **no** fifth limb, **no** duplicated joints. On a **standing** animal in side or three-quarter view, **both forelimbs** obey the same bend direction (both carpi flex forward or both extend together); **never** three legs aligned one way and **one forelimb** flipped so its hoof or cannon faces **opposite** the others. **Hindlimbs** the same: **symmetrical** hock and fetlock logic. **Hooves** sit flat on the ground plane; cannon bones read as **two parallel columns** per pair, not twisted spaghetti.

**Mouth:** **No upper incisors**; **dental pad**; **lower incisors**; selective **grazing** low. **Never** upper front teeth.

**Confusion negatives:** wildebeest, gemsbok, topi, blesbok white blaze, level-backed deer, hornless female trope.

**No text, no watermark, no logos.**

---

## Red hartebeest: shot type to filename (permuted for this species)

| # | Shot type | Save as (`public/images/species/red-hartebeest/`) |
|---|-----------|-----------------------------------------------------|
| 1 | Full body | `hartebeestmonohero.jpg` |
| 2 | Eyes | `hartebeestmonintro.jpg` |
| 3 | Horns (both sexes) | `red-hartebeest-horns.jpg` |
| 4 | Female | `hartebeestmonoformb.jpg` |
| 5 | Male | `hartebeestmonoforma.jpg` |
| 6 | Eating | `hartebeestmonofeed.jpg` |
| 7 | Drinking | `hartebeestmonopred.jpg` |
| 8 | Coat | `hartebeestmonoeco.jpg` |
| 9 | Barely visible | `hartebeestmonopan.jpg` |
| 10 | Hooves | `hartebeestmonorut.jpg` |
| 11 | Front half from side | `hartebeestmonohunt.jpg` |
| 12 | Back half from side | `hartebeestmonotrophy.jpg` |
| 13 | Half face close-up | `hartebeestmonorifle.jpg` |
| 14 | Extra (meat) | `hartebeestmonomeat.jpg` |

*Stems match `monoSeeds` for `imageSeed` `"hartebeest"` and `${speciesId}-horns` (`red-hartebeest-horns`). If `red-hartebeest.ts` still overrides `panorama` with a custom seed, remove that override so `hartebeestmonopan` loads for **09**.*

---

Copy each block **whole** into your image tool.

---

## 01 - Full body (`hartebeestmonohero.jpg`)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. JPEG or PNG.

PROMPT: Ultra-realistic documentary photograph. **Full body red hartebeest** *Alcelaphus buselaphus caama* (bull **or** cow): **high withers hump**, **steep downslope** to lower rump, **exceptionally long narrow head**, **short neck** relative to face, **very long thin legs**. **Both sexes horned:** **V-shaped** ridged horns from **single high pedicel**, bend **sharply backward**. **Red-brown** glossy body, **black blaze** on face, **black leg stripes**, **pale creamy rump and belly**, **black tail brush**. Cow horns slightly **slenderer** than bull; **never** hornless adult. **Exactly four legs**, forepairs and hindpairs **bilaterally consistent** (no one leg rotated wrong-way). Eyes **brown–amber**, **horizontal pupils**, **never blue**. Open dry grassland, shallow DOF, anonymous golden grass bokeh. No level deer back, no wildebeest beard, no text, no watermark.
```

---

## 02 - Eyes (`hartebeestmonintro.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic extreme close-up: **one eye** of **red hartebeest** *Alcelaphus buselaphus caama* on elongated skull. **Horizontal slit pupil**, **warm brown to amber iris only** (same pigment family as the other eye if both show); **bold black forehead blaze** framing orbit; **large dark preorbital gland** patch **below and slightly forward** of eye (**visible**, not smoothed away). Short fine coat texture at cheek. Calm or alert, **minimal** scleral flash. Horn ridges may enter frame top. Background soft gold bokeh. **Negative:** **no blue**, **no icy or sapphire iris**, **no white ring around iris like a human portrait**, **no heterochromia**, **no round** human pupil, **no vertical cat slit**, **no missing gland**, no text, no watermark.
```

---

## 03 - Horns - both sexes (`red-hartebeest-horns.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **red hartebeest** *Alcelaphus buselaphus caama* **head showing both horns from shared elevated pedicel**: horns flare **up and outward**, **forward**, then **bend sharply rearward**; **deep grooves** on lower ~75%, smooth dark tips; **straight-line geometry**, not wildebeest parenthesis. Bull: **thicker** bases; cow: **slenderer** shafts, same architecture. Matte keratin dust OK. Visible eyes: **brown–amber**, **horizontal pupils**, **never blue**. Background neutral blur. No side-mounted separate roots, no simple C-curve, no hornless adult, no branching, no text, no watermark.
```

---

## 04 - Female (`hartebeestmonoformb.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **red hartebeest cow** *Alcelaphus buselaphus caama*: **horned** with **slenderer** horn shafts than bull, **same** black face and leg patterning and **high withers / sloping back** proportions. **Long narrow face**, preorbital glands visible. **Eyes brown–amber**, **horizontal pupils**, **never blue**. If legs show: **four limbs**, **symmetrical** fore and hind orientation, **no** one leg flipped backward. Slightly smaller overall frame than bull. Open grass bokeh. **Never** polled female, never shortened face, no text, no watermark.
```

---

## 05 - Male (`hartebeestmonoforma.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **red hartebeest bull** *Alcelaphus buselaphus caama*: **massive ridged horn bases** on high pedicel, **glossy black saddle and leg flashes** on **rich red** coat, **pronounced shoulder hump**, **steep backline**. Short neck vs face length. **Eyes brown–amber**, **horizontal pupils**, **never blue**. If legs in frame: **four legs**, **paired symmetry**, **no** rogue limb facing wrong direction. Subtle horn-base scars OK. Highveld grass soft blur. No buffalo bulk, no level spine, no text, no watermark.
```

---

## 06 - Eating (`hartebeestmonofeed.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **grazing red hartebeest** *Alcelaphus buselaphus caama*: **narrow muzzle** to ground; **forelegs slightly splayed** in a **biomechanically matched** pair (both knees and both hooves agree, **no** one forelimb reversed); **selective short-grass** grazing; if mouth open show **dental pad** and **lower incisors only**, **no upper front teeth**. Long face keeps eyes relatively high; eyes **brown–amber**, **never blue**. Dry **Themeda-like** grass, open sky or soft horizon. No tree browsing as main story, no horse teeth, no text, no watermark.
```

---

## 07 - Drinking (`hartebeestmonopred.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **drinking red hartebeest** *Alcelaphus buselaphus caama*: **wide foreleg splay** or **carpal-kneel** to drop **extremely long face** to water; **both forelimbs** share the same splay geometry (**no** one leg tucked wrong-way); **high withers** to muzzle drop reads awkward but **biomechanically correct**; **concentric ripples**; **ears back or sideways** alert. Horns stay **rigid geometry**, not bent into water like rubber. Eyes **brown–amber**, **horizontal pupils**. Soft reflections. No straight-legs drinking, no submerged eyes, no text, no watermark.
```

---

## 08 - Coat (`hartebeestmonoeco.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **coat macro** of **red hartebeest** *Alcelaphus buselaphus caama*: **short fine shiny** red-brown hairs; **glossy black** shoulder and leg markings with **crisp edge** against red; **pale creamy** ventral or rump patch at frame edge if included; **black tail brush** hairs. Dust on lower black stripes near hoof OK. No coarse waterbuck wool, no white blesbok blaze, no gemsbok side stripe system, no text, no watermark.
```

---

## 09 - Barely visible (`hartebeestmonopan.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **wide environmental slice**: **red hartebeest** *Alcelaphus buselaphus caama* in **tall dry gold grass**; **high pedicel** and **angled backward horn tips** break grass line; **red-brown** with **black blaze** fragment visible; **withers hump** may read as shadow shape. If legs break the grass line, **only four** limbs, **coherent** orientation (**no** impossible twist). Heat shimmer optional on lower legs. Shallow DOF, **no** woodland wall behind. No generic straight horn pair, no melted anatomy, no text, no watermark.
```

---

## 10 - Hooves (`hartebeestmonorut.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **red hartebeest** *Alcelaphus buselaphus caama* **compact pointed cloven hooves** on **hard dry ground**; **two toes** per hoof, **narrow** track (cursorial, **not** waterbuck-wide splay); **glossy black leg hair** to coronary band. If **more than one leg** appears: **exactly four total limbs** on the animal, **no** extra legs, **no** merged stilts; **left and right** cannon axes **mirror** each other in a standing pose (**no** cannon where metacarpal z-axis points opposite its pair); **no** fore hoof twisted **180°** vs the other three feet; fetlocks and knees bend as **symmetrical pairs**. Long thin cannon bones entering frame OK. Not horse dinner-plate hoof, not splayed swamp foot, no text, no watermark.
```

---

## 11 - Front half from side (`hartebeestmonohunt.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **strict side view, front half** of **red hartebeest** *Alcelaphus buselaphus caama*: **extreme rostrum length**, **black nasal blaze**, **preorbital gland** bulge below eye, **short neck**, **high withers**, **black stripe down front of long foreleg**. **Both forelegs** visible as **parallel columns** with **matching** knee and fetlock bend (**no** one forelimb reversed); hooves **same** toe-out / toe-in logic. Horns from **top pedicel** angling in correct **up-forward-back** break. Eyes **brown–amber**, **horizontal pupils**. Crop before mid-back. Background bokeh. No equine long-neck short-face proportions, no text, no watermark.
```

---

## 12 - Back half from side (`hartebeestmonotrophy.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **side rear half** of **red hartebeest** *Alcelaphus buselaphus caama*: **steep drop** from **high withers** to **lower rump**; **pale creamy rump patch**; **black markings high on hind legs**; **short tail** with **black brush** (**not** long horse tail, **not** fluffy white deer scut). **Both hind legs** as **symmetrical** long columns; **hocks** flex the same way; **no** one hind hoof facing **opposite** the other. Hind cannon long and fine. Head out of frame. No levelled spine, no text, no watermark.
```

---

## 13 - Half face close-up (`hartebeestmonorifle.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **half-face macro** of **red hartebeest** *Alcelaphus buselaphus caama*: **stretched rostrum**, **glossy black blaze** on bridge, **horizontal pupil**, **warm brown–amber iris**, **large preorbital gland** forward of eye; **ridged horn base** from **shared pedicel** at frame top; shorter finer **vibrissae** than waterbuck. Organic hair boundaries. **Negative:** **no blue or icy eyes**, **no human sclera ring**, **no heterochromia**. No shortened deer muzzle, no round pupil, no white blesbok blaze, no rifle in frame, no text, no watermark.
```

---

## 14 - Extra: meat (`hartebeestmonomeat.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **raw red hartebeest venison**, dark red **lean** muscle, fine grain; coarse salt, cracked pepper on **cast iron** or wood; warm kitchen light; shallow DOF, dark blur. No styrofoam, no gore, no text, no watermark.
```

---

## After export

1. Create folder `public/images/species/red-hartebeest/` if missing.  
2. Save files using the table names.  
3. In `data/monographs/content/red-hartebeest.ts`, remove any custom `panorama: "…"` override if you want the default `hartebeestmonopan` seed for **09**, then extend `monoSeeds(s, …, { heroLocalBase: "/images/species/red-hartebeest", heroLocalExt: "jpg", … })` for every stem. Set `hidePredationSection: false` and `hideMeatFigures: false` when those sections should show assets.

---

*Next species briefs can reuse the same 13 shot labels with a **different permutation** on the 14 stems.*
