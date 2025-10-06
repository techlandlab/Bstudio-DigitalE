/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-brown': '#4a2c2a',
        'brand-accent': '#d4a373',
        'brand-accent-dark': '#c8935e',
        'brand-bg-light': '#f3e9e4',
        'brand-dark': '#1a0e0b',
      }
    },
  },
  plugins: [],
}