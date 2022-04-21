const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },

    extend: {
      colors:{
        'main-c': '#100A30',
        'text-hover-c': '#624DE3',
        'f-color': '#4C4764',
      },
      fontFamily:{
        'main-f': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize:{
        'h-title': ['55px', '64px'],
        'm-title': ['48px', '56px'],
        'm-desc': ['17px', '30px'],
        'f-desc': ['16px', '30px'],
      },
      backgroudImage:{
        'footer-bg': "url(./images/footer-bg.png)"
      }
    },
  },
  plugins: [],
}