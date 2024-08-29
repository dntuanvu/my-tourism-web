/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory for Next.js 14
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
        paper: "#F6F6F6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
