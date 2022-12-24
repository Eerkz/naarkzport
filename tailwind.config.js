/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: "270px",
      fold: "340px",
      xsm: "400px",
      sm: "480px",
      ma: "580px",
      md: "768px",
      mb: "850px",
      lg: "976px",
      nest: "1024px",
      nestMax: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        gtPro: ["GT Eesti Pro Display", "sans-serif"],
      },
      colors: {
        "strong-yellow": "#FFFD63",
        "pastel-blue": "#3C3E61",
        "dark-blue": "#0a0b1e",
        "dark-gray": "#C7C7CB",
        "strong-turquoise": "#81f4d6",
        "pastel-turquoise": "#e6fdf7",
        "strong-violet": "#96a7ff",
        "pastel-violet": "#eaedff",
        "strong-orange": "#ffbf72",
        "pastel-orange": "#ffead0",
        "strong-pink": "#ff837d",
        "pastel-pink": "#ffd6d4",
      },
    },
  },
  plugins: [],
};
