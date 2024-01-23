import { ReactNode, FC } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

import Navbar from '@/components/custom/Navbar';
import Footer from '@/components/custom/Footer';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Powerhouse Funding',
  description:
    'Powerhouse Funding is a mortgage broker in the Greater Toronto Area.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
