import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f7f4",
          100: "#e1ebe3",
          200: "#c3d6c8",
          300: "#9ab8a3",
          400: "#6e947a",
          500: "#4f7660",
          600: "#3c5d4b",
          700: "#1f3d32",
          800: "#163028",
          900: "#0e211c",
          950: "#081411",
        },
        gold: {
          50: "#fbf8f0",
          100: "#f4ead4",
          200: "#e8d3a6",
          300: "#d9b66f",
          400: "#c99a48",
          500: "#b8862f",
          600: "#9a6c26",
          700: "#7c5322",
          800: "#684422",
          900: "#593a21",
        },
        cream: "#f6f1e8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(14, 33, 28, 0.35)",
        "card-hover": "0 28px 50px -20px rgba(14, 33, 28, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
