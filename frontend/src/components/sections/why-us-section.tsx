import GlassCard from "@/components/ui/glass-card";
import {
  ShieldCheck,
  Brain,
  BarChart3,
  Cpu,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Built with security-first architecture for organizations.",
  },

  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "State-of-the-art AI detection for deepfakes and synthetic content.",
  },

  {
    icon: BarChart3,
    title: "Explainable Results",
    description:
      "Detailed confidence scores and transparent reporting.",
  },

  {
    icon: Cpu,
    title: "Scalable Platform",
    description:
      "Designed for high-volume enterprise workloads.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose DeepTrust AI
          </h2>

          <p className="text-gray-400 mt-4">
            Built for modern cybersecurity and authenticity verification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((item) => {

            const Icon = item.icon;

            return (
              <GlassCard
                key={item.title}
                className="p-8"
              >
                <Icon
                  size={40}
                  className="text-cyan-400"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}