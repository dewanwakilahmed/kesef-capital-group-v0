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
        'merchant-cash-advance-hero':
          "url('/images/hero-images/merchant-cash-advance-hero.webp')",
        'term-loan-hero': "url('/images/hero-images/term-loan-hero.webp')",
        'line-of-credit-hero':
          "url('/images/hero-images/line-of-credit-hero.webp')",
        'bad-credit-lending-hero':
          "url('/images/hero-images/bad-credit-lending-hero.webp')",
        'asset-based-lending-hero':
          "url('/images/hero-images/asset-based-lending-hero.webp')",
        'equipment-financing-hero':
          "url('/images/hero-images/equipment-financing-hero.webp')",
        'financial-success': "url('/images/financial-success.jpg')",
        'office-workplace': "url('/images/office-workplace.jpg')",
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
