/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        istituzionale: {
          50: '#eef2f8',
          100: '#d7e1ee',
          200: '#b0c3dd',
          300: '#88a5cc',
          400: '#5c82b3',
          500: '#3d6396',
          600: '#2c4c78',
          700: '#1f3a5f',
          800: '#152945',
          900: '#0b1c30',
          950: '#060f1a',
        },
        oro: {
          50: '#fbf6e7',
          100: '#f5e9c2',
          200: '#eed89a',
          300: '#e4c46b',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a5811b',
          700: '#7d6115',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
