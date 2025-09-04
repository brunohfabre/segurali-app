import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: {
          50: 'black',
          100: 'white',
        },
      },
    },
  },
  plugins: [],
}
