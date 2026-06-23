import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      p-6
      "
    >
      <div className="flex justify-between">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h3
            className="
            mt-3

            text-4xl
            font-bold
            "
          >
            {value}
          </h3>

        </div>

        <div
          className="
          w-14
          h-14

          rounded-xl

          bg-cyan-500/20

          flex
          items-center
          justify-center
          "
        >
          <Icon
            size={26}
            className="text-cyan-400"
          />
        </div>

      </div>
    </div>
  );
}