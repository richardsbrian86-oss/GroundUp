import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { techniques, Technique } from "../data/techniques";

const CATEGORIES = ["All", "Guard", "Passing", "Sweeps", "Submissions", "Escapes", "Takedowns"];

export default function Techniques() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return techniques.filter(t => {
      const matchCategory = activeCategory === "All" || t.category === activeCategory;
      const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.position.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4" data-testid="text-library-title">
              Technique <span className="text-primary">Library</span>
            </h1>
            <p className="font-serif text-lg text-muted-foreground max-w-xl">
              Study the mechanics. Refine the details. Execution is in the precision.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Search techniques, positions..."
              className="bg-card border border-white/10 px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-full md:w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 font-sans text-xs uppercase tracking-[0.15em] border transition-all ${
                activeCategory === cat 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "bg-transparent border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
              }`}
              data-testid={`button-filter-${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-techniques">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                key={tech.id}
              >
                <Link href={`/techniques/${tech.id}`}>
                  <div className="group h-full flex flex-col bg-card border border-white/5 hover:border-primary/50 transition-colors cursor-pointer" data-testid={`card-technique-${tech.id}`}>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                          {tech.category}
                        </span>
                        <div className="flex gap-2">
                          <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground bg-background px-2 py-1">
                            {tech.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-sans text-2xl font-bold uppercase tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      
                      <p className="font-serif text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {tech.description}
                      </p>
                      
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          {tech.position}
                        </span>
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          {tech.giNoGi}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-sans text-xl uppercase tracking-widest text-muted-foreground">No techniques found.</p>
          </div>
        )}
      </div>
    </div>
  );
}