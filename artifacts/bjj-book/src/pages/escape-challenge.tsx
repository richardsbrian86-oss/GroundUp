import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Check, Share2, X } from 'lucide-react';
import { scenarios, type Scenario, type ScenarioChoice } from '../data/scenarios';
import { techniques } from '../data/techniques';
import { techniqueImage } from '../lib/technique-images';

type Stage = 'select' | 'play' | 'resolved';

export default function EscapeChallenge() {
  const [stage, setStage] = useState<Stage>('select');
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [wrongChoice, setWrongChoice] = useState<ScenarioChoice | null>(null);
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    document.title = 'Could You Escape This? — Ground Up';
    return () => {
      document.title = 'Ground Up — A Jiu-Jitsu Reference';
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [stage]);

  const startScenario = (s: Scenario) => {
    setScenario(s);
    setWrongChoice(null);
    setShareStatus('idle');
    setStage('play');
  };

  const startRandom = () => {
    const pick = scenarios[Math.floor(Math.random() * scenarios.length)];
    startScenario(pick);
  };

  const chooseOption = (choice: ScenarioChoice) => {
    if (choice.correct) {
      setWrongChoice(null);
      setStage('resolved');
    } else {
      setWrongChoice(choice);
    }
  };

  const technique = scenario ? techniques.find((t) => t.id === scenario.techniqueId) : undefined;

  const handleShare = async () => {
    const text = scenario
      ? `I just escaped "${scenario.title}" using a real Jiu-Jitsu move (${technique?.name}). Think you could? Try it:`
      : 'Could you escape this? A jiu-jitsu challenge from Ground Up:';
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Could You Escape This?', text, url });
        return;
      }
    } catch {
      // fall through to clipboard
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2500);
    } catch {
      // clipboard unavailable; silently ignore
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="px-6 pt-32 pb-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-3 w-3" />
            Home
          </Link>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {stage === 'select' && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-32"
          >
            <div className="mx-auto max-w-5xl">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-10 bg-primary" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  A 30-Second Challenge
                </span>
              </div>
              <h1
                className="font-sans text-5xl font-semibold uppercase leading-[0.95] tracking-tighter md:text-7xl"
                data-testid="text-challenge-title"
              >
                Could You <span className="text-primary italic font-serif tracking-normal">Escape</span> This?
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
                Pick a scenario. You've never trained a day in your life. Choose what you'd
                actually do &mdash; then find out if it's a real technique that grapplers around
                the world rely on, or the mistake everyone makes the first time.
              </p>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {scenarios.map((s, i) => (
                  <motion.button
                    key={s.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    onClick={() => startScenario(s)}
                    className="group relative aspect-[4/5] overflow-hidden border border-white/10 text-left"
                    data-testid={`button-scenario-${s.id}`}
                  >
                    <img
                      src={techniqueImage(s.image)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-50 transition-all duration-700 grayscale group-hover:opacity-70 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-primary">
                        Scenario {i + 1}
                      </span>
                      <h3 className="mt-2 font-sans text-2xl font-bold uppercase tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-serif italic text-muted-foreground">{s.tagline}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={startRandom}
                  className="group inline-flex items-center justify-center border border-primary px-10 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  data-testid="button-surprise-me"
                >
                  Surprise Me
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {stage === 'play' && scenario && (
          <motion.div
            key={`play-${scenario.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative px-6 pb-32"
          >
            <div className="mx-auto max-w-3xl">
              <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-white/10">
                <img
                  src={techniqueImage(scenario.image)}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-primary">
                    {scenario.title}
                  </span>
                </div>
              </div>

              <p
                className="font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl"
                data-testid="text-scenario-narration"
              >
                {scenario.narration}
              </p>

              <h2 className="mt-10 mb-6 font-sans text-sm font-bold uppercase tracking-[0.25em] text-primary">
                {scenario.prompt}
              </h2>

              <div className="flex flex-col gap-4">
                {scenario.choices.map((choice) => {
                  const isActiveWrong = wrongChoice?.id === choice.id;
                  return (
                    <div key={choice.id}>
                      <button
                        onClick={() => chooseOption(choice)}
                        className={`w-full border px-6 py-5 text-left font-serif text-lg transition-all ${
                          isActiveWrong
                            ? 'border-destructive/60 bg-destructive/10 text-foreground'
                            : 'border-white/10 text-foreground/90 hover:border-primary/60 hover:bg-primary/5'
                        }`}
                        data-testid={`button-choice-${choice.id}`}
                      >
                        {choice.label}
                      </button>
                      <AnimatePresence>
                        {isActiveWrong && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 flex gap-3 border-l-2 border-destructive/60 bg-destructive/5 px-5 py-4">
                              <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                              <p className="font-serif text-base leading-relaxed text-muted-foreground">
                                {choice.feedback}{' '}
                                <span className="text-foreground">Try another option.</span>
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {stage === 'resolved' && scenario && technique && (
          <motion.div
            key={`resolved-${scenario.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="px-6 pb-32"
          >
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </div>
                <span className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  You escaped
                </span>
              </motion.div>

              <h1
                className="font-sans text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl"
                data-testid="text-resolution-title"
              >
                {technique.name}
              </h1>
              <p className="mt-3 font-serif italic text-lg text-muted-foreground">
                A real, {technique.difficulty.toLowerCase()}-level technique &mdash; not a movie stunt.
              </p>

              <div className="relative mt-10 aspect-[16/9] overflow-hidden border border-white/10">
                <img
                  src={techniqueImage(scenario.image)}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>

              <p className="mt-10 font-serif text-lg leading-relaxed text-foreground/90 md:text-xl">
                {scenario.resolutionNarration}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href={`/techniques/${technique.id}`}
                  className="inline-flex items-center justify-center bg-primary px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
                  data-testid="link-learn-technique"
                >
                  Learn the Full Technique
                </Link>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-all hover:border-white/40"
                  data-testid="button-share"
                >
                  <Share2 className="h-4 w-4" />
                  {shareStatus === 'copied' ? 'Link Copied' : 'Tell a Friend'}
                </button>
                <button
                  onClick={() => setStage('select')}
                  className="inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-foreground"
                  data-testid="button-another-scenario"
                >
                  Try Another Scenario
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
