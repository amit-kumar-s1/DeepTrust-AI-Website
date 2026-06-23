import {
  ImageIcon,
  Video,
  FileText,
  ScanText,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";
import QuickActions from "@/components/dashboard/quick-actions";
import UsageChart from "@/components/dashboard/usage-chart";
import DetectionChart from "@/components/dashboard/detection-chart";
import RecentScans from "@/components/dashboard/recent-scans";
import ActivityTimeline from "@/components/dashboard/activity-timeline";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      <h1
        className="
        text-4xl
        font-bold
        "
      >
        Dashboard Overview
      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        "
      >
        <StatCard
          title="Images"
          value="6,200"
          icon={ImageIcon}
        />

        <StatCard
          title="Videos"
          value="2,150"
          icon={Video}
        />

        <StatCard
          title="Documents"
          value="1,840"
          icon={FileText}
        />

        <StatCard
          title="Texts"
          value="2,290"
          icon={ScanText}
        />
      </div>

      <QuickActions />
        <div className="grid lg:grid-cols-2 gap-6">
            <UsageChart />
            <DetectionChart />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
            <RecentScans />
            <ActivityTimeline />
        </div>
    </div>
  );
}