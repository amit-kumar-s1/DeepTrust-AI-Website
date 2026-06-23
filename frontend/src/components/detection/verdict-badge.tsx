interface Props {
  verdict: string;
}

export default function VerdictBadge({
  verdict,
}: Props) {
  const color =
    verdict === "Authentic"
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";

  return (
    <span
      className={`
      px-4 py-2
      rounded-full
      text-sm
      font-medium
      ${color}
      `}
    >
      {verdict}
    </span>
  );
}