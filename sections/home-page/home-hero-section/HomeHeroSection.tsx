'use client';

// CSS Import
import './home-hero-section.css';

// Component Import
import Button from '@/components/ui/button/Button';

const HomeHeroSection = () => {
  return (
    <section className='home-hero-section'>
      <div className='home-hero-bg-img-overlay' />

      <div className='home-hero-content'>
        <h1 className='home-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='home-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='home-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Explore Our Solutions
        </Button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
