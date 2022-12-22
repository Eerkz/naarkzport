/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gtPro: ["GT Eesti Pro Display", "sans-serif"],
      },
      colors: {
        "strong-yellow": "#FFFD63",
        "dark-blue": "#0a0b1e",
        "dark-gray": "#C7C7CB",
        "strong-turquoise": "#81f4d6",
        "pastel-turquoise": "#e6fdf7",
        "strong-violet" : "#96a7ff",
        "pastel-violet" : "#eaedff",
        "strong-orange" : "#ffbf72",
        "pastel-orange" : "#ffead0",
        "strong-pink" : "#ff837d",
        "pastel-pink" : "#ffd6d4"
      },
    },
  },
  plugins: [],
};
