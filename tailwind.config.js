/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        sliding: {
          '0%' : {
            translate: 'translate-x-full'
          },
          '100%' : {
            translate: '-translate-x-full'
          },
        }
      },
    },
  },
  plugins: [],
}