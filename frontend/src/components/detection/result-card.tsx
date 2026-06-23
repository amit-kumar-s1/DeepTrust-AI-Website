interface Props {
  imageUrl: string;
  prediction: string;
  confidence: number;
}

export default function ResultCard({
  imageUrl,
  prediction,
  confidence,
}: Props) {

  const isFake =
    prediction === "FAKE";

  return (
    <div
      className="
      mt-10

      rounded-3xl
      border
      border-cyan-500/20

      bg-gradient-to-br
      from-[#071427]
      via-[#08162f]
      to-[#0a0f2b]

      p-8
      "
    >
      {/* Header */}

      <h2
        className="
        text-4xl
        font-bold
        "
      >
        Image Detection Result
      </h2>

      <p
        className="
        text-gray-400
        mt-3
        "
      >
        Our AI models analyzed the image
        for signs of manipulation.
      </p>

      {/* Main Section */}

      <div
        className="
        mt-10

        grid
        lg:grid-cols-2

        gap-8
        "
      >
        {/* LEFT */}

        <div
          className="
          rounded-3xl
          border
          border-white/10

          bg-white/[0.03]

          p-6
          "
        >
          <h3
            className="
            text-xl
            font-semibold
            mb-5
            "
          >
            Uploaded Image
          </h3>

          <img
            src={imageUrl}
            alt="Uploaded"
            className="
            w-full
            rounded-2xl
            object-cover
            "
          />
        </div>

        {/* RIGHT */}

        <div
          className="
          rounded-3xl
          border
          border-white/10

          bg-white/[0.03]

          p-8

          flex
          flex-col
          items-center
          justify-center
          "
        >
          <h3
            className="
            text-xl
            font-semibold
            mb-8
            "
          >
            Detection Result
          </h3>

          {/* Circle */}

          <div
            className={`
              h-72
              w-72

              rounded-full

              border-[12px]

              flex
              flex-col
              items-center
              justify-center

              shadow-lg

              ${
                isFake
                  ? "border-red-500 shadow-red-500/20"
                  : "border-green-400 shadow-green-400/20"
              }
            `}
          >
            <span
              className="
              text-gray-300
              text-2xl
              "
            >
              Confidence
            </span>

            <span
              className="
              text-7xl
              font-bold
              mt-2
              "
            >
              {Math.round(confidence)}%
            </span>

            <span
              className={`
                mt-3
                text-xl

                ${
                  isFake
                    ? "text-red-400"
                    : "text-green-400"
                }
              `}
            >
              Very High
            </span>
          </div>

          {/* Result */}

          <div className="mt-10">

            <h2
              className={`
                text-6xl
                font-bold

                ${
                  isFake
                    ? "text-red-400"
                    : "text-green-400"
                }
              `}
            >
              {prediction}
            </h2>

          </div>

          {/* Meaning */}

          <div
            className="
            mt-10
            border-t
            border-white/10

            pt-8
            "
          >
            <h4
              className="
              text-xl
              font-semibold
              mb-4
              "
            >
              What does this mean?
            </h4>

            <p
              className="
              text-gray-400
              leading-8
              "
            >
              {isFake
                ? "Strong indicators of AI manipulation or digital alteration were detected. This image may be synthetic, edited, or generated using AI tools."
                : "Our AI analysis indicates that this image is real. No significant signs of AI manipulation or digital alteration were detected."}
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}

      <div
        className="
        mt-8

        rounded-3xl
        border
        border-white/10

        bg-white/[0.03]

        p-6
        "
      >
        <h3
          className="
          text-xl
          font-semibold
          "
        >
          How it works
        </h3>

        <p
          className="
          text-gray-400
          mt-3
          "
        >
          We use an ensemble of four deep
          learning models including ResNet18,
          EfficientNet-B0, EfficientNet-B4 and
          DINOv2 to analyze patterns,
          inconsistencies and artifacts
          commonly found in AI-generated
          or manipulated images.
        </p>
      </div>

    </div>
  );
}