import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        brown: {
          100: '#f7f2e7',
          200: '#eed8b6',
          300: '#e5be85',
          400: '#db9f4c',
          500: '#d27f13',
          600: '#a96310',
          700: '#80470d',
          800: '#572b0a',
          900: '#2e0f07',
        },
        beige: {
          100: '#f5f5dc',
          200: '#e6e6c2',
          300: '#d8d8a8',
        
      },
    },
  },
},
  plugins: [],
};