/** @type {import('tailwindcss').Config} 
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

 module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};

