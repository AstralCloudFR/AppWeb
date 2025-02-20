import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        astralcloud: "#14C7FF",
        primary: "#1E2227",
        secondary: "#23272E",
        teritiary: "#2F3440",
      },
      keyframes: {
        wave: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
export default config;
