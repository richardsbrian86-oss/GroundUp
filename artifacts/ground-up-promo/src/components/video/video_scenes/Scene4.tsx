import React from 'react';
import { motion } from 'framer-motion';

export const Scene4 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-bg-dark overflow-hidden flex flex-col items-center justify-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.1, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <motion.div 
        className="absolute inset-0 mix-blend-screen opacity-30"
        initial={{ scale: 1.2, y: '5%' }}
        animate={{ scale: 1, y: '0%' }}
        transition={{ duration: 4, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/omoplata.jpg`} 
          alt="Omoplata Escape" 
          className="w-full h-full object-cover grayscale contrast-150 invert"
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-10">
        <motion.div
          className="w-20 h-1 bg-accent mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'circOut' }}
        />
        
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[8vw] leading-none font-display text-text-inverse tracking-tighter uppercase"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            THE ESCAPE
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h2 
            className="text-[8vw] leading-none font-display text-accent tracking-tighter uppercase"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            CHALLENGE
          </motion.h2>
        </div>

        <motion.p 
          className="font-serif italic text-text-muted text-[2.5vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Does your instinct match real technique?
        </motion.p>
      </div>
    </motion.div>
  );
};
