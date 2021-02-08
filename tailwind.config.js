const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
