import React from 'react';
import { motion } from 'framer-motion';

export const Scene6 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-bg-dark overflow-hidden flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          className="w-[6vw] h-[6vw] bg-accent rounded-full mb-[4vw] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="w-[3vw] h-[3vw] bg-bg-dark rounded-full" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1 
            className="text-[12vw] leading-none font-display text-text-inverse tracking-tighter uppercase"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            GROUND UP
          </motion.h1>
        </div>
        
        <motion.div 
          className="mt-6 flex items-center space-x-4 text-text-muted font-display tracking-widest text-[1.5vw] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>Available Now</span>
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          <span>Learn the System</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
