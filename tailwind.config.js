/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        main: "#0074d9",
        subtitle: '#7a7a7a',
        transparent: 'transparent'
      },
    },
  },
  plugins: [],
}

