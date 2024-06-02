/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundColor:{
    'cream':'#fdf1e8'
    }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

