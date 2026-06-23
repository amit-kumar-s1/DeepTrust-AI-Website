import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },

    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },

      colors: {
        background: "#050816",
        foreground: "#ffffff",

        primary: "#4F46E5",
        secondary: "#06B6D4",

        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",

        card: "#0B1120",
        border: "#1E293B",

        glass: "rgba(255,255,255,0.08)"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },

      boxShadow: {
        glow: "0 0 40px rgba(79,70,229,.45)",
        cyan: "0 0 40px rgba(6,182,212,.35)"
      },

      backgroundImage: {
        aurora:
          "linear-gradient(135deg,#4F46E5,#06B6D4,#9333EA)",

        cyber:
          "radial-gradient(circle at top,rgba(79,70,229,.25),transparent 60%)"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },

        glow: {
          "0%,100%": {
            opacity: "0.7"
          },
          "50%": {
            opacity: "1"
          }
        }
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite"
      }
    }
  },

  plugins: []
};

export default config;