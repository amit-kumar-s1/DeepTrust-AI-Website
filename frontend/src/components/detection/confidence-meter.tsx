interface Props {
  score: number;
}

export default function ConfidenceMeter({
  score,
}: Props) {
  return (
    <div>

      <div
        className="
        flex
        justify-between
        "
      >
        <span>Confidence</span>
        <span>{score}%</span>
      </div>

      <div
        className="
        h-3
        mt-2
        rounded-full
        bg-white/10
        "
      >
        <div
          style={{
            width: `${score}%`,
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