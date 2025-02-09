/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: 'var(--background-primary)',
        bgSecondary: 'var(--background-secondary)',
        bgTerceary:'var(--color-primary)',

        textPrimary: 'var(--color-primary)',
        textSecondary: 'var(--color-secondary)',
        textTerceary: 'var(--color-terceary)',


        borderBottom: 'var(--border-primary)',
        borderSecondary: 'var(--border-secondary)'
      }
    },
    fontFamily: {
      'comic': ['Comic Neue', 'sans-serif' ],
    },
    fontWeight: {
      // Asegúrate de que los pesos de fuente se alineen con las variantes de tu fuente
      light: 300,
      normal: 400,
      bold: 700,
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

