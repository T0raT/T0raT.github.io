import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        borderPulse: {
          "0%": { borderColor: "yellow" },
          "50%": { borderColor: "limegreen" },
          "100%": { borderColor: "yellow" },
        },
      },
      animation: {
        borderPulse: "borderPulse 4s infinite ease-in-out",
      },
      screens: {
        dk: "70rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
