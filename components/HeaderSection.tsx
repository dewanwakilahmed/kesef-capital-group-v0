'use client';

import { FC } from 'react';

import Button from '@/components/ui/button/Button';
import Link from 'next/link';

const HeaderSection: FC = () => {
  return (
    <header className='header-section w-full fixed z-10 bg-neutral-950/25 backdrop-blur hover:backdrop-blur-md shadow-lg hover:shadow-xl'>
      <div className='header-content px-20 py-5 flex items-center justify-between'>
        <div className='company-logo text-lg text-neutral-50'>
          <Link href='/'>POWERHOUSE FUNDING</Link>
        </div>

        <nav className='navbar text-gray-800'>
          <ul className='navbar-list flex gap-6 items-center justify-center'>
            <li className='navbar-item bg-neutral-50/75 hover:bg-neutral-50/90 px-4 py-2 transition cursor-pointer'>
              Financial Solutions
            </li>
            <li className='navbar-item bg-neutral-50/75 hover:bg-neutral-50/90 px-4 py-2 transition cursor-pointer'>
              <Link href='/contact-us'>Contact Us</Link>
            </li>
            <Button
              className='navbar-item navbar-cta ml-6'
              btnType='primary'
              goTo='/apply-now'
            >
              Apply Now
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
