'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const DropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='navbar-item bg-neutral-900/70 hover:bg-neutral-900/85 px-4 py-2 transition cursor-pointer relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      Financial Solutions
      {isOpen && (
        <ul className='dropdown-menu absolute bg-neutral-900/70 right-0 top-11'>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/merchant-cash-advance'>Merchant Cash Advance</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/term-loan'>Term Loan</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/term-loan'>Line Of Credit</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/term-loan'>Asset Based Lending</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/term-loan'>Equipment Financing</Link>
          </li>
          <li className='dropdown-item px-4 py-2 hover:bg-neutral-900/85 whitespace-nowrap'>
            <Link href='/term-loan'>Bad Credit Lending</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
