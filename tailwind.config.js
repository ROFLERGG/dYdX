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
      typography: {
        DEFAULT: {
          css: {
            h2: {
              marginTop: 0,
              marginBottom: 32
            },
            h3: {
              marginTop: 0,
              marginBottom: 32
            },
            h4: {
              marginTop: 0,
              marginBottom: 32
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            'blockquote p': { fontStyle: 'normal', margin: '0', color: 'white !important' },
          }
        }
      },
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

