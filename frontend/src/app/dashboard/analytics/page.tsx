import UsageChart from "@/components/dashboard/usage-chart";
import DetectionChart from "@/components/dashboard/detection-chart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Analytics
        </h1>

        <p className="text-gray-400 mt-2">
          DeepFake Detection Insights
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <UsageChart />

        <DetectionChart />

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          "
        >
          <h3 className="text-gray-400">
            Average Accuracy
          </h3>

          <p
            className="
            mt-4

            text-5xl
            font-bold

            text-cyan-400
            "
          >
            98.4%
          </p>
        </div>

        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          "
        >
          <h3 className="text-gray-400">
            DeepFakes Detected
          </h3>

          <p
            className="
            mt-4

            text-5xl
            font-bold

            text-red-400
            "
          >
            1,248
          </p>
        </div>

        <div
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          "
        >
          <h3 className="text-gray-400">
            Total Scans
          </h3>

          <p
            className="
            mt-4

            text-5xl
            font-bold

            text-green-400
            "
          >
            12,480
          </p>
        </div>

      </div>

    </div>
  );
}