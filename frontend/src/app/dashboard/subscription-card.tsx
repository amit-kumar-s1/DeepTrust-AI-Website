import ScanHistoryTable from "@/components/dashboard/scan-history-table";

export default function HistoryPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Scan History
        </h1>

        <p className="text-gray-400 mt-2">
          View all DeepFake detection results.
        </p>

      </div>

      <ScanHistoryTable />

    </div>
  );
}