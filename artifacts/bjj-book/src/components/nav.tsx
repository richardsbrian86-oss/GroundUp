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
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
        <Link href="/" className="group flex items-center gap-2 sm:gap-3 shrink-0" data-testid="link-home">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-background" />
          </div>
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-sans text-xs sm:text-lg font-bold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-foreground">
              Jiu-Jitsu
            </span>
            <span className="font-sans text-[7px] sm:text-[9px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground">
              For Everyone
            </span>
          </span>
        </Link>
        
        <nav className="flex items-center gap-3 sm:gap-8">
          <Link 
            href="/" 
            className={`hidden sm:inline font-sans text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors ${
              location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-nav-home"
          >
            Journey
          </Link>
          <Link 
            href="/techniques" 
            className={`font-sans text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors relative whitespace-nowrap ${
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
          <Link
            href="/challenge"
            className={`font-sans text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase border px-2.5 py-1.5 sm:px-4 sm:py-2 transition-all whitespace-nowrap shrink-0 ${
              location.startsWith("/challenge")
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            }`}
            data-testid="link-nav-challenge"
          >
            Try It
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}