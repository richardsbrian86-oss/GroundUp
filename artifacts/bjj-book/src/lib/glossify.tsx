import React from "react";
import { glossaryTerms } from "../data/glossary";
import type { Technique } from "../data/types";

// Builds one case-insensitive regex per glossary term, allowing spaces and
// hyphens to match each other (so "half guard" also matches "half-guard").
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function flexiblePattern(phrase: string): string {
  return escapeRegex(phrase).replace(/[\s-]+/g, "[-\\s]+");
}

const compiledTerms = glossaryTerms.map((term) => ({
  ...term,
  regex: new RegExp(`\\b(?:${term.patterns.map(flexiblePattern).join("|")})\\b`, "gi"),
}));

/**
 * Scans `text` for glossary terms. The first time a term appears anywhere
 * on a technique page (tracked via the shared `seen` set), it's annotated
 * inline with a short plain-language definition. Every later mention gets
 * a subtle dotted underline with the same definition on hover/tap, so the
 * page doesn't repeat itself.
 */
function glossText(text: string, seen: Set<string>, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let offset = 0;
  let guardCounter = 0;

  while (offset < text.length && guardCounter++ < 1000) {
    let best: { index: number; length: number; term: (typeof compiledTerms)[number] } | null = null;

    for (const term of compiledTerms) {
      term.regex.lastIndex = offset;
      const m = term.regex.exec(text);
      if (m && (!best || m.index < best.index || (m.index === best.index && m[0].length > best.length))) {
        best = { index: m.index, length: m[0].length, term };
      }
    }

    if (!best) {
      nodes.push(text.slice(offset));
      break;
    }

    if (best.index > offset) {
      nodes.push(text.slice(offset, best.index));
    }

    const matchText = text.slice(best.index, best.index + best.length);
    const isFirst = !seen.has(best.term.id);
    if (isFirst) seen.add(best.term.id);
    const key = `${keyPrefix}-${best.index}`;

    nodes.push(
      isFirst ? (
        <span key={key} title={best.term.definition}>
          {matchText}
          <span className="text-[0.82em] italic text-muted-foreground/70">
            {" "}
            ({best.term.definition})
          </span>
        </span>
      ) : (
        <span
          key={key}
          className="cursor-help underline decoration-muted-foreground/40 decoration-dotted underline-offset-4"
          title={best.term.definition}
        >
          {matchText}
        </span>
      ),
    );

    offset = best.index + best.length;
  }

  return nodes;
}

export interface GlossedTechnique {
  description: React.ReactNode[];
  concept: React.ReactNode[];
  whenToUse: React.ReactNode[];
  setups: React.ReactNode[][];
  steps: React.ReactNode[][];
  followUps: React.ReactNode[][];
  keyPoints: React.ReactNode[][];
  commonMistakes: React.ReactNode[][];
}

/**
 * Annotates every text field of a technique with glossary definitions,
 * in the same order a reader encounters them on the page, so "first use"
 * lines up with what's actually read first.
 */
export function glossifyTechnique(technique: Technique): GlossedTechnique {
  const seen = new Set<string>();
  const single = (text: string, key: string) => glossText(text, seen, key);
  const list = (texts: string[], key: string) => texts.map((t, i) => glossText(t, seen, `${key}-${i}`));

  return {
    description: single(technique.description, "desc"),
    concept: single(technique.concept, "concept"),
    whenToUse: single(technique.whenToUse, "when"),
    setups: list(technique.setups, "setup"),
    steps: list(technique.steps, "step"),
    followUps: list(technique.followUps, "followup"),
    keyPoints: list(technique.keyPoints, "keypoint"),
    commonMistakes: list(technique.commonMistakes, "mistake"),
  };
}
