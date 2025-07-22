/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // include tsx/ts if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
