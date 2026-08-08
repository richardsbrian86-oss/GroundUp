import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, LayoutGrid, List, SlidersHorizontal, Check } from 'lucide-react';
import { techniques } from '../data/techniques';
import type { Technique, TechniqueCategory, Difficulty, GiNoGi } from '../data/types';
import { TechniqueCard, TechniqueRow } from '../components/technique-card';

const CATEGORY_ORDER: TechniqueCategory[] = [
  'Guard',
  'Passing',
  'Sweeps',
  'Submissions',
  'Escapes',
  'Takedowns',
];
const DIFFICULTIES: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];
const GI_OPTIONS: GiNoGi[] = ['Gi', 'No-Gi', 'Both'];

type ViewMode = 'grid' | 'index';

function Pill({
  active,
  onClick,
  children,
  testId,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  testId: string;
}) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      className={`border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.18em] transition-all ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-white/10 bg-transparent text-muted-foreground hover:border-white/30 hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}

/** Mobile bottom-sheet filter drawer */
function MobileFilterSheet({
  open,
  onClose,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  gi,
  setGi,
  hasFilters,
  clearAll,
  counts,
}: {
  open: boolean;
  onClose: () => void;
  category: 'All' | TechniqueCategory;
  setCategory: (v: 'All' | TechniqueCategory) => void;
  difficulty: 'All' | Difficulty;
  setDifficulty: (v: 'All' | Difficulty) => void;
  gi: 'All' | GiNoGi;
  setGi: (v: 'All' | GiNoGi) => void;
  hasFilters: boolean;
  clearAll: () => void;
  counts: Record<string, number>;
}) {
  const sheetRef = useRef<HTMLDivElement>(null);

  // Close on outside tap
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const SheetPill = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] transition-all ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-white/10 bg-transparent text-muted-foreground'
      }`}
    >
      {active && <Check className="h-3 w-3 shrink-0" />}
      {children}
    </button>
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
            onClick={handleBackdropClick}
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[85dvh] overflow-y-auto rounded-t-2xl border-t border-white/10 bg-background pb-safe md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Filter techniques"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 pb-4">
              <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-foreground">
                Filters
              </h2>
              <div className="flex items-center gap-3">
                {hasFilters && (
                  <button
                    onClick={clearAll}
                    className="font-sans text-[10px] uppercase tracking-[0.18em] text-primary"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close filters"
                  className="rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Filter groups */}
            <div className="space-y-6 px-5 py-5">
              {/* Category */}
              <div>
                <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.26em] text-muted-foreground/60">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  <SheetPill
                    active={category === 'All'}
                    onClick={() => setCategory('All')}
                  >
                    All {techniques.length}
                  </SheetPill>
                  {CATEGORY_ORDER.map((cat) => (
                    <SheetPill
                      key={cat}
                      active={category === cat}
                      onClick={() => setCategory(category === cat ? 'All' : cat)}
                    >
                      {cat} {counts[cat] ?? 0}
                    </SheetPill>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.26em] text-muted-foreground/60">
                  Level
                </p>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTIES.map((d) => (
                    <SheetPill
                      key={d}
                      active={difficulty === d}
                      onClick={() => setDifficulty(difficulty === d ? 'All' : d)}
                    >
                      {d}
                    </SheetPill>
                  ))}
                </div>
              </div>

              {/* Gi / No-Gi */}
              <div>
                <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.26em] text-muted-foreground/60">
                  Ruleset
                </p>
                <div className="flex flex-wrap gap-2">
                  {GI_OPTIONS.map((g) => (
                    <SheetPill
                      key={g}
                      active={gi === g}
                      onClick={() => setGi(gi === g ? 'All' : g)}
                    >
                      {g}
                    </SheetPill>
                  ))}
                </div>
              </div>
            </div>

            {/* Done button */}
            <div className="px-5 pb-6">
              <button
                onClick={onClose}
                className="w-full bg-primary py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Show results
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Techniques() {
  const [category, setCategory] = useState<'All' | TechniqueCategory>('All');
  const [difficulty, setDifficulty] = useState<'All' | Difficulty>('All');
  const [gi, setGi] = useState<'All' | GiNoGi>('All');
  const [query, setQuery] = useState('');
  const [view, setView] = useState<ViewMode>('grid');
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const t of techniques) map[t.category] = (map[t.category] ?? 0) + 1;
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return techniques.filter((t) => {
      if (category !== 'All' && t.category !== category) return false;
      if (difficulty !== 'All' && t.difficulty !== difficulty) return false;
      if (gi !== 'All' && t.giNoGi !== gi && t.giNoGi !== 'Both') return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.position.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.concept.toLowerCase().includes(q)
      );
    });
  }, [category, difficulty, gi, query]);

  const grouped = useMemo(() => {
    const groups: { category: TechniqueCategory; items: Technique[] }[] = [];
    for (const cat of CATEGORY_ORDER) {
      const items = filtered.filter((t) => t.category === cat);
      if (items.length) groups.push({ category: cat, items });
    }
    return groups;
  }, [filtered]);

  useEffect(() => {
    document.title = 'Library — Ground Up';
    return () => {
      document.title = 'Ground Up — A Jiu-Jitsu Reference';
    };
  }, []);

  const hasFilters =
    category !== 'All' || difficulty !== 'All' || gi !== 'All' || query.trim() !== '';

  // Count active non-search filters for the mobile badge
  const activeFilterCount = [
    category !== 'All',
    difficulty !== 'All',
    gi !== 'All',
  ].filter(Boolean).length;

  const clearAll = () => {
    setCategory('All');
    setDifficulty('All');
    setGi('All');
    setQuery('');
  };

  return (
    <div className="min-h-screen px-6 pb-32 pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Masthead */}
        <div className="mb-14 border-b border-white/10 pb-12">
          <div className="mb-6 flex items-center gap-5">
            <div className="h-px w-12 bg-primary" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              Volume One
            </span>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1
                className="font-sans text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl"
                data-testid="text-library-title"
              >
                Technique
                <br />
                <span className="text-primary">Library</span>
              </h1>
              <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
                {techniques.length} techniques across six disciplines &mdash; from the
                foundations of closed guard to the modern leg lock game. Study the mechanics.
                Drill the details.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 sm:grid-cols-6 lg:pb-2">
              {CATEGORY_ORDER.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(category === cat ? 'All' : cat)}
                  data-testid={`stat-category-${cat}`}
                  className="group text-left"
                >
                  <div
                    className={`font-sans text-2xl font-bold tabular-nums transition-colors ${
                      category === cat
                        ? 'text-primary'
                        : 'text-foreground group-hover:text-primary'
                    }`}
                  >
                    {counts[cat] ?? 0}
                  </div>
                  <div className="font-sans text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    {cat}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="z-30 -mx-6 mb-12 border-b border-white/[0.07] bg-background/90 px-6 py-5 backdrop-blur-md md:sticky md:top-20">
          <div className="flex flex-col gap-5">
            {/* Search row */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search techniques, positions, concepts..."
                  className="w-full border border-white/10 bg-card py-3 pl-11 pr-4 font-serif text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
                  data-testid="input-search"
                />
              </div>
              <div className="flex items-center gap-2">
                {/* Mobile filter button — hidden on md+ */}
                <button
                  onClick={() => setFilterSheetOpen(true)}
                  data-testid="button-mobile-filters"
                  aria-label="Open filters"
                  className="relative flex items-center gap-2 border border-white/10 px-4 py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground md:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary font-sans text-[9px] font-bold text-primary-foreground">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <div className="flex border border-white/10">
                  <button
                    onClick={() => setView('grid')}
                    data-testid="button-view-grid"
                    aria-label="Grid view"
                    className={`p-3 transition-colors ${
                      view === 'grid'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setView('index')}
                    data-testid="button-view-index"
                    aria-label="Index view"
                    className={`p-3 transition-colors ${
                      view === 'index'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                {hasFilters && (
                  <button
                    onClick={clearAll}
                    data-testid="button-clear-filters"
                    className="flex items-center gap-2 border border-white/10 px-4 py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <X className="h-3 w-3" /> Clear
                  </button>
                )}
              </div>
            </div>

            {/* Filter pills — desktop only */}
            <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Category
                </span>
                <Pill
                  active={category === 'All'}
                  onClick={() => setCategory('All')}
                  testId="button-filter-All"
                >
                  All {techniques.length}
                </Pill>
                {CATEGORY_ORDER.map((cat) => (
                  <Pill
                    key={cat}
                    active={category === cat}
                    onClick={() => setCategory(cat)}
                    testId={`button-filter-${cat}`}
                  >
                    {cat} {counts[cat] ?? 0}
                  </Pill>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Level
                </span>
                {DIFFICULTIES.map((d) => (
                  <Pill
                    key={d}
                    active={difficulty === d}
                    onClick={() => setDifficulty(difficulty === d ? 'All' : d)}
                    testId={`button-difficulty-${d}`}
                  >
                    {d}
                  </Pill>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Ruleset
                </span>
                {GI_OPTIONS.map((g) => (
                  <Pill
                    key={g}
                    active={gi === g}
                    onClick={() => setGi(gi === g ? 'All' : g)}
                    testId={`button-gi-${g}`}
                  >
                    {g}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 flex items-baseline justify-between">
          <p
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
            data-testid="text-result-count"
          >
            Showing {filtered.length} of {techniques.length}
          </p>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center border border-dashed border-white/10 py-32 text-center">
            <div className="mb-8 h-14 w-14 rotate-45 border border-white/15" />
            <h2 className="font-sans text-2xl font-bold uppercase tracking-widest text-foreground">
              No Position Found
            </h2>
            <p className="mt-3 max-w-sm font-serif text-muted-foreground">
              Nothing in the book matches that combination. Loosen a filter and try again.
            </p>
            <button
              onClick={clearAll}
              data-testid="button-empty-reset"
              className="mt-8 bg-primary px-8 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reset Filters
            </button>
          </div>
        ) : view === 'index' ? (
          <div className="space-y-16">
            {grouped.map((group) => (
              <section key={group.category}>
                <div className="mb-4 flex items-baseline gap-4 border-b border-primary/40 pb-3">
                  <h2 className="font-sans text-xl font-bold uppercase tracking-[0.2em] text-foreground">
                    {group.category}
                  </h2>
                  <span className="font-sans text-xs tabular-nums text-muted-foreground">
                    {group.items.length}
                  </span>
                </div>
                <div>
                  {group.items.map((t, i) => (
                    <TechniqueRow key={t.id} technique={t} n={i + 1} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-20">
            {grouped.map((group) => (
              <section key={group.category} data-testid={`section-${group.category}`}>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-8 flex items-center gap-5"
                >
                  <h2 className="font-sans text-2xl font-bold uppercase tracking-[0.18em] text-foreground md:text-3xl">
                    {group.category}
                  </h2>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="font-sans text-xs tabular-nums tracking-widest text-primary">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((t, i) => (
                    <TechniqueCard key={t.id} technique={t} index={i} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* Mobile filter bottom sheet */}
      <MobileFilterSheet
        open={filterSheetOpen}
        onClose={() => setFilterSheetOpen(false)}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        gi={gi}
        setGi={setGi}
        hasFilters={hasFilters}
        clearAll={clearAll}
        counts={counts}
      />
    </div>
  );
}
