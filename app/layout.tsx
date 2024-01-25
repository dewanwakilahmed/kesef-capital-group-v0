import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const customFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Powerhouse Funding',
  description:
    'Empowering small businesses with short-term financial solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
