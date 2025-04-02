import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // dsk, tb are project page only.
      dsk: "81.875rem",
      tb: "60rem",

      // This is specifically for hiding navbar and displaying header
      // as a navigation bar.
      hdr: "50rem",
    },
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
        smoothTrans: "width 0.5s ease-in-out",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
} satisfies Config;
