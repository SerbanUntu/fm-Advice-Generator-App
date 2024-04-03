/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': "'Manrope', sans-serif"
      },
      colors: {
        'cyan': '#cee3e9',
        'green': '#52ffa8',
        'gray-blue': '#4e5d73',
        'dark-gray-blue': '#323a49',
        'dark-blue': '#1f2632',
      }
    },
  },
  plugins: [],
}

