'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const DropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='navbar-item px-4 py-2 transition cursor-pointer relative hover:text-primary'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      Financial Solutions
      {isOpen && (
        <ul className='dropdown-menu absolute bg-neutral-950/50 hover:backdrop-blur-md shadow-lg hover:shadow-xl transition left-0 top-10 text-neutral-50'>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/merchant-cash-advance'>Merchant Cash Advance</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/term-loan'>Term Loan</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/line-of-credit'>Line Of Credit</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/asset-based-lending'>Asset Based Lending</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/equipment-financing'>Equipment Financing</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-950/75 transition whitespace-nowrap'>
            <Link href='/bad-credit-lending'>Bad Credit Lending</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
