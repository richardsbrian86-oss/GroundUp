---
name: Screenshot vs staggered hero animations
description: Why an element can appear "missing" in a Screenshot tool capture when it's actually just mid fade-in.
---

Landing/hero sections built with framer-motion often stagger children in with `initial={{opacity:0}}` + increasing `delay` values (e.g. kicker at 0s, headline at 0.2s, subhead at 0.8s, CTA buttons at 1.2s). The Screenshot tool captures shortly after page load/navigation, often before later-delayed elements finish fading in — they can be fully transparent at capture time.

**Symptom:** a button/section that is clearly present in the JSX and renders fine on scroll never shows up in Screenshot captures, even across different viewport sizes, while earlier-delayed siblings on the same page do show.

**How to apply:** before concluding an element is missing/broken (wrong CSS, layout overflow, conditional render bug), check its motion `transition.delay`. If it's part of a staggered entrance sequence, this is very likely just capture timing, not a real bug — verify by reading the component code / confirming no console errors, rather than chasing a layout fix that isn't needed.
