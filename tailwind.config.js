/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1F2937', // Anthracite (Metal)
          primary: '#2C3E50',
          accent: '#A67C52', // Wood/Brown (Warmth)
          light: '#FFFFFF', // White (Modern)
          gold: '#C7A96D', // Keep for subtle luxury
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
