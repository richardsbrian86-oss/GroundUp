import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Technique } from '../data/types';
import { techniqueImage } from '../lib/technique-images';

export const difficultyColor: Record<Technique['difficulty'], string> = {
  Beginner: 'bg-[#E8E0D5]',
  Intermediate: 'bg-secondary',
  Advanced: 'bg-primary',
};

export function TechniqueCard({
  technique,
  index = 0,
  animate = true,
}: {
  technique: Technique;
  index?: number;
  animate?: boolean;
}) {
  const img = techniqueImage(technique.image);
  const delay = Math.min(index, 9) * 0.035;

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      className="h-full"
    >
      <Link
        href={`/techniques/${technique.id}`}
        className="group relative flex h-full flex-col border border-white/[0.07] bg-card transition-colors duration-300 hover:border-primary/60"
        data-testid={`card-technique-${technique.id}`}
      >
        {/* Illustration */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0d0d0d]">
          {img ? (
            <img
              src={img}
              alt={technique.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-85 grayscale-[25%] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-16 w-16 rotate-45 border border-primary/40" />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
          <div className="absolute left-0 top-0 flex items-center gap-2 bg-background/85 px-3 py-1.5 backdrop-blur-sm">
            <span className={`h-1.5 w-1.5 ${difficultyColor[technique.difficulty]}`} />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/80">
              {technique.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 font-sans text-xl font-bold uppercase leading-tight tracking-wide text-foreground transition-colors group-hover:text-primary">
            {technique.name}
          </h3>
          <p className="mb-6 line-clamp-2 flex-1 font-serif text-[0.9rem] leading-relaxed text-muted-foreground">
            {technique.description}
          </p>
          <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
            <span className="truncate font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {technique.position}
            </span>
            <span className="shrink-0 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {technique.giNoGi} &middot; {technique.difficulty}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function TechniqueRow({ technique, n }: { technique: Technique; n: number }) {
  return (
    <Link
      href={`/techniques/${technique.id}`}
      className="group grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-white/[0.06] px-2 py-4 transition-colors hover:bg-white/[0.03] md:grid-cols-[3.5rem_minmax(0,2fr)_minmax(0,1.4fr)_7rem_6rem]"
      data-testid={`row-technique-${technique.id}`}
    >
      <span className="font-sans text-sm tabular-nums text-white/20 transition-colors group-hover:text-primary">
        {String(n).padStart(2, '0')}
      </span>
      <span className="flex items-center gap-3 min-w-0">
        <span className={`h-1.5 w-1.5 shrink-0 ${difficultyColor[technique.difficulty]}`} />
        <span className="truncate font-sans text-base font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
          {technique.name}
        </span>
      </span>
      <span className="hidden truncate font-serif text-sm text-muted-foreground md:block">
        {technique.position}
      </span>
      <span className="hidden font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:block">
        {technique.category}
      </span>
      <span className="hidden text-right font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 md:block">
        {technique.giNoGi}
      </span>
    </Link>
  );
}
