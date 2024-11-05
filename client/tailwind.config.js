const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ['Plus Jakarta Sans', 'sans-serif'],
        logowala: ['ES Klarheit Kurrent'],
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
        black:{
          50: '#e8e8e9',
          100: '#b6b6ba',
          200: '#939399',
          300: '#62626b',
          400: '#43444e',
          500: '#141522',
          600: '#12131f',
          700: '#0e0f18'
        }, 
        bgWhite:'#fafafa'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
});
