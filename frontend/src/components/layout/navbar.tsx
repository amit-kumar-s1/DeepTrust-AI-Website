"use client";

import Image from "next/image";
import Link from "next/link";

import ThemeToggle
from "@/components/theme/theme-toggle";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-lg
      bg-white/70
      dark:bg-black/20
      border-b
      border-slate-200/60
      dark:border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        <Link href="/">
          <Image
            src="/icons/deeptrust-ai-logo.svg"
            alt="DeepTrust AI"
            width={214}
            height={48}
            priority
            className="
            h-10
            w-auto
            "
          />
        </Link>

        <div
          className="
          hidden
          md:flex
          gap-6
          "
        >
          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >
          <Link
            href="/login"
            className="
            hidden
            sm:inline-flex
            px-4
            py-2
            rounded-xl
            border
            border-slate-200/60
            dark:border-white/10
            hover:bg-black/5
            dark:hover:bg-white/5
            transition-all
            "
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="
            px-4
            py-2
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            via-cyan-500
            to-blue-600
            text-white
            font-semibold
            shadow-lg
            hover:shadow-cyan-500/40
            transition-all
            "
          >
            Sign Up
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
