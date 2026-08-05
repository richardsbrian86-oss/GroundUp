---
name: BJJ book jargon glossary
description: How technique pages explain jiu-jitsu jargon for newcomers without editing the underlying technique text.
---

The "Jiu-Jitsu for Everyone" rebrand needed every technique page to be understandable by non-practitioners, but the 74 technique entries' prose (steps, key points, etc.) was too risky to hand-edit for correctness — a wrong tweak to real technique instructions is a credibility/safety issue.

**Decision:** built a presentation-layer glossary instead of touching the data.
- `src/data/glossary.ts` — plain-English definitions for terms that actually appear in the technique data (verified by grepping frequency first, not guessed).
- `src/lib/glossify.tsx` — pure function that scans a technique's text fields in reading order, annotates the *first* occurrence of each term inline with `(definition)`, and gives *later* occurrences a dotted-underline hover/tap tooltip instead, so dense paragraphs don't get cluttered by repeats.
- Matching picks the earliest-starting regex match across all terms (tie-break: longest), which automatically prefers compound terms ("half guard") over generic ones ("guard") without manual ordering rules.

**Why this shape:** keeps the source-of-truth technique content completely untouched (lower risk, easier to maintain) while still making every page beginner-readable.

**How to apply:** if extending glossary coverage or adding new technique data, add terms to `glossary.ts` (check they actually occur in the data first) — never inline definitions by hand-editing technique text.
