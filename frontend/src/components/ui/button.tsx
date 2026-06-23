"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AnimatedButton({
  children,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-indigo-500
      to-cyan-500
      text-white
      font-semibold
      shadow-lg
      hover:shadow-cyan-500/30
      transition-all
      duration-300
      "
    >
      {children}
    </motion.button>
  );
}