'use client';

import { FC } from 'react';
import Link from 'next/link';

import DropdownMenu from '@/components/ui/DropdownMenu';
import Button from '@/components/ui/button/Button';

const HeaderSection: FC = () => {
  return (
    <header className='header-section w-full fixed z-10 bg-neutral-950/25 backdrop-blur hover:backdrop-blur-md shadow-lg hover:shadow-xl'>
      <div className='header-content section-content py-5 flex items-center justify-between'>
        <div className='company-logo text-lg text-neutral-50 hover:text-primary font-bold transition'>
          <Link href='/'>POWERHOUSE FUNDING</Link>
        </div>

        <nav className='navbar'>
          <ul className='navbar-list flex gap-6 items-center justify-center text-neutral-50'>
            <DropdownMenu />
            <li className='navbar-item hover:text-primary px-4 py-2 transition cursor-pointer'>
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
