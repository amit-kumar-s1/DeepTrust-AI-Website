import type { ReactNode } from "react";

export default function DetectLayout({
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
      "
    >
      {/* Background Blur */}
      <div
        className="
        absolute
        top-0
        left-0

        w-full
        h-full

        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto

        px-6
        py-12
        "
      >
        {children}
      </div>
    </div>
  );
}