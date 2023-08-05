const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-color': '#212830',
        'teal-colorish': '#1DA599',
        'yellowish-color': '#FFC265',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero_img.png')",
      },
    },
  },
  plugins: [],
}
