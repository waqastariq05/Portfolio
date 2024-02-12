/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textOrange: "#fd481d",
        cardBGColor: "#171f38",
      }
    },
  },
  plugins: [],
}