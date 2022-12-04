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
      primary_md: "playfair_md",
      coffee: "Coffee",
      menu: "cof_menu",
    },
    screens: {
      ss: '480px',
      xs: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    }
  },
  plugins: [],
}
