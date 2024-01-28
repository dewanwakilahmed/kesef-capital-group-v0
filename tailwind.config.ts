import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      backgroundImage: {
        'home-hero': "url('/images/hero-images/home-hero.jpg')",
        'financial-success': "url('/images/financial-success.jpg')",
        'office-workplace': "url('/images/office-workplace.jpg')",
        'merchant-cash-advance-hero':
          "url('/images/hero-images/merchant-cash-advance.webp')",
        'term-loan-hero': "url('/images/hero-images/term-loan.webp')",
        'line-of-credit-hero': "url('/images/hero-images/line-of-credit.webp')",
        'bad-credit-lending-hero':
          "url('/images/hero-images/bad-credit-lending.webp')",
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
