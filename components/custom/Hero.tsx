import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute w-full h-full bg-black opacity-80 z-10'></div>
      <Image
        src='/images/ny-business-district.jpg'
        alt='ny-business-district'
        layout='fill'
        objectFit='cover'
        className='opacity-100'
      />
      <div className='z-20 flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-4xl font-medium'>
          Secure rapid and hassle-free small business funding
        </h1>
        <p className='w-[450px] text-center font-light text-lg leading-snug'>
          Seeking swift and adaptable funding options? Rely on Powerhouse
          Funding to elevate your small business. Our straightforward
          application and competitive rates simplify the process
        </p>
        <Button
          variant='outline'
          size='lg'
          className='mt-3 bg-blue-600 text-white border-none hover:bg-blue-700 hover:text-white'
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
