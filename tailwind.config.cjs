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
        primary: "#7D5C3B",
        dimBlack: "rgba(0, 0, 0, 0.6)",
        dimWhite: "rgba(255, 255, 255, 0.6)",
      }
    },
    fontFamily: {
      primary: "playfair_reg",
      primary_italic: "playfair_italic",
      primary_md: "playfair_md",
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
