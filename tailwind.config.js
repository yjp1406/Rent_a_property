/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F7F7FD",
        primary: "#7065F0",
        gray: "#4F4F4F",
      },
      fontFamily: {
        Regular: ["Montserrat", "regular"],
        Medium: ["MontserratMed", "medium"],
        Bold: ["MontserratBold", "bold"],
      }
    },
  },
  plugins: [],
}
