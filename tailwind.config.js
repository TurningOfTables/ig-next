/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#f48c0f",
      black: "#212121",
      lightgrey: "#c9cecf",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
