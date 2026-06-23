"use client";

import Link from "next/link";
import { useState } from "react";

import GradientButton from "@/components/ui/gradient-button";

export default function SignupForm() {
  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 600)
    );

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        name="name"
        placeholder="Full Name"
        autoComplete="name"
        required
        className="
        w-full

        p-3

        rounded-xl

        bg-white/70
        dark:bg-white/5

        border
        border-slate-200/60
        dark:border-white/10

        outline-none
        focus:border-cyan-400/60
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        required
        className="
        w-full

        p-3

        rounded-xl

        bg-white/70
        dark:bg-white/5

        border
        border-slate-200/60
        dark:border-white/10

        outline-none
        focus:border-cyan-400/60
        "
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        required
        className="
        w-full

        p-3

        rounded-xl

        bg-white/70
        dark:bg-white/5

        border
        border-slate-200/60
        dark:border-white/10

        outline-none
        focus:border-cyan-400/60
        "
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        required
        className="
        w-full

        p-3

        rounded-xl

        bg-white/70
        dark:bg-white/5

        border
        border-slate-200/60
        dark:border-white/10

        outline-none
        focus:border-cyan-400/60
        "
      />

      <GradientButton
        type="submit"
        disabled={loading}
        className="
        w-full
        "
      >
        {loading
          ? "Creating..."
          : "Create Account"}
      </GradientButton>

      <p
        className="
        text-center
        text-sm
        text-slate-600
        dark:text-gray-400
        "
      >
        Already have an account?{" "}
        <Link
          href="/login"
          className="
          text-cyan-500
          hover:text-cyan-400
          font-semibold
          transition-colors
          "
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
