import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/images/ny-business-district.jpg')",
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
