/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.css'],
  theme: {
    extend: {
      containerSize: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
        '2xl': '1170px',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'soft-200': 'var(--color-soft-200)',
      },
      fontFamily: {
        geist: ['"Playfair Display"', 'sans-serif'],
        'geist-mono': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
};
