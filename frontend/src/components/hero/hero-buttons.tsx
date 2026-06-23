"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import GradientButton from "@/components/ui/gradient-button";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
      <Link href="/detect/image">
        <GradientButton>
          Start Detecting
        </GradientButton>
      </Link>
      {/* 
      <button
        className="
        flex items-center gap-2
        px-6 py-3
        rounded-xl
        border border-white/10
        backdrop-blur-xl
        hover:bg-white/5
        transition-all
        "
      >
        <Play size={18} />
        Watch Demo
      </button>
      */}
    </div>
  );
}