const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        winky: ['Winky Rough', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        surface: 'var(--surface)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        danger: 'var(--danger)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
      },
    },
  },
  plugins: [],
}