/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'brand': {
        'primary': '#FF733C',
        'secondary': '#5A698C',
      },
      'black': {
        DEFAULT: '#000000',
        '900': '#1B1B1B',
      },
      'gray': {
        '900': '#545454',
      },
      'green': {
        DEFAULT: '#32BE50',
      },
    },
    extend: {
      fontFamily: {
        'rajdhani': ['"Rajdhani"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif']
      },
    },
  },
  plugins: [],
}