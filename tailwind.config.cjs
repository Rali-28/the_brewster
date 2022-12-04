/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9AAB9",
        dimBlack: "rgba(0, 0, 0, 0.6)",
      }
    },
    fontFamily: {
      primary: "playfair_reg",
      primary_italic: "playfair_italic",
      coffee: "Coffee",
      menu: "cof_menu",
    }
  },
  plugins: [],
}
