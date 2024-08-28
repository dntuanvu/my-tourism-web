import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-900": "#002855",
        "blue-500": "#0f52ba",
        primary: "#003566",
        secondary: "#006CE8",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        primary: "#003566",
        secondary: "#006CE8",
      }
    },
  },
  plugins: [],
};
export default config;
