/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./styles/tailwind-preset.cjs')],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: { prose: '62ch', measure: '40ch' },
    },
  },
};
