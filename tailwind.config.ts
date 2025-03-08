import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-sm": "320px",
        "mobile-md": "375px",
        "mobile-lg": "425px",
      },

      colors: {
        charcoal: { 500: "#1e1e1d" },
        light: { 500: "#fff" },
        yellowGold: { 500: "#f7c518" },
      },
    },
  },
  plugins: [],
} satisfies Config;
