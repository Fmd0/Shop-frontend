/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        addToCart:{
          "0%": {
            "stroke-dasharray": "0 136",
            "stroke-dashoffset": 0,
          },
          "50%": {
            "stroke-dasharray": "136 136",
            "stroke-dashoffset": "0",
          },
          "100%": {
            "stroke-dasharray": "136 136",
            "stroke-dashoffset": "-136",
          },
        }
      }
    },
  },
  plugins: [],
}

