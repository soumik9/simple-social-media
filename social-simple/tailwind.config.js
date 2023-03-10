/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7BD8D",
        secondary: '#D5D2E4',
      },
      fontFamily: {

      },
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xll: "1440px",
      "3xl": "1920px",
    },
  },
  plugins: [],
}
