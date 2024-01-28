'use client';

import { FC } from 'react';

// Import CSS
import './line-of-credit-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const LineOfCreditHeroSection: FC = () => {
  return (
    <section className='line-of-credit-hero-section'>
      <div className='line-of-credit-hero-bg-img-overlay' />

      <div className='line-of-credit-hero-content'>
        <h1 className='line-of-credit-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='line-of-credit-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='line-of-credit-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default LineOfCreditHeroSection;
