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
        'serif': ['var(--font-cooper)', 'serif'],
        'sans': ['var(--font-messina)', 'sans-serif'],
      },
      rotate: {
        'y-180': '180deg',
      },
      colors: {
        black: 'var(--black)',
        'light-grey': 'var(--light-grey)',
        'dark-gray': 'var(--dark-gray)',
        white: 'var(--white)',
        stabilitx: 'var(--stabilitx)',
        yellow: 'var(--yellow)',
        'light-cream': 'var(--light-cream)',
        muted: 'var(--muted)',
        accent: 'var(--yellow)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        huge: '6.62rem'
      },
      borderRadius: {
        '4xl': '40px',
      }
    },
  },
  plugins: [],
}
