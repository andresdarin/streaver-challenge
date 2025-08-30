/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
    },
    keyframes: {
      gradientShift: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    },
    animation: {
      'gradient-shift': 'gradientShift 15s ease infinite',
    },
  },
};

export const plugins = [];
