"use client";

interface Props {
  progress: number;
}

export default function ScanProgress({
  progress,
}: Props) {
  return (
    <div className="mt-8">

      <div className="flex justify-between">
        <span>Scanning...</span>
        <span>{progress}%</span>
      </div>

      <div
        className="
        h-3
        mt-3
        bg-white/10
        rounded-full
        "
      >
        <div
          style={{
            width: `${progress}%`,
          }}
          className="
          h-full
          rounded-full
          bg-cyan-500
          "
        />
      </div>

    </div>
  );
}