/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'lightblue': '#cdd1dc',
      'darkblue': '#969eb2',
      'gray': '#7b7b7b',
      'darkgray': '#595959',
      'white': '#ffffff',
      'lightgray': '#f3f3f3',
      'beige': '#d4cec4',
      'darkbeige': '#bbb3a6',
      'black': '#000000',
    }
  },
  fontFamily: {},
  plugins: [],
}

