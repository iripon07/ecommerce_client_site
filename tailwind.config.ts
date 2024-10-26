import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051922",
        secondary: "#F28123",
        grey: "#555",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        prostoOne: ["var(--font-prosto)", "cursive"],
        handwriting: ["var(--font-nothing-you-could-do)", "cursive"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
