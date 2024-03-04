/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{astro,html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        'primary': '#fdd85d',
        'secondary': colors.orange,
        'linkedin-primary': '#0077b5'
      },
    },
  },
  plugins: [require("daisyui")],
}

