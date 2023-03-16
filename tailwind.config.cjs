/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Red: "#ff4d30",
      Black: "#010103",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
