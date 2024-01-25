import Link from 'next/link';
import { Button } from '@/components/ui/button';

import '@/sections/home-page/hero-section/hero-section.css';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='home-hero-img-overlay' />

      <div className='hero-section-content'>
        <h1 className='hero-section-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='hero-section-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button className='hero-section-cta' variant='custom' asChild>
          <Link href='/financial-solutions'>Explore Our Solutions</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
