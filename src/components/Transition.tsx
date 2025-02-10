"use client";

import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <div className="fixed inset-0 z-[50] overflow-hidden">
      {/* First Layer - Deep Purple */}
      <motion.div
        className="absolute right-0 h-screen w-screen bottom-full bg-gradient-to-br from-[#2e2257] to-[#3b1b82] shadow-2xl"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Second Layer - Soft Lavender */}
      <motion.div
        className="absolute right-0 h-screen w-screen bottom-full bg-gradient-to-br from-[#9587ce] to-[#7861c6] shadow-xl"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.3, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Third Layer - Royal Purple */}
      <motion.div
        className="absolute right-0 h-screen w-screen bottom-full bg-gradient-to-br from-[#4b3792] to-[#3a2675] shadow-lg"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.45, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
};

export default Transition;
