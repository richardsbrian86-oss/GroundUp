import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Nav() {
  const [location] = useLocation();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" data-testid="link-home">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="w-2.5 h-2.5 bg-background" />
          </div>
          <span className="font-sans text-xl font-bold tracking-[0.15em] uppercase text-foreground">
            BJJ<span className="text-muted-foreground font-medium">Ref</span>
          </span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-sans text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors ${
              location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-nav-home"
          >
            Journey
          </Link>
          <Link 
            href="/techniques" 
            className={`font-sans text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors relative ${
              location.startsWith("/techniques") ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-nav-techniques"
          >
            Library
            {location.startsWith("/techniques") && (
              <motion.div 
                layoutId="nav-indicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}