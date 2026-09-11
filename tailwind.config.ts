import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070706",
        gold: "#c8a45a",
        goldsoft: "#e8d5a3",
      },
      fontFamily: {
        display: ["Cinzel", "Times New Roman", "serif"],
        body: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
