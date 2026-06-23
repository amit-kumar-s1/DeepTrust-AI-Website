"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-40
        left-20
        w-32
        h-32
        bg-cyan-500/20
        rounded-full
        blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        right-20
        top-72
        w-40
        h-40
        bg-indigo-500/20
        rounded-full
        blur-3xl
        "
      />
    </>
  );
}