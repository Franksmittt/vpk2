# Springbok monograph - AI image prompts (`/species/springbok`)

**Reference research:** `AI Image Prompt Field Notes_ Antelope.txt` (Species 1: *Antidorcas marsupialis*, confusion vs impala and Thomson's gazelle, marsupium, pronking, dental and limb failure modes).

**Site filenames:** **14** exports under `public/images/species/springbok/` (stems from `imageSeed: "springbok"` in `monoSeeds` plus `springbok-horns.jpg`). **Shot order is permuted:** **coat macro** uses the ecology stem, **barely visible** the panorama stem, **hooves** the rut stem (see table).

**Species target:** **Springbok** *Antidorcas marsupialis* (southern African arid and semi-arid plains: Highveld, Karoo edge, Kalahari sand). **Wild-type** cinnamon-tan, dark flank stripe, white belly and face mask is default; **black**, **white (leucistic, dark eyes)**, and **copper** morphs are **palette-only** variants (same skeleton, horn geometry, proportions).

---

## Shot vocabulary (13 animal types + 1 extra)

Same 13 animal shot types as other species; **springbok mapping to stems** is in the table below.

---

## READ FIRST - realism and background (every prompt)

**Realism first.** Wildlife documentary still: believable **slender cursorial** proportions, **no** plastic fur, **no** oversharpen, **no** HDR glow, **no** duplicated eyes or limbs.

**Condition:** **Healthy ordinary** wild-type or honest estate springbok. **Not** starved, not a fantasy horn record.

**Background (estate-safe, anonymity-first):** **Open** dry cues stay valid: **pale sand**, **red-brown Karoo soil**, **short gold or red grass** (Themeda-type). **Also use thick bush** when it helps anonymity: **Vachellia** / **thorn scrub** or **tall grass** as a **soft wall** of **foreground or side vegetation**, **heavily blurred** so stems and trunks become **non-identifying texture** (extreme shallow DOF, long lens). Subject **sharp**. Purpose: **realism** plus **no** readable estate layout. **No** fences, troughs, lodges, vehicles, signs, **North American** meadow default, **no** grass blades **fused** into fur (occlusion must stay physical).

**Species lock:** *Antidorcas marsupialis*. **Tri-colour coat:** **cinnamon-tan or fawn dorsum**, **one crisp dark reddish-brown lateral stripe** separating back from **pure white** belly and inner legs (**not** impala two-tone without stripe, **not** Thomson's gazelle **bold black** side stripe). **White face** with **continuous dark streak** from horn base **through the eye** to **mouth corner** (**must** read as one line, not broken islands). **White rump patch** (marsupium pocket area) blending into **short tail**: **white at base**, **black tuft** at tip.

**Backline:** **Level** or only **slight** dip at withers (**not** hartebeest steep slope, **not** elongated tubular torso).

**Horns (critical):** **Both sexes horned.** **Never** hornless adults. Horns **black**, **heavily annulated** on lower ~**80%**, tips **smooth** and sharply pointed; **lyre silhouette**: rise up and slightly out, curve **backward**, then **hook inward** at tips (front view compared to stethoscope curve). **Ewes:** visibly **thinner** horns, roughly **60–70%** of male length. **No** branching antlers, **no** impala-only-male template, **no** corkscrew kudu geometry, **no** horns emerging **behind the ears** or **floating** above skull.

**Eyes:** **Lateral** placement; **horizontal oval or slit pupil** (calm); dark brown iris; **continuous dark face streak through orbit**. Calm: **minimal** scleral show.

**Eyes (reject AI glamour defaults):** **No blue iris**, **no icy or sapphire eyes**, **no** full human-style **white sclera** ring, **no heterochromia**, **no** turquoise / violet / LED glow, **no** perfectly **round forward** predator pupils. Both visible eyes match **natural brown** palette and **horizontal** pupil logic.

**Anatomy integrity (especially 2+ legs visible):** **Exactly four legs**, **no** fused thighs, **no** fifth limb. **Standing** side or three-quarter: **both forelimbs** share the same bend direction; **never** three legs aligned one way and **one forelimb** flipped so hoof or cannon faces **opposite** the others. **Hindlimbs:** coherent **digitigrade** hock and fetlock (**no** backward-bent human knees, **no** double joints). **Hooves:** **cloven two-toed**, narrow, **dark**, planted on a **single** ground plane.

**Mouth:** **No upper incisors**; **hard upper dental pad**; **lower incisors**; narrow pointed **muzzle**. **Never** upper front teeth.

**Marsupium / pronking:** If animal is **calm**, dorsal pocket reads as **thin dark spinal line** or subtle seam (**not** random white wings from flanks). If **pronking**, **stiff bunched legs**, **arched back**, **head down**, **brilliant white dorsal crest** may **evert** from mid-back toward rump (**not** rib-level "fur wings", **not** floating hair disconnected from skin).

**Confusion negatives:** **Impala** (no side stripe, black rump **M**, ram-only horns), **Thomson's gazelle** (black side stripe, different face), **blesbok** (white blaze band), generic **deer** or **thick cow legs**, **horse** single hoof.

**No text, no watermark, no logos.**

---

## Springbok: shot type to filename (permuted for this species)

| # | Shot type | Save as (`public/images/species/springbok/`) |
|---|-----------|-----------------------------------------------|
| 1 | Full body | `springbokmonohero.jpg` |
| 2 | Eyes | `springbokmonintro.jpg` |
| 3 | Horns (both sexes) | `springbok-horns.jpg` |
| 4 | Female | `springbokmonoformb.jpg` |
| 5 | Male | `springbokmonoforma.jpg` |
| 6 | Eating | `springbokmonofeed.jpg` |
| 7 | Drinking | `springbokmonopred.jpg` |
| 8 | Coat | `springbokmonoeco.jpg` |
| 9 | Barely visible | `springbokmonopan.jpg` |
| 10 | Hooves | `springbokmonorut.jpg` |
| 11 | Front half from side | `springbokmonohunt.jpg` |
| 12 | Back half from side | `springbokmonotrophy.jpg` |
| 13 | Half face close-up | `springbokmonorifle.jpg` |
| 14 | Extra (meat) | `springbokmonomeat.jpg` |

*Stems match `monoSeeds` for `imageSeed` `"springbok"` and `${speciesId}-horns` (`springbok-horns`). Ecology and panorama slots on the page carry **08** and **09** content by this table.*

---

Copy each block **whole** into your image tool.

---

## 01 - Full body (`springbokmonohero.jpg`)

```
OUTPUT: 3840×2400 pixels (minimum 1920×1200). Aspect ratio 8:5 (width:height). Landscape. JPEG or PNG.

PROMPT: Ultra-realistic documentary photograph. **Full body springbok** *Antidorcas marsupialis* (ram **or** ewe): **compact** torso, **level back**, **very long thin lower legs**, small **cloven** hooves. **Tri-colour pelage** with **sharp** boundaries: cinnamon-tan back, **single** dark reddish-brown **flank stripe**, white belly and inner legs. **White face** with **unbroken dark streak** from horn base **through eye** to mouth corner. **White rump** merging to tail **white at base**, **black brush** tip. **Both sexes horned:** lyre curve with **inward** tips; ewe horns visibly **slenderer** and shorter. **Exactly four legs**, bilateral limb logic. Eyes **brown**, **horizontal pupils**, **never blue**. Open Karoo, Kalahari sand, or Highveld short grass; hard sun, believable ground shadow. Shallow DOF, anonymous bokeh. No impala rump M, no Thomson black stripe, no hornless adult, no thick stocky legs, no muddy gradient flank stripe, no text, no watermark.
```

---

## 02 - Eyes (`springbokmonintro.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic extreme close-up: **one eye** of **springbok** *Antidorcas marsupialis* filling frame. **Horizontal oval or slit pupil**, dark brown iris, **large lateral eye**; **continuous dark reddish-brown fur streak** runs from horn base region **through** the orbit to muzzle corner on **white** face mask (**no gap** in stripe). Short stiff **upper** lashes; fine dry skin texture at lid corners. **Specular highlight** suggests **bright sky and open horizon** (dry veld), not studio ring light. Calm: **no** wide human sclera, **no** round black "anime" pupil, **no** blue or turquoise iris. If second eye softly OOF, **same** pigment family. f/2–f/2.8 look, tack-sharp on iris. No disconnected "island" eye in white fur, no text, no watermark.
```

---

## 03 - Horns (both sexes) (`springbok-horns.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic close-up: **living springbok** *Antidorcas marsupialis* **head with both horns** (ram **or** ewe). Horns **deep black**, **heavy annulations** on lower ~**80%**, **smooth dark** inward-hooking tips; **lyre geometry**: up and slightly out, **back**, then tips curve **in** toward each other. **Symmetrical** pair from **top of skull between / just anterior to ears**, **not** behind ears, **not** floating. Ewe: **thinner** shafts and **shorter** overall curve than ram; **still both horns present**. Harsh light: micro-shadow in ridges, subtle dust in grooves OK. **Negative:** **no** deer antlers, **no** branching, **no** spiral kudu horns, **no** single ultra-long corkscrew, **no** one horn twice the other, **no** melted smooth plastic cones. Living skin at bases. Background soft neutral blur. No text, no watermark.
```

---

## 04 - Female (`springbokmonoformb.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter or portrait** of **springbok ewe** *Antidorcas marsupialis*: **gracile** neck and body (lighter build than ram), **same tri-colour coat** and **white face with dark eye streak**. **Both horns present:** clearly **narrower** in girth and **shorter** than a mature ram, still **ridged** and **lyre-shaped**. **Never** hornless head (taxonomy error). Loose herd context optional: other springbok soft OOF in background. Dry grass, red soil, or pale sand; shallow DOF. No impala template (no rump M), no massive bull horns on female, no text, no watermark.
```

---

## 05 - Male (`springbokmonoforma.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **three-quarter portrait** of **springbok ram** *Antidorcas marsupialis*: **thicker neck** and forequarters than ewe; **horn bases heavy** with **deep ridges**, lyre curve **prominent**, tips inward; believable wild **length** (roughly **35–50 cm** class along curve, **not** fantasy metre spirals). Minor **tip chip** or neck rub scar OK. **Tri-colour** pattern **crisp**; white belly reads bright in slanting light. May stand alone on plain or near herd edge. **Negative:** **no** corkscrew, **no** sheep curls, **no** steroid bison bulk, **no** blurred flank stripe. No text, no watermark.
```

---

## 06 - Eating (`springbokmonofeed.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **grazing or browsing low vegetation** **springbok** *Antidorcas marsupialis*: neck extended **down**, forelegs may **splay slightly** for reach; **narrow muzzle** at grass or dwarf shrub. If mouth interior visible: **hard pale upper dental pad**, **lower incisors only**, **zero upper front teeth**. Lips thin, mobile, may carry dust. Horns visible in profile for ram; ewe horns present. Short sward or Karoo scrub, shallow DOF. **Negative:** **no** square human teeth, **no** dog canines, **no** tall-tree browsing as primary story unless low shoots. No text, no watermark.
```

---

## 07 - Drinking (`springbokmonopred.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **drinking springbok** *Antidorcas marsupialis*: **forelegs splayed wide** or **carpi bent** to lower short neck to water; **vulnerable stance** believable. **Ears** often **back and up**, scanning. **Muzzle** touches surface: **small concentric ripples**; water **reflection** repeats **white face mask** and **dark eye streak** with plausible geometry (**not** merged smear). Hind legs planted on bank. **Exactly four limbs**, coherent joints, **no** legs clipping through ground or vanishing into water. Horns clear above surface. No melted forelegs, no mirror sky blob replacing face in reflection, no text, no watermark.
```

---

## 08 - Coat (`springbokmonoeco.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **coat macro** of **springbok** *Antidorcas marsupialis*: **short sleek** hair; **sharp** transition **tan back** to **dark reddish-brown flank stripe** to **matte white** belly (**no** airbrushed gradient). Optional **closed** marsupium: **thin dark dorsal line** along spine only (**not** white rib wings). If rump edge in frame: **white** hair toward **black tail tuft** with clean boundary. Subtle healthy sheen on tan, dust on white lower legs OK. **Negative:** **no** spots, **no** roan ticking, **no** impala flank without stripe, **no** plastic specular sheet. No text, no watermark.
```

---

## 09 - Barely visible (`springbokmonopan.jpg`)

```
OUTPUT: 3840×1600 pixels (minimum 1920×800). Aspect ratio ~12:5 landscape. JPEG or PNG.

PROMPT: Ultra-realistic **wide environmental slice**: **springbok** *Antidorcas marsupialis* **mostly hidden** by **tall gold-red grass** and/or a **wall of thorn scrub** rendered as **heavy foreground bokeh** (long lens, shallow DOF); **sharp** focus on **white face mask**, **dark eye streak**, and **lyre horn tips** breaking the line; lower body lost in vegetation or **heat shimmer** near ground (**organic** distortion, **not** uniform Gaussian mush). Foreground blades or twigs **soft OOF**; **no** blades growing **out of** animal's fur, **no** floating head without implied body. **No** readable fence through scrub. Anonymous horizon. No text, no watermark.
```

---

## 10 - Hooves (`springbokmonorut.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **low angle**: **springbok** *Antidorcas marsupialis* **cloven hooves** on **stony red soil** or **Kalahari sand**: **two distinct toes**, **narrow pointed** fronts, **dark grey to black** keratin, **matte** with scratches and **dust** in commissure; **fine short hair** on cannon ending at **sharp** coronary band (**no** hair melted into solid horse hoof). Slender fetlock; **dewclaws** high on rear if visible. **Both forefeet** same orientation if paired in frame. Shallow DOF. No three-toed paw, no single hoof, no text, no watermark.
```

---

## 11 - Front half from side (`springbokmonohunt.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic **strict side view, front half** **springbok** *Antidorcas marsupialis*: **long slender neck**, **deep narrow chest**, **pointed muzzle**; **dark flank stripe** originates **just behind upper foreleg** and runs **level** backward; white sweeps onto chest and throat. **Horns** attach to **skull top anterior to ears**, lyre curve readable. Foreleg column **vertical**, fine bone. Background bokeh. **Negative:** **no** horns from neck, **no** shortened sheep neck, **no** smeared face mask. No text, no watermark.
```

---

## 12 - Back half from side (`springbokmonotrophy.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **side rear half** **springbok** *Antidorcas marsupialis*: **powerful hindquarters**, **long angular hind legs** with **sharp hock** (correct digitigrade bend); **dark flank stripe ends cleanly** before **bright white rump**; **thin tail** mostly **white** against rump, **black tuft** terminal (**not** fluffy white deer flag). If alert, **slight** hint of marsupium **flare** only at dorsal edge (**subtle**). Head out of frame or soft OOF. **Negative:** **no** stripe bleeding into white rump as mud smear, **no** backward human knee, **no** extra limbs. No text, no watermark.
```

---

## 13 - Half face close-up (`springbokmonorifle.jpg`)

```
OUTPUT: 3840×2160 pixels. Aspect ratio 16:9 (width:height). JPEG or PNG.

PROMPT: Ultra-realistic **half-face macro** **springbok** *Antidorcas marsupialis*: **split face** showing **comma-shaped nostril** with **moist dark leathery** texture; **razor boundary** white mask vs **dark eye streak**; **horizontal pupil** with horizon specular; **fine stiff vibrissae** (sparse, irregular, **not** thick parallel wires). Short sleek face hair. Optional **one or two** small ticks at ear base (**subtle**, healthy). One horn base may enter edge. **Negative:** **no** waxy CGI skin, **no** round human pupil, **no** blue iris, **no** web-like whisker noise. No rifle in frame. No text, no watermark.
```

---

## 14 - Extra: meat (`springbokmonomeat.jpg`)

```
OUTPUT: 2048×2048 pixels. Aspect ratio 1:1 (square). JPEG or PNG.

PROMPT: Ultra-realistic macro: **raw springbok venison**, deep red **lean** muscle, fine grain; coarse salt, cracked pepper on **cast iron** or wood; warm kitchen light; shallow DOF, dark blur. No styrofoam, no gore, no text, no watermark.
```

---

## After export

1. Create folder `public/images/species/springbok/` if missing.  
2. Save files using the table names.  
3. In `data/monographs/content/springbok.ts`, extend `monoSeeds(s, …, { … })` with `heroLocalBase: "/images/species/springbok"`, `heroLocalExt: "jpg"`, and the same pattern for every stem you export. Add `meatLocalBase` / `meatLocalExt` only after `springbokmonomeat.jpg` exists. Set `hidePredationSection: false` when the drinking asset should show in the predation slot.

---

*Colour morph requests (black, white, copper) use the **same** prompts with explicit palette swaps; anatomy and horn rules stay fixed.*
