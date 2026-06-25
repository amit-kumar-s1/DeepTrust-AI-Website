"use client";

import { useState } from "react";

import UploadZone from "@/components/detection/upload-zone";
import ResultCard from "@/components/detection/result-card";

import { detectImage } from "@/services/api/image.api";

interface DetectionResult {
  imageUrl: string;
  prediction: string;
  confidence: number;
}

export default function ImageDetectionPage() {
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload(file: File) {
    try {
      setLoading(true);

      // Create preview URL for UI
      const preview = URL.createObjectURL(file);

      // Call backend API
      const data = await detectImage(file);

      // Normalize backend response
      const normalizedResult: DetectionResult = {
        imageUrl: preview,
        prediction: (data?.prediction || "UNKNOWN").toUpperCase(),
        confidence: Math.round(data?.confidence || 0),
      };

      setResult(normalizedResult);
    } catch (error) {
      console.error("Detection failed:", error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-5xl font-bold">
        Image Detection
      </h1>

      <p className="mt-4 text-gray-400">
        Upload an image and verify authenticity.
      </p>

      <div className="mt-10">
        <UploadZone onFileChange={handleUpload} />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="mt-10 text-gray-400">
          Analyzing image...
        </div>
      )}

      {/* Result */}
      {result && !loading && (
        <ResultCard
          imageUrl={result.imageUrl}
          prediction={result.prediction}
          confidence={result.confidence}
        />
      )}
    </>
  );
}