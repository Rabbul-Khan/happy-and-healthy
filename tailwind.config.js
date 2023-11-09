/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(15 79% 50%)',
        lighter: 'hsl(15, 79% 90%)',
        darker: 'hsl(15, 90%, 25%)',
        darkPrimary: 'hsl(10 100% 77%)',
        darkBlack: 'hsl(0 0% 25%)',
        darkBlackSecondary: '	hsl(0 0% 7%)',
      },
    },
  },
  plugins: [],
};
