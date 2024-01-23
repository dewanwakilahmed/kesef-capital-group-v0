import NavMenu from '@/components/custom/NavMenu';
import { Container } from './Container';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='py-3 shadow fixed w-full z-50 backdrop-blur-md hover:backdrop-blur-lg'>
      <Container>
        <div className='flex items-center justify-between'>
          <Image
            src='/powerhouse-logo.png'
            alt='powerhouse-logo'
            width={175}
            height={175}
          />

          <NavMenu />

          <div>
            <Button
              variant='outline'
              className='bg-blue-600 text-white border-none hover:bg-blue-700 hover:text-white'
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
