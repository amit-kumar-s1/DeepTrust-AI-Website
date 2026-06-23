import type { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
      min-h-screen
      relative
      overflow-hidden

      bg-[var(--background)]
      text-[var(--foreground)]
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-0

        w-[500px]
        h-[500px]

        bg-cyan-500/20

        blur-[150px]

        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0

        w-[500px]
        h-[500px]

        bg-purple-500/20

        blur-[150px]

        rounded-full
        "
      />

      {/* Grid Overlay */}

      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      {/* Content */}

      <div
        className="
        relative
        z-10

        flex
        items-center
        justify-center

        min-h-screen

        px-4
        "
      >
        {children}
      </div>
    </div>
  );
}
