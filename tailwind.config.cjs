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
      }
    },
    fontFamily: {
      coffee: "Coffee",
    }
  },
  plugins: [],
}
