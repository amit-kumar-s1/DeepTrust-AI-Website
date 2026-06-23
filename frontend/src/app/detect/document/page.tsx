"use client";

import { useState } from "react";

import ResultCard from "@/components/detection/result-card";
import UploadZone from "@/components/detection/upload-zone";

const documentResult = {
  authenticityScore: 91,
  manipulationScore: 9,
  confidenceScore: 95,
  verdict: "Authentic",
};

export default function DocumentDetectionPage() {
  const [result, setResult] =
    useState<typeof documentResult | null>(null);

  return (
    <>
      <h1 className="text-5xl font-bold">
        Document Detection
      </h1>

      <p className="mt-4 text-gray-400">
        Upload a document and verify authenticity.
      </p>

      <div className="mt-10">
        <UploadZone
          onFileChange={() =>
            setResult(documentResult)
          }
        />
      </div>

      {result && (
        <ResultCard {...result} />
      )}
    </>
  );
}
