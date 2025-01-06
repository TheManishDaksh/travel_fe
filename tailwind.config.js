/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customWhite : '#fafafa',
        overlay : "rgba(0, 0, 0, 0.3)",
        primary : "rgb(249 115 22)"
      },
    },
  },
  plugins: [],
}

