/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          light: '#1F1F1F',
        },
        accent: {
          DEFAULT: '#BB86FC',
        },
        text: {
          DEFAULT: '#FFFFFF',
          light: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};
