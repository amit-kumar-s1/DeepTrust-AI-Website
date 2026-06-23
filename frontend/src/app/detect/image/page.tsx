"use client";

import { useState } from "react";

import UploadZone from "@/components/detection/upload-zone";
import ResultCard from "@/components/detection/result-card";

import { detectImage } from "@/services/api/image.api";

export default function ImageDetectionPage() {
  const [result, setResult] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState("");

  async function handleUpload(file: File) {
    try {
      setImagePreview(
        URL.createObjectURL(file)
      );

      const data =
        await detectImage(file);

      console.log(data);

      setResult(data);
    } catch (error) {
      console.error(error);
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
        <UploadZone
          onFileChange={handleUpload}
        />
      </div>

      {result && (
        <ResultCard
          imageUrl={imagePreview}
          prediction={result.prediction}
          confidence={result.confidence}
        />
      )}
    </>
  );
}