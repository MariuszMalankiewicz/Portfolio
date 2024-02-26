/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'blue': '#407BFF',
      'light-gray': '#A9AABC',
      'light-blue': '#AED0FF',
    },
    fontFamily: 
    {
      'Montserrat': ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
}