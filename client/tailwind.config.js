const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],
});
