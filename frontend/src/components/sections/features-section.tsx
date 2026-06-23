"use client";

import {
  ImageIcon,
  Video,
  FileText,
  ScanText,
  Zap,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "@/components/ui/glass-card";

const features = [

  {
    icon: ImageIcon,
    title: "Image Detection",
    desc: "Detect AI-generated and manipulated images.",
  },

  {
    icon: Video,
    title: "Video Detection",
    desc: "Frame-by-frame deepfake analysis.",
  },

  {
    icon: FileText,
    title: "Document Verification",
    desc: "Metadata and tampering detection.",
  },

  {
    icon: ScanText,
    title: "Text Analysis",
    desc: "AI generated content identification.",
  },

  {
    icon: Zap,
    title: "Real-Time Processing",
    desc: "Fast enterprise-grade scanning.",
  },

  {
    icon: ShieldCheck,
    title: "Explainable Reports",
    desc: "Transparent confidence scoring.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Powerful Detection Features
          </h2>

          <p className="text-gray-400 mt-4">
            Built for enterprises, researchers and security teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <GlassCard
                key={feature.title}
                className="p-8"
              >
                <Icon
                  size={40}
                  className="text-cyan-400"
                />

                <h3 className="mt-5 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {feature.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}