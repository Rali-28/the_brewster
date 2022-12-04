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
        primary: "#ECF1CF",
      }
    },
    fontFamily: {
      coffee: "Coffee",
    }
  },
  plugins: [],
}
