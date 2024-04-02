/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1C1C28',
      'secondary': '#393953',
      'secondaryHover': '#4F4C64',
      'brand': '#6966FF',
      'brandHover': '#6C83FF',
      'red': '#E45555',
      'green': '#16B57F',
      'white-100': '#FFFFFF',
      'white-500': '#C8C7D8',
      'tertiary': '#A59EBA',
      'subtle': '#393953',
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", "monospace"]
      }
    },
  },
  plugins: [],
}

