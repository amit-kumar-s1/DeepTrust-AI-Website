export default function Loading() {
  return (
    <div
      className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      "
    >
      <div className="text-center">

        <div
          className="
          w-16
          h-16

          border-4
          border-cyan-500
          border-t-transparent

          rounded-full

          animate-spin

          mx-auto
          "
        />

        <p className="mt-4 text-gray-400">
          Loading Dashboard...
        </p>

      </div>
    </div>
  );
}