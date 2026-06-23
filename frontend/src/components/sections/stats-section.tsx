"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

const stats = [
  {
    value: "10M+",
    label: "Images Analyzed",
  },
  {
    value: "2M+",
    label: "Videos Verified",
  },
  {
    value: "500K+",
    label: "Documents Scanned",
  },
  {
    value: "99.2%",
    label: "Detection Accuracy",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <GlassCard className="p-8 text-center">

                <h3 className="text-4xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>

              </GlassCard>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}