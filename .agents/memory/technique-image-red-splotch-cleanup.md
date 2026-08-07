---
name: Technique image red-splotch cleanup
description: AI-generated ink-sketch technique images tend to include blood-like red washes; how to detect and remove them.
---
The BJJ book's AI-generated ink-sketch technique images (attached_assets/generated_images/techniques/) often come out with saturated red splotches that read as blood. User wants family-friendly, clean imagery.

**Rule:** After generating new technique sketches, scan for red spotting and desaturate it rather than regenerating.

**Why:** Regenerating ~190 images is slow/costly and changes the art; selective desaturation preserves the ink-wash style exactly. Cleaned all existing sketches Aug 2026.

**How to apply:**
- Detect: red fraction `magick img -resize 256x256 -fx "(r-max(g,b))>0.08?1:0" -format "%[fx:mean]" info:` > 0.001 → flag. Skip colorful photos/illustrations (blue fraction `(max(g,b)-r)>0.10` mean > 0.05) — their red is deliberate.
- Fix in place: `magick img \( -clone 0 -colorspace gray -colorspace sRGB \) \( -clone 0 -fx "(r-max(g,b))>0.04?1:0" -morphology Dilate Disk:6 -blur 0x3 \) -composite img`
- fx is slow (~2s/image); batch in chunks under the 5-min shell timeout.
