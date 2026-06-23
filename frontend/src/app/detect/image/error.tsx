"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <div
      className="
      min-h-screen

      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        text-center
        max-w-md
        "
      >
        <h2
          className="
          text-3xl
          font-bold
          text-red-400
          "
        >
          Something went wrong
        </h2>

        <p className="mt-4 text-gray-400">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="
          mt-6

          px-6
          py-3

          rounded-xl

          bg-cyan-500
          text-black

          font-semibold
          "
        >
          Try Again
        </button>
      </div>
    </div>
  );
}