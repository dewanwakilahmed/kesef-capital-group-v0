import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

// CSS Import
import './globals.css';

// Section Imports
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/footer-section/FooterSection';

const customFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Powerhouse Funding',
  description:
    'Empowering small businesses with short-term financial solutions',
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={customFont.className}>
        <div className='test-div bg-pink-400 w-full h-36'>Hello</div>
        {/* <HeaderSection /> */}
        <main className='page-content'>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
};

export default RootLayout;
