const plugin = require('tailwindcss/plugin');

const fontFamily = ['Montserrat', 'sans-serif'];

module.exports = plugin(({ addComponents }) => {
  addComponents({
    '.btn': {
      display: 'inline-block',
      padding: '15px 30px',
      borderRadius: '6px',
    },
  });
});