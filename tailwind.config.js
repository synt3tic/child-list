/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      height: {
        17: "4.75rem",
      },
      fontFamily: {
        sans: '"Montserrat", sans-serif',
      },
      colors: {
        primary: "#01A7FD",
        "primary-dark": "#008AD2",
        "gray-l": "#F1F1F1",
        "gray-m": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
