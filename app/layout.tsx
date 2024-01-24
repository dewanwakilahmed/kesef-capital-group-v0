import { ReactNode, FC } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

// Globals CSS
import '@/app/globals.css';

// Custom Components
import Navbar from '@/components/custom/Navbar';
import Footer from '@/components/custom/Footer';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Powerhouse Funding',
  description:
    'Empowering small businesses with short-term financial solutions',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
