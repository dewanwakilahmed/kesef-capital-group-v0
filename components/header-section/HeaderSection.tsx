'use client';

import { FC } from 'react';
import Link from 'next/link';

// CSS Import
import './header-section.css';

// UI Components Import
import DropdownMenu from '@/components/ui/DropdownMenu';
import Button from '@/components/ui/button/Button';

const HeaderSection: FC = () => {
  return (
    <header className='header-section'>
      <div className='header-content'>
        <div className='company-logo-header'>
          <Link href='/'>POWERHOUSE FUNDING</Link>
        </div>

        <nav className='navbar'>
          <ul className='navbar-list'>
            <DropdownMenu />

            <li className='navbar-item'>
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
