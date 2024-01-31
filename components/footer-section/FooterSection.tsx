'use client';

import { FC } from 'react';
import Link from 'next/link';

// CSS Import
import './footer-section.css';

// Icon Imports
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaRegBuilding } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-bg-overlay' />

      <div className='footer-content'>
        <div className='company-info'>
          <div className='company-logo'>
            <Link href='/'>POWERHOUSE FUNDING</Link>
          </div>

          <address className='company-info-item'>
            <FaRegBuilding size={30} />
            <span>123 Main St, Anytown, USA</span>
          </address>
          <div className='company-info-item'>
            <AiOutlinePhone size={32.5} />
            <a href='tel:1234567890'>(123) 456-7890</a>
          </div>
          <div className='company-info-item'>
            <AiOutlineMail size={32.5} />
            <a href='mailto:email@example.com'>support@powerhouse.com</a>
          </div>
        </div>

        <div className='copyright'>
          &copy; {new Date().getFullYear()} Powerhouse Funding. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
