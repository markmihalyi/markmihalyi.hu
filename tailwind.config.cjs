/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
        '2xl': '1590px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        heading: '#0EE6B7',
        'widget-dark': '#171A1B',
        'widget-gray': '#202226',
        'widget-lightgray': '#4A4A4A',
        'widget-red': '#FF5F56',
        'widget-yellow': '#FFBD2E',
        'widget-green': '#27C93F',
        'code-red': '#F47067',
        'code-light': '#ADBAC7',
        'code-blue': '#6CB6FF',
        'code-lightblue': '#96D0FF',
        light: '#E1E1E1',
      },
    },
  },
  plugins: [],
};
