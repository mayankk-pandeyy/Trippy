/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 15px 0 rgba(0, 0, 0, 0.25)',
        '4xl': '0 5px 25px 2px rgba(0,0,0,0.11)'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

