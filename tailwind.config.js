/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'lightblue': '#e1e9f5',
      'blue': '#a5b8ce',
      'darkblue': '#748ab2',
      'gray': '#7b7b7b',
      'darkgray': '#595959',
      'white': '#fdfdfd',
      'lightgray': '#f3f3f3',
      'beige': '#d4cec4',
      'darkbeige': '#bbb3a6',
      'black': '#444444',
    }
  },
  fontFamily: {},
  plugins: [],
}

