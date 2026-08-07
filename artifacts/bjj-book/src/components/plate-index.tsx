import { Link } from "wouter";
import { motion } from "framer-motion";
import type { Technique, TechniqueCategory } from "../data/types";
import { techniqueImage } from "../lib/technique-images";

const CATEGORY: Record<
  TechniqueCategory,
  { bar: string; gradient: string; label: string; accent: string }
> = {
  Submissions: {
    bar: "bg-red-700",
    gradient: "from-red-950 via-red-950/60 to-transparent",
    label: "text-red-400",
    accent: "bg-red-500",
  },
  Guard: {
    bar: "bg-amber-600",
    gradient: "from-amber-950 via-amber-950/60 to-transparent",
    label: "text-amber-400",
    accent: "bg-amber-500",
  },
  Passing: {
    bar: "bg-blue-700",
    gradient: "from-blue-950 via-blue-950/60 to-transparent",
    label: "text-blue-400",
    accent: "bg-blue-500",
  },
  Sweeps: {
    bar: "bg-emerald-700",
    gradient: "from-emerald-950 via-emerald-950/60 to-transparent",
    label: "text-emerald-400",
    accent: "bg-emerald-500",
  },
  Escapes: {
    bar: "bg-violet-700",
    gradient: "from-violet-950 via-violet-950/60 to-transparent",
    label: "text-violet-400",
    accent: "bg-violet-500",
  },
  Takedowns: {
    bar: "bg-orange-700",
    gradient: "from-orange-950 via-orange-950/60 to-transparent",
    label: "text-orange-400",
    accent: "bg-orange-500",
  },
};

interface Props {
  techniques: Technique[];
}

export function PlateIndex({ techniques }: Props) {
  return (
    <div className="mt-24">
      {/* Compact subsection header — the wall is the complete index of the Library above */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/[0.07] pt-10">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              The Complete Index
            </span>
            <p className="mt-3 font-serif text-muted-foreground text-lg">
              Every documented position, attack, and chain in the art &mdash; all{" "}
              {techniques.length} plates.
            </p>
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:max-w-md">
            {(Object.entries(CATEGORY) as [TechniqueCategory, typeof CATEGORY[TechniqueCategory]][]).map(
              ([cat, conf]) => {
                const count = techniques.filter((t) => t.category === cat).length;
                return (
                  <div key={cat} className="flex items-center gap-2">
                    <span className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground">
                      {cat}
                    </span>
                    <span
                      className={`inline-block w-5 h-px ${conf.bar}`}
                    />
                    <span className={`font-mono text-[11px] ${conf.label}`}>
                      {count}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* The wall — gap-px on the grid with bg-white/5 creates hairline tile borders */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-px bg-white/[0.04]">
          {techniques.map((t, i) => {
            const conf = CATEGORY[t.category];
            const img = techniqueImage(t.image);
            const num = String(i + 1).padStart(2, "0");

            return (
              <Link key={t.id} href={`/techniques/${t.id}`} className="block">
                <motion.div
                  className="relative aspect-square group overflow-hidden bg-zinc-950 cursor-pointer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.25, delay: (i % 10) * 0.025 }}
                >
                  {/* Background — image if present, else category gradient */}
                  {img ? (
                    <img
                      src={img}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-75 transition-all duration-500"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${conf.gradient} opacity-50 group-hover:opacity-90 transition-opacity duration-300`}
                    />
                  )}

                  {/* Single directional scrim — dense at the base where the name sits */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 group-hover:from-black/70 group-hover:via-black/25 group-hover:to-transparent transition-colors duration-500" />

                  {/* Category bar — top edge */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2px] ${conf.bar} opacity-70 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Plate content */}
                  <div className="absolute inset-0 p-[7px] flex flex-col justify-between">
                    {/* Plate number */}
                    <span className="font-mono text-[9px] leading-none text-white/25 group-hover:text-white/50 transition-colors tabular-nums">
                      {num}
                    </span>

                    {/* Technique name */}
                    <div className="overflow-hidden">
                      <p className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-tight leading-tight text-white/70 group-hover:text-white transition-colors duration-200 line-clamp-3">
                        {t.name}
                      </p>
                    </div>
                  </div>

                  {/* Hover: category label flashes in */}
                  <div className="absolute inset-x-0 top-[2px] flex justify-end p-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span
                      className={`font-sans text-[8px] uppercase tracking-widest leading-none ${conf.label}`}
                    >
                      {t.category}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Footer bar — plate count confirmation */}
        <div className="mt-6 flex items-center justify-between">
          <span className="font-mono text-[11px] text-muted-foreground/40 uppercase tracking-widest">
            Plates 01–{String(techniques.length).padStart(2, "0")}
          </span>
          <Link
            href="/techniques"
            className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors flex items-center gap-3"
          >
            Open Library
            <div className="h-px w-6 bg-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
