"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "DeepFakes",
  "Images",
  "Videos",
  "Documents",
  "Text",
];

export default function AnimatedHeadlineWord() {
  const shouldReduceMotion =
    useReducedMotion();

  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) =>
        (current + 1) % words.length
      );
    }, 2500);

    return () =>
      window.clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <span
      className="
      relative
      block
      h-[1.12em]
      overflow-hidden
      "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="
          absolute
          inset-0
          block

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500

          bg-clip-text
          text-transparent
          "
          initial={
            shouldReduceMotion
              ? false
              : {
                  y: 28,
                  opacity: 0,
                  filter: "blur(10px)",
                }
          }
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={
            shouldReduceMotion
              ? undefined
              : {
                  y: -28,
                  opacity: 0,
                  filter: "blur(10px)",
                }
          }
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
