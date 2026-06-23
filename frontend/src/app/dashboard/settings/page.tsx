"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1
          className="
          text-4xl
          font-bold
          "
        >
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your DeepTrust account.
        </p>

      </div>

      <div
        className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        p-8
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-8
          "
        >
          Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2">
              Name
            </label>

            <input
              className="
              w-full

              rounded-xl

              bg-white/5

              border
              border-white/10

              p-3
              "
              defaultValue="DeepTrust User"
            />
          </div>

          <div>
            <label className="block mb-2">
              Email
            </label>

            <input
              className="
              w-full

              rounded-xl

              bg-white/5

              border
              border-white/10

              p-3
              "
              defaultValue="user@example.com"
            />
          </div>

        </div>

        <div className="mt-8">

          <label className="block mb-2">
            Password
          </label>

          <input
            type="password"
            className="
            w-full

            rounded-xl

            bg-white/5

            border
            border-white/10

            p-3
            "
          />

        </div>

        <div className="mt-8 flex items-center gap-3">

          <input type="checkbox" />

          <span>
            Enable Two-Factor Authentication
          </span>

        </div>

        <button
          className="
          mt-8

          px-6
          py-3

          rounded-xl

          bg-cyan-500
          text-black

          font-semibold
          "
        >
          Save Changes
        </button>

      </div>

      <div
        className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        p-8
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          API Keys
        </h2>

        <div
          className="
          mt-6

          flex
          justify-between
          items-center
          "
        >
          <code>
            dt_live_xxxxxxxxxxxxxxxxx
          </code>

          <button
            className="
            px-5
            py-2

            rounded-xl

            bg-cyan-500
            text-black
            "
          >
            Generate New
          </button>
        </div>

      </div>

    </div>
  );
}