import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        mustard: 'var(--mustard)',
        black: 'var(--black)',
        linen: 'var(--linen)',
        red: 'var(--red)',
        peach: 'var(--peach)',
      },
      fontFamily: {
        body: ['Crimson Pro, ui-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
