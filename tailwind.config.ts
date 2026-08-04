import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#12141f",
        surface: "#1c1f2e",
        border: {
          DEFAULT: "rgba(99,102,241,0.15)",
          strong: "rgba(99,102,241,0.3)",
        },
        text: {
          primary: "#e2e4f0",
          secondary: "#8b90a5",
        },
        accent: {
          DEFAULT: "#6366f1",
          dark: "#4f52d6",
          light: "#818cf8",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1ebe5a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(99,102,241,0.35)",
        "glow-sm": "0 0 30px -10px rgba(99,102,241,0.35)",
        card: "0 4px 24px -8px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.18) 0%, rgba(18,20,31,0) 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-in": "fadeIn 0.9s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
