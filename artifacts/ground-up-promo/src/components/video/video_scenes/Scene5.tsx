import React from 'react';
import { motion } from 'framer-motion';

export const Scene5 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-bg-light overflow-hidden flex items-center justify-center"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <motion.div 
        className="absolute left-[5%] top-[10%] w-[35vw] h-[45vh] mix-blend-multiply opacity-70"
        initial={{ x: '-20%', opacity: 0 }}
        animate={{ x: '0%', opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/kimura.jpg`} 
          alt="Kimura" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      <motion.div 
        className="absolute right-[5%] bottom-[10%] w-[40vw] h-[50vh] mix-blend-multiply opacity-70"
        initial={{ x: '20%', opacity: 0 }}
        animate={{ x: '0%', opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/rear-naked-choke.jpg`} 
          alt="RNC" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.div 
          className="font-serif italic text-text-primary text-[6vw]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          The Gentle Art
        </motion.div>
        
        <motion.div
          className="h-[2px] bg-accent w-0 mx-auto mt-4"
          animate={{ width: '30vw' }}
          transition={{ duration: 1, delay: 1, ease: 'circOut' }}
        />
      </div>
    </motion.div>
  );
};
