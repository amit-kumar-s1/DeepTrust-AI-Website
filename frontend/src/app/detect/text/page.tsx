"use client";

import { useState } from "react";

import ResultCard from "@/components/detection/result-card";
import GradientButton from "@/components/ui/gradient-button";

const textResult = {
  authenticityScore: 88,
  manipulationScore: 12,
  confidenceScore: 92,
  verdict: "Likely Authentic",
};

export default function TextDetectionPage() {
  const [result, setResult] =
    useState<typeof textResult | null>(null);

  return (
    <>
      <h1 className="text-5xl font-bold">
        Text Detection
      </h1>

      <p className="mt-4 text-gray-400">
        Paste text and verify whether it appears AI-generated.
      </p>

      <div className="mt-10 space-y-5">
        <textarea
          rows={8}
          placeholder="Paste text for analysis"
          className="
          w-full
          rounded-3xl
          border
          border-slate-200/60
          dark:border-white/10
          bg-white/70
          dark:bg-white/5
          p-6
          outline-none
          focus:border-cyan-400/60
          "
        />

        <GradientButton
          onClick={() =>
            setResult(textResult)
          }
        >
          Analyze Text
        </GradientButton>
      </div>

      {result && (
        <ResultCard {...result} />
      )}
    </>
  );
}
