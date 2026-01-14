/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      // keep this small — project-specific theme can be added later
      colors: {},
    },
  },
  plugins: [],
}
