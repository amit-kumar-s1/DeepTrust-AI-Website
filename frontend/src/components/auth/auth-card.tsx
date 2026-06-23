import { ReactNode } from "react";

export default function AuthCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
      w-full
      max-w-md

      rounded-3xl

      border
      border-slate-200/60
      dark:border-white/10

      bg-white/80
      dark:bg-white/5

      backdrop-blur-xl

      p-8
      "
    >
      {children}
    </div>
  );
}
