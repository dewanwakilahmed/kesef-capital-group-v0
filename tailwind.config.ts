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
        'ny-business-district': "url('/images/ny-business-district.jpg')",
        'financial-success': "url('/images/financial-success.jpg')",
      },
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
