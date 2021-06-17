const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Inter':['Inter', 'sans-serif']
      },

      backgroundImage: {
        'road': "url('/imgs/road.jpg')" 
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
