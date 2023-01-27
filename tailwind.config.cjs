/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':['"Montserrat"'],
        'gilroy-bold':['"Gilroy-bold"'],
        'gilroy-medium':['"Gilroy-medium"'],
        'gilroy-regular':['"Gilroy-regular"']
      },
      colors:{
        'content-purple':'#8307ff',
        'content-dark-blue':'#615ef9',
        'content-light':'#1e1e1fa',
        'content-dark-gray':'#6e6e89',
        'content-yellow-banana':'#f8cb62',
        'content-green':'#09ba7a',
        'content-login':'#1c2836',
        'content-btn-login':'#03bfa4',
        'content-text-login':'#7f8890'
      },
      screens:{
        'slg':'900px'
      },
      animation: {
        'show': 'show 0.4s linear forwards',
        'show-img': 'show 0.6s 0.3s linear forwards',
      },
        keyframes: {
        show: {
          '0%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      }
    },
  },
  plugins: [],
}
