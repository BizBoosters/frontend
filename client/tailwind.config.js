const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        blue:{
          500: '',
        },
      }
    },
  },
  plugins: [],
});
