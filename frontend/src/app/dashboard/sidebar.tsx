"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BarChart3,
  History,
  CreditCard,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-72
      min-h-screen
      border-r
      border-white/10
      bg-black/20
      backdrop-blur-xl
      p-6
      "
    >
      <div className="flex items-center gap-3 mb-10">
        <Shield className="text-cyan-400" size={32} />

        <div>
          <h1 className="font-bold text-xl">
            DeepTrust AI
          </h1>

          <p className="text-xs text-gray-400">
            Dashboard
          </p>
        </div>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3

                px-4
                py-3

                rounded-xl

                transition-all

                ${
                  active
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "hover:bg-white/5"
                }
              `}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-10">
        <button
          className="
          w-full

          flex
          items-center
          gap-3

          px-4
          py-3

          rounded-xl

          hover:bg-red-500/10
          text-red-400
          "
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}