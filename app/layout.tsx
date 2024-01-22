import { ReactNode, FC } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
