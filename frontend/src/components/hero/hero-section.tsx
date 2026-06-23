"use client";

import { motion } from "framer-motion";

import HeroButtons from "./hero-buttons";
import AIShield from "./ai-shield";
import HeroGrid from "./hero-grid";
import AnimatedHeadlineWord from "./animated-headline-word";

export default function HeroSection() {
  return (
    <section
      className="
      relative
      overflow-hidden

      min-h-screen

      flex
      items-center

      pt-24
      "
    >
      <HeroGrid />

      <div
        className="
        max-w-7xl
        mx-auto

        px-6

        grid
        lg:grid-cols-2

        gap-20

        items-center
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div
            className="
            inline-flex
            items-center

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/10

            px-4
            py-2

            text-sm
            "
          >
            AI-Powered DeepFake Detection
          </div>

          <h1
            className="
            mt-8

            text-5xl
            md:text-7xl

            font-black

            leading-tight
            "
          >
            Detect
            <AnimatedHeadlineWord />

            Before They Deceive
          </h1>

          <p
            className="
            mt-8

            text-lg
            text-gray-400

            max-w-xl
            "
          >
            DeepTrust AI helps enterprises,
            researchers, journalists, and
            security teams identify manipulated
            images, videos, documents, and text
            with advanced AI analysis.
          </p>

          <HeroButtons />
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <AIShield />
        </motion.div>
      </div>
    </section>
  );
}
