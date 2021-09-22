const plugin = require('tailwindcss/plugin');

const fontFamily = ['Montserrat', 'sans-serif'];

module.exports = plugin(({ addComponents }) => {
  addComponents({
    '.headline-1': {
      fontFamily,
      fontWeight: 'bold',
      fontSize: '96px',
      letterSpacing: '-1.5px',
    },
    '.headline-2': {
      fontFamily,
      fontWeight: '600',
      fontSize: '64px',
      letterSpacing: '-0.5px',
    },
    '.headline-3': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '48px',
      letterSpacing: '0px',
    },
    '.headline-4': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '36px',
      letterSpacing: '0.25px',
    },
    '.headline-5': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '24px',
      letterSpacing: '0px',
    },
    '.headline-6': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '20px',
      letterSpacing: '0.15px',
    },
    '.subtitle-1': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '0.15px',
    },
    '.subtitle-2': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '14px',
      letterSpacing: '0.1px',
    },
    '.body-1': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '0.5px',
    },
    '.body-2': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '14px',
      letterSpacing: '0.25px',
    },
    '.button-text, .btn': {
      fontFamily,
      fontWeight: '500',
      fontSize: '14px',
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
    },
    '.caption': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '12px',
      letterSpacing: '0.4px',
    },
    '.overline': {
      fontFamily,
      fontWeight: 'normal',
      fontSize: '10px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
  });
});