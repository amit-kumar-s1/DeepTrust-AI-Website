export default function ApiUsageCard() {
  return (
    <div
      className="
      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      p-6
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        "
      >
        API Usage
      </h2>

      <div className="mt-8 space-y-5">

        <div>

          <div className="flex justify-between">
            <span>Requests</span>
            <span>18,450</span>
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
              className="
              h-full

              rounded-full

              bg-cyan-500

              w-[70%]
              "
            />
          </div>

        </div>

        <div>

          <div className="flex justify-between">
            <span>Rate Limit</span>
            <span>70%</span>
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
              className="
              h-full

              rounded-full

              bg-green-500

              w-[70%]
              "
            />
          </div>

        </div>

      </div>
    </div>
  );
}