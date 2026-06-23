"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header
      className="
      h-20

      flex
      items-center
      justify-between

      border-b
      border-white/10

      px-8
      "
    >
      <div
        className="
        flex
        items-center

        gap-3

        bg-white/5

        px-4
        py-2

        rounded-xl
        "
      >
        <Search size={18} />

        <input
          placeholder="Search scans..."
          className="
          bg-transparent
          outline-none
          "
        />
      </div>

      <div className="flex items-center gap-5">

        <button
          className="
          p-3

          rounded-xl

          bg-white/5
          "
        >
          <Bell size={20} />
        </button>

        <div
          className="
          w-10
          h-10

          rounded-full

          bg-cyan-500
          "
        />
      </div>
    </header>
  );
}