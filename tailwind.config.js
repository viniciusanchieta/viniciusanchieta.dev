/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { min: '0px', max: '767px' },
      md: { min: '768px', max: '975px' },
      lg: { min: '976px', max: '1439px' },
      xl: { min: '1440px' }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      main: '#111111',
      white: '#ffffff',
      purple: {
        100: '#9845E8'
      },
      blue: {
        100: '#33D2FF',
        200: '#6CACE4'
      },
      pink: {
        100: '#DD5789'
      },
      gray: {
        100: '#C4C4C4'
      },
      transparent: 'transparent'
    },
    width: {
      '30px': '1.875rem',
      '210px': '13.125rem',
      '214px': '13.375rem',
      '246px': '15.375rem',
      '510px': '31.875rem',
      '527px': '32.9375rem',
      '1078px': '67.375rem',
      full: '100%'
    },
    height: {
      '30px': '1.875rem',
      '60px': '3.75rem',
      '112px': '7rem'
    },
    extend: {}
  },
  plugins: []
};
