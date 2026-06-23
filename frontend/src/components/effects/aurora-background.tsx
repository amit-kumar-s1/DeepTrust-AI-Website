export default function AuroraBackground() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-10
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        top-0
        left-1/4
        w-[600px]
        h-[600px]
        bg-indigo-500/20
        blur-[140px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-1/4
        w-[500px]
        h-[500px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
        "
      />
    </div>
  );
}