"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", scans: 120 },
  { day: "Tue", scans: 210 },
  { day: "Wed", scans: 180 },
  { day: "Thu", scans: 320 },
  { day: "Fri", scans: 290 },
  { day: "Sat", scans: 400 },
  { day: "Sun", scans: 370 },
];

export default function UsageChart() {
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
      <h2 className="text-xl font-bold mb-6">
        Scan Activity
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="scans"
              stroke="#22d3ee"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}