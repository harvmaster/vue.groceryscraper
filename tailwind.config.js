const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.rose,
      secondary: colors.cyan,
      background: colors.slate
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true })
  ],
}

