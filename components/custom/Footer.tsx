import { Container } from './Container';
import Image from 'next/image';

import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

import { FaRegBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <Container>
        <div className='flex items-center justify-between'>
          <Image
            src='/powerhouse-logo.png'
            alt='powerhouse-logo'
            width={150}
            height={150}
          />

          <address className='flex items-center justify-center gap-2'>
            <FaRegBuilding size={20} />
            <span>123 Main St, Anytown, USA</span>
          </address>
          <div className='flex items-center justify-center gap-2'>
            <AiOutlinePhone size={22.5} />
            <a href='tel:1234567890'>(123) 456-7890</a>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <AiOutlineMail size={22.5} />
            <a href='mailto:email@example.com'>email@example.com</a>
          </div>
        </div>

        <div className='text-center text-sm mt-10 text-gray-400'>
          &copy; {new Date().getFullYear()} Powerhouse Funding. All rights
          reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
