/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#1A1919',
      btn_bg: '#7E90FE',
      header_bg: '#F4F4F4',
      dark3: '#757575',
      card_bg: '#9873FF',
      text_color: '#ffff'
    },
    extend: {
      fontFamily: {
        manrope:['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

