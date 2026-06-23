"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import {
  Brain,
  FileText,
  ImageIcon,
  ScanText,
  Video,
} from "lucide-react";

const cycleDuration = 7.4;

const confidenceSteps = [
  {
    value: "0%",
    delay: 0,
  },
  {
    value: "15%",
    delay: 3600,
  },
  {
    value: "42%",
    delay: 3900,
  },
  {
    value: "71%",
    delay: 4200,
  },
  {
    value: "89%",
    delay: 4500,
  },
  {
    value: "99.2%",
    delay: 4900,
  },
];

const particles = [
  { x: 78, y: 88, sx: -44, sy: -22 },
  { x: 120, y: 58, sx: 36, sy: -36 },
  { x: 164, y: 92, sx: 52, sy: 6 },
  { x: 88, y: 142, sx: -54, sy: 32 },
  { x: 132, y: 124, sx: 12, sy: -54 },
  { x: 174, y: 150, sx: 64, sy: 40 },
  { x: 112, y: 190, sx: -30, sy: 58 },
  { x: 152, y: 204, sx: 42, sy: 62 },
  { x: 138, y: 86, sx: 0, sy: -70 },
  { x: 100, y: 170, sx: -70, sy: 10 },
  { x: 184, y: 118, sx: 72, sy: -26 },
  { x: 118, y: 226, sx: -14, sy: 76 },
];

function FloatingFeatureIcon({
  children,
  className,
  delay,
  duration,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  duration: number;
}) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -10, 4, 0],
              rotate: [0, 3, -2, 0],
            }
      }
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AIShield() {
  const shouldReduceMotion =
    useReducedMotion();

  const [confidence, setConfidence] =
    useState("99.2%");

  useEffect(() => {
    if (shouldReduceMotion) {
      setConfidence("99.2%");
      return;
    }

    const timers: number[] = [];

    const runConfidenceCycle = () => {
      confidenceSteps.forEach((step) => {
        const timer = window.setTimeout(() => {
          setConfidence(step.value);
        }, step.delay);

        timers.push(timer);
      });
    };

    runConfidenceCycle();

    const interval = window.setInterval(
      runConfidenceCycle,
      cycleDuration * 1000
    );

    return () => {
      timers.forEach((timer) =>
        window.clearTimeout(timer)
      );

      window.clearInterval(interval);
    };
  }, [shouldReduceMotion]);

  const loopTransition = useMemo(
    () => ({
      repeat: Infinity,
      duration: cycleDuration,
      ease: "easeInOut" as const,
    }),
    []
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      relative
      flex
      items-center
      justify-center
      min-h-[430px]
      "
    >
      <motion.div
        className="
        absolute
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
                opacity: [0.25, 0.45, 0.25],
                scale: [0.92, 1.08, 0.92],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
        relative
        w-[340px]
        h-[340px]

        rounded-full

        border
        border-cyan-500/30

        flex
        items-center
        justify-center

        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        shadow-[0_0_60px_rgba(6,182,212,0.14)]
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 40px rgba(6,182,212,0.12)",
                  "0 0 72px rgba(6,182,212,0.24)",
                  "0 0 40px rgba(6,182,212,0.12)",
                ],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 4.8,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="
          absolute
          inset-8
          rounded-full
          border
          border-cyan-400/15
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        />

        <motion.div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_58%)]
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.65, 0.35],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />

        <svg
          viewBox="0 0 260 260"
          className="
          relative
          h-[260px]
          w-[260px]
          "
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="heroShieldGradient"
              x1="72"
              y1="42"
              x2="190"
              y2="218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F46E5" />
              <stop
                offset="0.52"
                stopColor="#06B6D4"
              />
              <stop
                offset="1"
                stopColor="#2563EB"
              />
            </linearGradient>
            <filter id="heroCyanGlow">
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.g
            initial={false}
            animate={
              shouldReduceMotion
                ? {
                    opacity: 0.2,
                  }
                : {
                    opacity: [0.35, 1, 1, 0.18, 0.35],
                  }
            }
            transition={{
              ...loopTransition,
              times: [0, 0.1, 0.4, 0.55, 1],
            }}
          >
            <motion.path
              d="M129 55C101 55 81 77 81 108C81 135 94 153 112 166V184H146V166C164 153 177 135 177 108C177 77 157 55 129 55Z"
              fill="none"
              stroke="#67E8F9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 10"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      pathLength: [0.18, 1, 1, 0.3, 0.18],
                    }
              }
              transition={{
                ...loopTransition,
                times: [0, 0.16, 0.42, 0.58, 1],
              }}
            />
            <path
              d="M105 118C114 124 124 126 130 126C136 126 146 124 155 118"
              fill="none"
              stroke="#A5B4FC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          <motion.rect
            x="68"
            y="58"
            width="124"
            height="2"
            rx="1"
            fill="#67E8F9"
            filter="url(#heroCyanGlow)"
            initial={false}
            animate={
              shouldReduceMotion
                ? {
                    opacity: 0.7,
                  }
                : {
                    y: [0, 104, 0],
                    opacity: [0.2, 1, 0.2],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
          />

          <motion.g
            initial={false}
            animate={
              shouldReduceMotion
                ? {
                    opacity: 0.35,
                  }
                : {
                    opacity: [0.1, 0.15, 1, 0.2, 0.1],
                  }
            }
            transition={{
              ...loopTransition,
              times: [0, 0.2, 0.32, 0.5, 1],
            }}
          >
            {[
              [108, 102],
              [149, 102],
              [128, 124],
              [111, 145],
              [145, 145],
              [128, 156],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="4"
                fill="#67E8F9"
                filter="url(#heroCyanGlow)"
              />
            ))}
          </motion.g>

          <motion.g
            initial={false}
            animate={
              shouldReduceMotion
                ? {
                    opacity: 0.4,
                  }
                : {
                    opacity: [0.08, 0.08, 0.9, 1, 0.12],
                  }
            }
            transition={{
              ...loopTransition,
              times: [0, 0.43, 0.52, 0.66, 1],
            }}
          >
            {particles.map((particle) => (
              <motion.circle
                key={`${particle.x}-${particle.y}`}
                cx={particle.x}
                cy={particle.y}
                r="3"
                fill="#67E8F9"
                filter="url(#heroCyanGlow)"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: [
                          0,
                          0,
                          particle.sx,
                          particle.sx * 0.25,
                          0,
                        ],
                        y: [
                          0,
                          0,
                          particle.sy,
                          particle.sy * 0.25,
                          0,
                        ],
                        scale: [0.55, 0.55, 0.8, 1.2, 0.55],
                      }
                }
                transition={{
                  ...loopTransition,
                  times: [0, 0.42, 0.54, 0.66, 1],
                }}
              />
            ))}
          </motion.g>

          <motion.g
            initial={false}
            animate={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    opacity: [0.28, 0.28, 0.36, 0.92, 1, 0.92, 0.28],
                    scale: [0.94, 0.94, 0.96, 1, 1.04, 1, 0.94],
                  }
            }
            transition={{
              ...loopTransition,
              times: [0, 0.38, 0.54, 0.68, 0.78, 0.9, 1],
            }}
            style={{
              transformOrigin: "130px 130px",
            }}
            filter="url(#heroCyanGlow)"
          >
            <path
              d="M130 38L194 64V118C194 161 168 194 130 214C92 194 66 161 66 118V64L130 38Z"
              fill="url(#heroShieldGradient)"
            />
            <path
              d="M130 58L176 77V119C176 149 158 174 130 190C102 174 84 149 84 119V77L130 58Z"
              fill="#050816"
              fillOpacity="0.72"
            />
            <path
              d="M105 131L123 149L158 105"
              fill="none"
              stroke="#67E8F9"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </svg>
      </motion.div>

      <FloatingFeatureIcon
        delay={0}
        duration={7.2}
        className="absolute top-6 left-6"
      >
        <ImageIcon
          className="text-purple-400"
          size={34}
        />
      </FloatingFeatureIcon>

      <FloatingFeatureIcon
        delay={0.7}
        duration={8.4}
        className="absolute top-8 right-8"
      >
        <Video
          className="text-cyan-400"
          size={34}
        />
      </FloatingFeatureIcon>

      <FloatingFeatureIcon
        delay={1.2}
        duration={7.8}
        className="absolute bottom-10 left-8"
      >
        <FileText
          className="text-indigo-400"
          size={34}
        />
      </FloatingFeatureIcon>

      <FloatingFeatureIcon
        delay={0.4}
        duration={8.8}
        className="absolute bottom-8 right-8"
      >
        <ScanText
          className="text-green-400"
          size={34}
        />
      </FloatingFeatureIcon>

      <FloatingFeatureIcon
        delay={1.6}
        duration={9.2}
        className="absolute -top-1 left-1/2 -translate-x-1/2"
      >
        <Brain
          className="text-blue-400"
          size={32}
        />
      </FloatingFeatureIcon>

      <motion.div
        className="
        absolute
        -bottom-10

        rounded-2xl
        bg-white/5

        border
        border-white/10

        backdrop-blur-xl

        px-6
        py-4
        min-w-[142px]
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -3, 0],
                boxShadow: [
                  "0 0 0 rgba(6,182,212,0)",
                  "0 0 28px rgba(6,182,212,0.18)",
                  "0 0 0 rgba(6,182,212,0)",
                ],
              }
        }
        transition={{
          repeat: Infinity,
          duration: cycleDuration,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        }}
      >
        <p className="text-sm text-gray-400">
          Confidence
        </p>

        <h3
          className="
          text-2xl
          font-bold
          tabular-nums
          "
        >
          {confidence}
        </h3>
      </motion.div>
    </motion.div>
  );
}
