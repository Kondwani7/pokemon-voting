/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          opacity:"0",
        },
        "100%":{
          opacity:"1"
        }
      },
      animation:{
        "fade-in" :"fade-in 0.5s ease-out"
      }
    },
  },
  plugins: [],
}
