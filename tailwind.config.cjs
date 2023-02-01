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
        'content-nav-light':'#e1e1fa',
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
        'show': 'show 0.5s linear forwards',
        'show-img': 'show 1s 0.5s linear forwards',
        'slide': 'slide 0.9s  cubic-bezier(1,-0.36,.02,1.36) forwards',
        'slide-text': 'slideText 1.6s 0.8  cubic-bezier(.89,-0.39,.4,1.17) forwards',
      },
        keyframes: {
        show: {
          '0%': { opacity:'0' },
          '100%': { opacity:'1' },
        },
        slide: {
          '0%': { transform:'translateY(-100%)' },
          '100%': { transform:'translateY(0)' },
        },
        slideText:{
          '0%':{opacity:'0',transform:'translateY(-20px)'},
          '100%':{opacity:'1',transform:'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}
