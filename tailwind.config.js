/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#ff9800',
        'primary-dark': '#f57c00',
        'primary-light': '#ffb74d',
        background: '#f4f4f4',
        surface: '#ffffff',
        'text-primary': '#333333',
        'text-secondary': '#888888',
      },
    },
  },
  plugins: [],
};