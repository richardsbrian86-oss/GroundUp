import React from 'react';
import { motion } from 'framer-motion';

export const Scene2 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-bg-light overflow-hidden flex flex-col items-center justify-center"
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
      exit={{ clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <motion.div 
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[60vh] mix-blend-multiply opacity-80"
        initial={{ x: '-20%', rotate: -5, opacity: 0 }}
        animate={{ x: '0%', rotate: -2, opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/armbar.jpg`} 
          alt="Armbar" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[55vh] mix-blend-multiply opacity-80"
        initial={{ x: '20%', rotate: 5, opacity: 0 }}
        animate={{ x: '0%', rotate: 2, opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/berimbolo.jpg`} 
          alt="Berimbolo" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.p 
          className="font-serif italic text-text-primary text-[3vw] mb-[-2vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A complete system.
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1 
            className="text-[18vw] leading-[0.8] font-display text-text-primary tracking-tighter uppercase"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            GROUND UP
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};
