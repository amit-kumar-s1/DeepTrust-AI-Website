"use client";

import { useState } from "react";

import { forgotPassword } from "@/services/api/auth.api";

export default function ForgotPasswordForm() {
  const [loading, setLoading] =
    useState(false);

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    await forgotPassword(
      "user@example.com"
    );

    setLoading(false);
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-5"
    >
      <input
        type="email"
        placeholder="Email"
        className="
        w-full

        p-3

        rounded-xl

        bg-white/5

        border
        border-white/10
        "
      />

      <button
        className="
        w-full

        py-3

        rounded-xl

        bg-cyan-500

        text-black
        "
      >
        {loading
          ? "Sending..."
          : "Reset Password"}
      </button>
    </form>
  );
}