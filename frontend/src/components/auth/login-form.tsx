"use client";

import Link from "next/link";
import { useState } from "react";

import GradientButton from "@/components/ui/gradient-button";

export default function LoginForm() {
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
        autoComplete="current-password"
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

      <div
        className="
        flex
        items-center
        justify-between
        gap-4
        text-sm
        text-slate-600
        dark:text-gray-400
        "
      >
        <label
          className="
          flex
          items-center
          gap-2
          "
        >
          <input
            type="checkbox"
            name="remember"
            className="accent-cyan-500"
          />
          Remember Me
        </label>

        <Link
          href="/forgot-password"
          className="
          text-cyan-500
          hover:text-cyan-400
          transition-colors
          "
        >
          Forgot Password
        </Link>
      </div>

      <GradientButton
        type="submit"
        disabled={loading}
        className="
        w-full
        "
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </GradientButton>

      <p
        className="
        text-center
        text-sm
        text-slate-600
        dark:text-gray-400
        "
      >
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="
          text-cyan-500
          hover:text-cyan-400
          font-semibold
          transition-colors
          "
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}
