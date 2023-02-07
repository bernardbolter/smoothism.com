import React from "react";
import { motion } from "framer-motion";

const ThreeDots = () => {
  return (
    <motion.svg viewBox="0 0 120 30" fill="#222">
      <motion.circle
        cx="15"
        cy="15"
        r="15"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 0.5, opacity: 0.4 }}
        exit={{ scale: 1 }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      />

      <motion.circle
        cx="60"
        cy="15"
        r="9"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 0.5, opacity: 0.4 }}
        exit={{ scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.4,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.circle
        cx="105"
        cy="15"
        r="15"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 0.5, opacity: 0.4 }}
        exit={{ scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </motion.svg>
  );
};

export default ThreeDots;
