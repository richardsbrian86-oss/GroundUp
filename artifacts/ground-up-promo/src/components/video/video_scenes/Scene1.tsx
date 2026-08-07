import React from 'react';
import { motion } from 'framer-motion';

export const Scene1 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-bg-dark flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={`${import.meta.env.BASE_URL}images/triangle-choke.jpg`}
        alt="Triangle Choke"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        style={{ filter: 'grayscale(100%) contrast(120%) invert(100%)' }}
        initial={{ scale: 1.2, x: '-5%', y: '-2%' }}
        animate={{ scale: 1, x: '0%', y: '0%' }}
        transition={{ duration: 4.5, ease: 'easeOut' }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden mb-2">
          <motion.h1 
            className="text-[12vw] leading-none font-display text-text-inverse tracking-tighter uppercase"
            initial={{ y: '100%', rotate: 2 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Not just
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            className="text-[14vw] leading-none font-display text-accent tracking-tighter uppercase"
            initial={{ y: '100%', rotate: -2 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            Moves.
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};
