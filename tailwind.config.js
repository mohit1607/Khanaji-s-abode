/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "indigo": '#4B0082',
        "royal-blue": '#4169E1',
        "golden": '#FFD700',
        "sea-green": '#03FCBA'
      },
      fontFamily: {
        "headingfont": 'bestfont',
        "kaivalya": "kaivalya"
      }
    },
  },
  plugins: [],
}

