/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          margin: 0,
          padding: 0,
          p: {
            margin: "24px 0px 24px 0px"
          }
        }
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        default: '1600px'
      }
    },
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
      'grey': '',
      'tertiary': '#A59EBA',
      'subtle': '#393953',
      'black': '#000000',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", "monospace"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/typography')
  ],
}

