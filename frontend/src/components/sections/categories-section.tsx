"use client";

import Link from "next/link";

import GlassCard from "@/components/ui/glass-card";

const categories = [

  {
    title: "Image Detection",
    href: "/detect/image",
  },

  {
    title: "Video Detection",
    href: "/detect/video",
  },

  {
    title: "Document Detection",
    href: "/detect/document",
  },

  {
    title: "Text Detection",
    href: "/detect/text",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Detection Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
            >
              <GlassCard
                className="
                p-10
                hover:border-cyan-400/40
                transition-all
                "
              >
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  Analyze digital authenticity with AI.
                </p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}