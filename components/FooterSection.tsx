import { FC } from 'react';
import Link from 'next/link';

import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaRegBuilding } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <div className='px-20 py-10 bg-neutral-950/75 text-neutral-50'>
      <div className='flex items-center justify-between'>
        <div className='company-logo text-lg font-bold'>
          <Link href='/'>POWERHOUSE FUNDING</Link>
        </div>

        <address className='flex items-center justify-center gap-3'>
          <FaRegBuilding size={30} />
          <span>123 Main St, Anytown, USA</span>
        </address>
        <div className='flex items-center justify-center gap-3'>
          <AiOutlinePhone size={32.5} />
          <a href='tel:1234567890'>(123) 456-7890</a>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <AiOutlineMail size={32.5} />
          <a href='mailto:email@example.com'>support@powerhouse.com</a>
        </div>
      </div>

      <div className='text-center text-sm text-neutral-300 mt-8'>
        &copy; {new Date().getFullYear()} Powerhouse Funding. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
