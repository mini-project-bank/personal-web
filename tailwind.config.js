module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#fefcbf", // For lighter primary color
          DEFAULT: "#000000", // Normal primary color
          dark: "#383838", // Used for hover, active, etc.
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("kutty")],
};
