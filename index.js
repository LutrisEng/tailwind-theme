module.exports = {
  presets: [
    require('tailwindcss/stubs/defaultConfig.stub'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A09FA0',
          DEFAULT: '#6E7780',
          dark: '#5C5E64',
        },
        secondary: {
          light: '#B0D8D7',
          DEFAULT: '#009598',
          dark: '#008889',
        },
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    require('./typography'),
    require('./button'),
  ],
};