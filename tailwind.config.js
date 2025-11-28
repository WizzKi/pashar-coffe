/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        85: "0.85",
      },
      colors: {
        coffe: "#9c6533",
        main: "#4b2d00",
        haha: "#b3702a",
      },
    },
  },
  plugins: [],
};
