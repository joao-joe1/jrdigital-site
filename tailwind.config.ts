import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#0f0f17",
        elevated: "#15151f",
        border: "#1f1f2e",
        primary: {
          DEFAULT: "#9333ea",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(147,51,234,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.07) 1px, transparent 1px)",
        "radial-purple":
          "radial-gradient(circle at center, rgba(147,51,234,0.25), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(147,51,234,0.6)",
        "glow-lg": "0 0 80px -20px rgba(147,51,234,0.8)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "gradient-x": "gradientX 4s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(147,51,234,0.5)" },
          "50%": { boxShadow: "0 0 40px -5px rgba(147,51,234,0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
