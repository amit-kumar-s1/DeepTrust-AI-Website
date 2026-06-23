interface Props {
  summary: string;
}

export default function AnalysisSummary({
  summary,
}: Props) {
  return (
    <div
      className="
      mt-6

      rounded-2xl

      border
      border-white/10

      bg-white/5

      p-6
      "
    >
      <h3 className="font-bold mb-4">
        Analysis Summary
      </h3>

      <p className="text-gray-400">
        {summary}
      </p>
    </div>
  );
}