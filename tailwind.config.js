/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      customSm: "320px",
      customMd: "450px",
      customLg: "880px",
      customXl: "1074px",
    },
    extend: {},
  },
  plugins: [],
};
