const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      exo: ["Exo", "Arial", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#005dff",
      secondary: "#007aff",
      tertiary: "#fafafa",
      quaternary: "#1f2833",
      quinary: "#0b0c10",
      success: "#22bb33",
      warning: "#ffc107",
      danger: "#dc3545",
      muted: "#6c757d",
      hover: "rgba(255, 255, 255, 0.1)",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    zIndex: {
      neg50: -50,
      neg40: -40,
      neg30: -30,
      neg20: -20,
      neg10: -10,
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
