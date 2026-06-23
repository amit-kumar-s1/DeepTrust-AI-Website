"use client";

import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import clsx from "clsx";

interface GradientButtonProps
  extends Omit<
    HTMLMotionProps<"button">,
    "children" | "className"
  > {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={clsx(
        "rounded-xl",
        "px-6",
        "py-3",
        "font-semibold",
        "text-white",
        "bg-gradient-to-r",
        "from-indigo-600",
        "via-cyan-500",
        "to-blue-600",
        "shadow-lg",
        "transition-all",
        "duration-300",
        "hover:shadow-cyan-500/40",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
