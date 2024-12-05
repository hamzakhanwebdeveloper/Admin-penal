/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',  // This will add ml-128 as a valid class (32rem = 512px)
        '144': '36rem',  // 36rem = 576px

      },
    },
  },
  plugins: [],
}

