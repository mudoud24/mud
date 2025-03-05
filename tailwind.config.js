/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-regular)'],
        regular: ['var(--font-regular)'],
        medium: ['var(--font-medium)'],
        bold: ['var(--font-bold)'],
      },
      colors: {
        mud: {
          primary: '#c4a484',
          secondary: '#1a1a1a',
          light: '#f8f5f0',
        },
      },
    },
  }
}
