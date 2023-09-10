/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'maria': ['Honest Maria', 'sans-serif'],
        'clingy': ['clingy', 'sans-serif'],
        'amazing' : ['Motira', 'sans-serif'],
        'arima' : ['Arima Koshi', 'sans-serif']
      },
      colors: {
        brightblue: '#004DB3',
        lightgray: '#CCDBF0',
        whitesmoke: '#F8F9FC',
        tinytext: '#A1A1A1',
        darkSlate: '#000F24',

      },
      backgroundImage: {
        'continent': "url('./images/continent.png')",
      },
    },
  },
  plugins: [],
}

