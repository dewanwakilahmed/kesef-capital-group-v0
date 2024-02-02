import { FC } from 'react';
import Link from 'next/link';

import { FiX } from 'react-icons/fi';

import Button from './button/Button';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <FiX className='side-menu-close-btn' onClick={onClose} />

      <ul className='side-menu-navbar-list'>
        <li className='side-menu-navbar-item'>
          <Link href='/merchant-cash-advance'>Merchant Cash Advance</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/term-loan'>Term Loan</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/line-of-credit'>Line Of Credit</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/asset-based-lending'>Asset Based Lending</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/equipment-financing'>Equipment Financing</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/bad-credit-lending'>Bad Credit Lending</Link>
        </li>

        <li className='side-menu-navbar-item'>
          <Link href='/contact-us'>Contact Us</Link>
        </li>

        <Button
          className='side-menu-navbar-item side-menu-cta'
          btnType='primary'
          goTo='/apply-now'
        >
          Apply Now
        </Button>
      </ul>
    </div>
  );
};

export default SideMenu;
