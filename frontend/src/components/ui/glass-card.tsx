import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "backdrop-blur-xl",
        "bg-white/70",
        "dark:bg-white/5",
        "border",
        "border-slate-200/60",
        "dark:border-white/10",
        "rounded-3xl",
        "p-6",
        "shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
