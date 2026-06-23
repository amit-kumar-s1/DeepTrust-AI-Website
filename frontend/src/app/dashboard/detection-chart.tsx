"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Authentic",
    value: 72,
  },

  {
    name: "Manipulated",
    value: 18,
  },

  {
    name: "Suspicious",
    value: 10,
  },
];

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#eab308",
];

export default function DetectionChart() {
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
        Detection Distribution
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}