"use client";

import { useState } from "react";

import ResultCard from "@/components/detection/result-card";
import UploadZone from "@/components/detection/upload-zone";

const videoResult = {
  authenticityScore: 86,
  manipulationScore: 14,
  confidenceScore: 93,
  verdict: "Likely Authentic",
};

export default function VideoDetectionPage() {
  const [result, setResult] =
    useState<typeof videoResult | null>(null);

  return (
    <>
      <h1 className="text-5xl font-bold">
        Video Detection
      </h1>

      <p className="mt-4 text-gray-400">
        Upload a video and verify authenticity.
      </p>

      <div className="mt-10">
        <UploadZone
          onFileChange={() =>
            setResult(videoResult)
          }
        />
      </div>

      {result && (
        <ResultCard {...result} />
      )}
    </>
  );
}
