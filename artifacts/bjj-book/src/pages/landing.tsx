import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// @ts-ignore
import heroImg from "@assets/66809244-DJK_6995_1785896525496.jpg";
import { techniques } from "../data/techniques";
import { TechniqueCard } from "../components/technique-card";
import { PlateIndex } from "../components/plate-index";

const FEATURED_IDS = [
  "triangle-choke",
  "berimbolo",
  "inside-heel-hook",
  "body-lock-pass",
  "closed-guard",
  "rear-naked-choke",
];

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const belts = [
    {
      color: "White",
      bg: "bg-white",
      text: "text-black",
      desc: "Survival. Learning to breathe under pressure.",
    },
    {
      color: "Blue",
      bg: "bg-[#1d4ed8]",
      text: "text-white",
      desc: "The foundations solidify. Most people quit here.",
    },
    {
      color: "Purple",
      bg: "bg-[#6b21a8]",
      text: "text-white",
      desc: "Creativity emerges. You start to own your game.",
    },
    {
      color: "Brown",
      bg: "bg-[#451a03]",
      text: "text-white",
      desc: "Refinement. Plugging holes. Teaching others.",
    },
    {
      color: "Black",
      bg: "bg-black",
      text: "text-white",
      desc: "A new beginning. Takes 8-15 years on average.",
    },
    {
      color: "Red/Coral",
      bg: "bg-gradient-to-r from-red-600 via-black to-red-600",
      text: "text-white",
      desc: "Legends. Reserved for those who dedicate decades.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0 origin-top"
        >
          {/* Directional scrim — dense left where type lives, lifts toward the action */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10 z-10" />
          {/* Bottom fade into next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img
            src={heroImg}
            alt="BJJ Practitioner"
            className="w-full h-full object-cover object-center opacity-75 mix-blend-luminosity"
            data-testid="img-hero"
          />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-20">
          {/* Left column — type lives here; right half is open for the photo */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1
                className="font-sans text-6xl md:text-8xl lg:text-[9rem] uppercase tracking-tighter text-foreground leading-[0.85] font-semibold"
                data-testid="text-hero-headline"
              >
                The{" "}
                <span className="text-primary italic font-serif tracking-normal">
                  Gentle
                </span>{" "}
                Art
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-10 md:mt-12"
            >
              <p
                className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed"
                data-testid="text-hero-sub"
              >
                A living encyclopedia for the discipline.{" "}
                {techniques.length} techniques broken down chapter by
                chapter &mdash; the journey, the mechanics, and the
                undeniable truth of the mat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12"
            >
              <Link
                href="/techniques"
                className="group inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-sans uppercase tracking-[0.2em] font-semibold text-sm transition-all hover:bg-primary/90 hover:scale-105"
                data-testid="button-explore"
              >
                <span className="relative">
                  Enter Library
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Plate Index — the full 74-technique wall */}
      <PlateIndex techniques={techniques} />
      {/* History Section */}
      <section className="py-32 px-6 bg-background relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="w-12 h-px bg-primary" />
            <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-primary font-bold">
              Origins
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h3 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none text-foreground">
              Forged in <br />
              Adaptation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-6">
                  Rooted in the Kodokan Judo of early 1900s Japan, the art
                  traveled to Brazil via Mitsuyo Maeda. Maeda taught Carlos
                  Gracie, who passed the knowledge to his younger, frailer
                  brother Hélio.
                </p>
                <p>
                  Unable to rely on strength or size to execute traditional
                  throws, Hélio adapted the art. He focused on leverage, timing,
                  and ground fighting—where gravity became the great equalizer.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  The Gracie Challenge matches proved the art's brutal
                  efficiency in no-rules combat. This dominance was broadcast to
                  the world in the early UFCs, where Royce Gracie submitted
                  significantly larger opponents.
                </p>
                <p>
                  Today, Brazilian Jiu-Jitsu is a global phenomenon. From the
                  gi-clad traditionalists in IBJJF arenas to the modern
                  submission grappling innovators, the art remains a living,
                  evolving science.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Belt Journey */}
      <section className="py-32 px-6 bg-card border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-24 justify-center">
            <div className="w-12 h-px bg-primary" />
            <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-primary font-bold text-center">
              The Journey
            </h2>
            <div className="w-12 h-px bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {belts.map((belt, i) => (
              <motion.div
                key={belt.color}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <div className="h-16 w-full relative mb-6 overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/10">
                  {/* The Belt Graphic */}
                  <div
                    className={`absolute w-full h-8 ${belt.bg} transform group-hover:scale-y-125 transition-transform duration-500`}
                  />
                  {/* Rank bar (the black bar on belts, or white on black belt) */}
                  <div
                    className={`absolute right-8 w-12 h-10 ${belt.color === "Black" ? "bg-red-600" : "bg-black"} z-10 border-x border-white/20`}
                  />
                  <div className="absolute right-10 w-2 h-10 bg-white z-20" />
                </div>
                <h3 className="font-sans text-2xl font-bold uppercase tracking-wide text-foreground mb-3">
                  {belt.color}
                </h3>
                <p className="font-serif text-muted-foreground">{belt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Techniques */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-6 flex items-center gap-5">
                <div className="h-px w-12 bg-primary" />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                  From the Library
                </span>
              </div>
              <h2 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
                {techniques.length} Techniques.
                <br />
                One Book.
              </h2>
              <p className="mt-6 max-w-lg font-serif text-lg text-muted-foreground leading-relaxed">
                Every entry is a full chapter &mdash; setups, execution, chains,
                concepts, and the mistakes that cost you the position. From the
                foundations to the modern leg lock game.
              </p>
            </div>
            <Link
              href="/techniques"
              className="group inline-flex shrink-0 items-center gap-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
              data-testid="link-featured-all"
            >
              Browse All
              <div className="h-px w-8 bg-primary transition-all group-hover:w-14 group-hover:bg-foreground" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_IDS.map((id, i) => {
              const t = techniques.find((x) => x.id === id);
              return t ? (
                <TechniqueCard key={t.id} technique={t} index={i} />
              ) : null;
            })}
          </div>
        </div>
      </section>
      {/* Why BJJ */}
      <section className="py-40 px-6 bg-background relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
              Truth on the <span className="text-primary">Mat</span>
            </h2>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
              You cannot lie in Jiu-Jitsu. The mat reveals who you are. It
              demands problem-solving under duress, shreds the ego, and rebuilds
              resilience.
            </p>
            <Link
              href="/techniques"
              className="inline-flex items-center gap-4 text-primary hover:text-foreground transition-colors group font-sans uppercase tracking-[0.2em] text-sm font-bold"
            >
              Start Studying
              <div className="w-8 h-px bg-primary group-hover:w-12 group-hover:bg-foreground transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 bg-card">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          For the discipline. For the art.
        </p>
      </footer>
    </div>
  );
}
