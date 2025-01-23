/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#5542F6',
          'primary-hover': '#7B42F6',
          'primary-text': 'white',
          'primary-text-hover': 'white',
          'primary-border': '#4734EB',
          'primary-border-hover': '#6E36E5',
        }
      },
    },
    plugins: [],
  }
