"use client";

import Link from "next/link";

import {
  ImageIcon,
  Video,
  FileText,
  ScanText,
} from "lucide-react";

const actions = [
  {
    title: "Scan Image",
    href: "/detect/image",
    icon: ImageIcon,
  },

  {
    title: "Scan Video",
    href: "/detect/video",
    icon: Video,
  },

  {
    title: "Scan Document",
    href: "/detect/document",
    icon: FileText,
  },

  {
    title: "Analyze Text",
    href: "/detect/text",
    icon: ScanText,
  },
];

export default function QuickActions() {
  return (
    <div>

      <h2
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        Quick Actions
      </h2>

      <div
        className="
        grid
        md:grid-cols-4
        gap-4
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
              rounded-2xl

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl

              p-6

              hover:border-cyan-400/40
              hover:-translate-y-1

              transition-all
              "
            >
              <Icon
                size={32}
                className="text-cyan-400"
              />

              <h3
                className="
                mt-4
                font-semibold
                "
              >
                {action.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}