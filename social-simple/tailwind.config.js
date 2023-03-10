/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#233067",
        "primary-400": "#597AAF",
        "primary-300": "#A4B4CB",
        "gray-300": "#ECEDEF",
        gray: "#E8EAED",
        secondary: "#FFDDCC",
      },
      fontFamily: {},
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
};
