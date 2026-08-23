/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          card: '#121212',
          surface: '#171717',
          border: '#262626',
          muted: '#a3a3a3'
        },
        light: {
          bg: '#ffffff',
          card: '#fafafa',
          surface: '#f5f5f5',
          border: '#e5e5e5',
          muted: '#525252'
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
