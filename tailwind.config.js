/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato, sans-serif"],
      },
      boxShadow: {
        top: "0 -1px 2px 0",
      },
    },
  },
  plugins: [],
};
