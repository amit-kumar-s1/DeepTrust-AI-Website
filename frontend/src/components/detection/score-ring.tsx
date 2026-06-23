interface Props {
  score: number;
}

export default function ScoreRing({
  score,
}: Props) {
  return (
    <div
      className="
      w-32
      h-32

      rounded-full

      border-8
      border-cyan-500

      flex
      items-center
      justify-center
      "
    >
      <span
        className="
        text-3xl
        font-bold
        "
      >
        {score}%
      </span>
    </div>
  );
}