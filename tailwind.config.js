/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quinsac: {
          dark: '#1A7E46',
          green: '#155D33',
          light: '#8CC63F',
          neon: '#82DF26',
          orange: '#F57C00',
          darkbg: '#0D1117',
          card: '#161B22',
          surface: '#12161A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
