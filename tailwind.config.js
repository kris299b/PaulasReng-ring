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
      'white': '#ffffff',
      'darkgray': '#565656',
      'beige': '#bbb3a6',
      'black': '#000000',
    }
  },
  plugins: [],
}

