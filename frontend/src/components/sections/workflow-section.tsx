"use client";

import GlassCard from "@/components/ui/glass-card";

const steps = [

  {
    step: "01",
    title: "Upload",
    desc: "Upload your image, video, document or text.",
  },

  {
    step: "02",
    title: "Analyze",
    desc: "DeepTrust AI performs advanced analysis.",
  },

  {
    step: "03",
    title: "Get Results",
    desc: "Receive confidence scores and reports.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <GlassCard
              key={step.step}
              className="p-8 text-center"
            >
              <div
                className="
                text-cyan-400
                text-5xl
                font-black
                "
              >
                {step.step}
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {step.desc}
              </p>

            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}