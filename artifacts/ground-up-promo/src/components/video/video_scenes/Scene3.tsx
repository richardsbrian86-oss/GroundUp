import React from 'react';
import { motion } from 'framer-motion';

export const Scene3 = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-accent overflow-hidden flex flex-col items-start justify-center pl-[10vw]"
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div 
        className="absolute right-[-10vw] top-[10%] w-[60vw] h-[80vh] mix-blend-multiply opacity-50"
        initial={{ scale: 1.2, filter: 'blur(20px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/cross-collar-choke.jpg`} 
          alt="Technique" 
          className="w-full h-full object-cover grayscale contrast-150"
        />
      </motion.div>

      <div className="relative z-10">
        <div className="overflow-hidden mb-[-2vw]">
          <motion.h2 
            className="text-[15vw] leading-none font-display text-bg-light tracking-tighter uppercase"
            initial={{ y: '100%', rotateX: 90 }}
            animate={{ y: '0%', rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'bottom' }}
          >
            74
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2 
            className="text-[8vw] leading-none font-display text-bg-dark tracking-tighter uppercase"
            initial={{ y: '100%', rotateX: 90 }}
            animate={{ y: '0%', rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'bottom' }}
          >
            TECHNIQUES.
          </motion.h2>
        </div>
        
        <motion.div 
          className="mt-[4vw] bg-bg-dark text-bg-light px-6 py-2 w-max"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="font-serif italic text-[2vw]">Broken down step by step</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
