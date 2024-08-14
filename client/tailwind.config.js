const withMT = require("@material-tailwind/react/utils/withMT");

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
          50: '#eef1ff',
          100: '#cad2ff',
          200: '#b0bdff',
          300: '#8c9fff',
          400: '#768cff',
          500: '#546fff',
          600: '#4c65e8',
          700: '#3c4fb5'
        },
      }
    },
  },
  plugins: [],
});
