import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { techniques } from "../data/techniques";

export default function TechniqueDetail() {
  const { id } = useParams();
  const technique = techniques.find(t => t.id === id);

  if (!technique) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <h1 className="font-sans text-3xl uppercase tracking-widest text-muted-foreground mb-6">Technique Not Found</h1>
        <Link href="/techniques" className="text-primary font-sans uppercase tracking-[0.2em] text-sm hover:underline">
          Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/techniques"
          className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          data-testid="link-back"
        >
          <div className="w-6 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-8 transition-all" />
          Back to Library
        </Link>

        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-l-4 border-primary pl-6 md:pl-10 mb-16"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary font-bold bg-primary/10 px-3 py-1">
              {technique.category}
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground border border-white/10 px-3 py-1">
              {technique.difficulty}
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground border border-white/10 px-3 py-1">
              {technique.giNoGi}
            </span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground mb-6 leading-none" data-testid="text-tech-name">
            {technique.name}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-sans text-sm uppercase tracking-widest">Position:</span>
            <span className="font-serif text-lg text-foreground">{technique.position}</span>
          </div>
        </motion.div>

        {/* Abstract Geometry Banner (Replacing photo) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full h-48 md:h-64 bg-card border border-white/5 relative overflow-hidden mb-16 flex items-center justify-center"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="w-32 h-32 border-2 border-primary rotate-45 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary opacity-50 rotate-12" />
          </div>
          <div className="absolute bottom-4 right-6 font-sans text-[10rem] font-bold text-white/[0.02] tracking-tighter uppercase leading-none pointer-events-none select-none">
            {technique.category}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Instructions */}
          <div className="lg:col-span-2">
            <p className="font-serif text-xl text-foreground leading-relaxed mb-12">
              {technique.description}
            </p>

            <h2 className="font-sans text-2xl font-bold uppercase tracking-wide text-foreground mb-8 border-b border-white/10 pb-4">
              Execution Steps
            </h2>
            
            <div className="space-y-8">
              {technique.steps.map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={idx} 
                  className="flex gap-6 group"
                >
                  <div className="font-sans text-4xl font-bold text-white/10 group-hover:text-primary transition-colors leading-none w-10 text-right shrink-0">
                    {idx + 1}
                  </div>
                  <p className="font-serif text-lg text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Key Points */}
            <div className="bg-card border border-white/5 p-8">
              <h3 className="font-sans text-lg font-bold uppercase tracking-widest text-primary mb-6">
                Key Details
              </h3>
              <ul className="space-y-4">
                {technique.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-serif text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-950/20 border border-red-900/30 p-8">
              <h3 className="font-sans text-lg font-bold uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
                Errors
              </h3>
              <ul className="space-y-4">
                {technique.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                    <span className="font-serif text-muted-foreground/90">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}