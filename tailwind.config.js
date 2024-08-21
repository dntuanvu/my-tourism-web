/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include the app directory for Next.js 14
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

