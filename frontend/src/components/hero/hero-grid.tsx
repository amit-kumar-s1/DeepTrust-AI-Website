"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

const particles = [
  "left-[12%] top-[26%]",
  "left-[24%] top-[68%]",
  "left-[46%] top-[18%]",
  "left-[67%] top-[74%]",
  "left-[82%] top-[30%]",
  "left-[91%] top-[58%]",
];

export default function HeroGrid() {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <div
      className="
      absolute
      inset-0
      pointer-events-none
      overflow-hidden
      "
    >
      <motion.div
        className="
        absolute
        inset-0
        opacity-20

        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]

        bg-[size:60px_60px]
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                backgroundPosition: [
                  "0px 0px",
                  "60px 60px",
                ],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 26,
          ease: "linear",
        }}
      />

      <motion.div
        className="
        absolute
        -top-24
        left-1/2
        h-[620px]
        w-[180px]
        -translate-x-1/2
        rotate-12
        bg-gradient-to-b
        from-cyan-400/0
        via-cyan-400/10
        to-cyan-400/0
        blur-2xl
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [-160, 160, -160],
                opacity: [0.12, 0.3, 0.12],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
        absolute
        right-[8%]
        top-[18%]
        h-[360px]
        w-[360px]
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [0.92, 1.08, 0.92],
                opacity: [0.2, 0.36, 0.2],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
      />

      {particles.map((position, index) => (
        <motion.span
          key={position}
          className={`
          absolute
          ${position}
          h-1
          w-1
          rounded-full
          bg-cyan-300/50
          shadow-[0_0_16px_rgba(103,232,249,0.55)]
          `}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.18, 0.55, 0.18],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 7 + index,
            delay: index * 0.45,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
