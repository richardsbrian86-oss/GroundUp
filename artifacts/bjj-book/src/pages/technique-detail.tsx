import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { techniques } from '../data/techniques';
import { techniqueImage } from '../lib/technique-images';
import { difficultyColor } from '../components/technique-card';
import { glossifyTechnique } from '../lib/glossify';

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 border-b border-white/10 pb-3">
      <span className="font-sans text-[11px] tabular-nums tracking-[0.25em] text-primary">{n}</span>
      <h2 className="font-sans text-xl font-bold uppercase tracking-[0.18em] text-foreground md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

export default function TechniqueDetail() {
  const { id } = useParams();

  const index = techniques.findIndex((t) => t.id === id);
  const technique = index >= 0 ? techniques[index] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    document.title = technique
      ? `${technique.name} — Ground Up`
      : 'Ground Up — A Jiu-Jitsu Reference';
    return () => {
      document.title = 'Ground Up — A Jiu-Jitsu Reference';
    };
  }, [technique]);

  const glossed = useMemo(() => (technique ? glossifyTechnique(technique) : null), [technique?.id]);

  const related = useMemo(() => {
    if (!technique) return [];
    return techniques
      .filter(
        (t) =>
          t.id !== technique.id &&
          (t.position === technique.position || t.category === technique.category),
      )
      .sort((a, b) => {
        const aScore = a.position === technique.position ? 0 : 1;
        const bScore = b.position === technique.position ? 0 : 1;
        return aScore - bScore;
      })
      .slice(0, 4);
  }, [technique]);

  if (!technique || !glossed) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 h-14 w-14 rotate-45 border border-white/15" />
        <h1 className="mb-4 font-sans text-3xl uppercase tracking-widest text-muted-foreground">
          Technique Not Found
        </h1>
        <Link
          href="/techniques"
          className="font-sans text-xs uppercase tracking-[0.2em] text-primary hover:text-foreground"
          data-testid="link-back-library"
        >
          Return to Library
        </Link>
      </div>
    );
  }

  const img = techniqueImage(technique.image);
  const prev = index > 0 ? techniques[index - 1] : undefined;
  const next = index < techniques.length - 1 ? techniques[index + 1] : undefined;
  const chapter = String(index + 1).padStart(2, '0');

  return (
    <article className="min-h-screen pb-32 pt-28">
      {/* Chapter header */}
      <header className="border-b border-white/[0.07] px-6 pb-12 pt-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/techniques"
            className="group mb-12 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-back"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Library
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end"
          >
            <div className="border-l-2 border-primary pl-6 md:pl-8">
              <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[10px] uppercase tracking-[0.25em]">
                <span className="text-primary">Chapter {chapter}</span>
                <span className="text-white/20">/</span>
                <span className="text-muted-foreground">{technique.category}</span>
              </div>
              <h1
                className="font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight text-foreground md:text-6xl lg:text-7xl"
                data-testid="text-tech-name"
              >
                {technique.name}
              </h1>
            </div>

            <dl className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-white/[0.07] pt-6 lg:border-none lg:pt-0">
              <div>
                <dt className="font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Position
                </dt>
                <dd className="mt-1 font-sans text-sm uppercase tracking-wide text-foreground">
                  {technique.position}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Level
                </dt>
                <dd className="mt-1 flex items-center gap-2 font-sans text-sm uppercase tracking-wide text-foreground">
                  <span className={`h-1.5 w-1.5 ${difficultyColor[technique.difficulty]}`} />
                  {technique.difficulty}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Ruleset
                </dt>
                <dd className="mt-1 font-sans text-sm uppercase tracking-wide text-foreground">
                  {technique.giNoGi}
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </header>

      {/* Plate */}
      <div className="px-6">
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.07] bg-[#0d0d0d]">
            {img ? (
              <img
                src={img}
                alt={technique.name}
                className="h-full w-full object-cover"
                data-testid="img-technique"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-32 w-32 rotate-45 border-2 border-primary/50" />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
            <span>Plate {chapter} &mdash; {technique.name}</span>
            <span>{technique.position}</span>
          </figcaption>
        </motion.figure>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        {/* Overview + concept */}
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <p className="font-serif text-xl leading-[1.75] text-foreground/90 md:text-2xl md:leading-[1.7]">
            {glossed.description}
          </p>
          <aside className="border-l-2 border-secondary/70 pl-6">
            <h3 className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">
              The Concept
            </h3>
            <p className="font-serif text-lg italic leading-relaxed text-muted-foreground">
              {glossed.concept}
            </p>
          </aside>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-20">
          {/* Main column */}
          <div className="min-w-0">
            {/* When to use */}
            <section className="mb-20">
              <SectionHeading n="I" title="When To Use" />
              <p className="font-serif text-lg leading-relaxed text-muted-foreground">
                {glossed.whenToUse}
              </p>
            </section>

            {/* Setups */}
            <section className="mb-20">
              <SectionHeading n="II" title="Setups & Entries" />
              <ul className="space-y-5">
                {technique.setups.map((s, i) => (
                  <li key={i} className="group flex gap-5">
                    <span className="mt-2 h-px w-6 shrink-0 bg-primary/60 transition-all group-hover:w-9" />
                    <span className="font-serif text-lg leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {glossed.setups[i]}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps */}
            <section className="mb-20">
              <SectionHeading n="III" title="Execution" />
              <ol className="space-y-8">
                {technique.steps.map((step, i) => (
                  <li key={i} className="group flex gap-6">
                    <span className="w-10 shrink-0 text-right font-sans text-3xl font-bold leading-none text-white/[0.12] transition-colors group-hover:text-primary md:text-4xl">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 font-serif text-lg leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {glossed.steps[i]}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Follow ups */}
            <section className="mb-4">
              <SectionHeading n="IV" title="Chains & Follow-Ups" />
              <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
                {technique.followUps.map((f, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 bg-card p-6 transition-colors hover:bg-[#111]"
                  >
                    <span className="font-sans text-xs tabular-nums tracking-widest text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-serif leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {glossed.followUps[i]}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-10 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-white/[0.07] bg-card p-8">
              <h3 className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.22em] text-primary">
                Key Details
              </h3>
              <ul className="space-y-4">
                {technique.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    <span className="font-serif leading-relaxed text-muted-foreground">
                      {glossed.keyPoints[i]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-primary/25 bg-primary/[0.06] p-8">
              <h3 className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.22em] text-primary">
                Common Errors
              </h3>
              <ul className="space-y-4">
                {technique.commonMistakes.map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 border border-primary/70" />
                    <span className="font-serif leading-relaxed text-muted-foreground/90">{glossed.commonMistakes[i]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="border-t border-white/[0.07] pt-8">
                <h3 className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.22em] text-foreground">
                  Study Next
                </h3>
                <div className="space-y-px">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/techniques/${r.id}`}
                      className="group flex items-center justify-between gap-4 border-b border-white/[0.06] py-3 transition-colors hover:border-primary/50"
                      data-testid={`link-related-${r.id}`}
                    >
                      <span className="min-w-0 truncate font-sans text-sm uppercase tracking-wide text-muted-foreground transition-colors group-hover:text-primary">
                        {r.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Prev / Next */}
        <nav className="mt-28 grid grid-cols-1 gap-px border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/techniques/${prev.id}`}
              className="group flex flex-col gap-2 bg-card p-8 transition-colors hover:bg-[#111]"
              data-testid="link-prev-technique"
            >
              <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                Previous
              </span>
              <span className="font-sans text-xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                {prev.name}
              </span>
            </Link>
          ) : (
            <div className="bg-card p-8" />
          )}
          {next ? (
            <Link
              href={`/techniques/${next.id}`}
              className="group flex flex-col items-end gap-2 bg-card p-8 text-right transition-colors hover:bg-[#111]"
              data-testid="link-next-technique"
            >
              <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Next
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-sans text-xl font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                {next.name}
              </span>
            </Link>
          ) : (
            <div className="bg-card p-8" />
          )}
        </nav>
      </div>
    </article>
  );
}
