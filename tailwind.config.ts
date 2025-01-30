import { josefin, poppins } from "@/app/ui/fonts";
import { Gamja_Flower } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        gamja: ['Gamja Flower', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        reenie_beanie: ['Reenie Beanie', 'cursive'],
        crafty_girls: ["Crafty Girls", 'cursive']
      },
    },
  },
  plugins: [],
};
export default config;
