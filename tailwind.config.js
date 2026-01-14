/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f172a', // Slate 900
        'secondary': '#1e293b', // Slate 800
        'accent': '#38bdf8', // Sky 400
        'text-main': '#f1f5f9', // Slate 100
        'text-muted': '#94a3b8', // Slate 400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}