/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['"Montserrat"']
      },
      colors:{
        'content-purple':'#8307ff',
        'content-dark-blue':'#615ef9',
        'content-light':'#1e1e1fa',
        'content-dark-gray':'#6e6e89',
        'content-yellow-banana':'#f8cb62',
        'content-green':'#09ba7a'
      }
    },
  },
  plugins: [],
}
