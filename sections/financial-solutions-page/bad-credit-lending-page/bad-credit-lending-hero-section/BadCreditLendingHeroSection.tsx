'use client';

import { FC } from 'react';

// Import CSS
import './bad-credit-lending-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const BadCreditLendingHeroSection: FC = () => {
  return (
    <section className='bad-credit-lending-hero-section'>
      <div className='bad-credit-lending-hero-bg-img-overlay' />

      <div className='bad-credit-lending-hero-content'>
        <h1 className='bad-credit-lending-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='bad-credit-lending-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='bad-credit-lending-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default BadCreditLendingHeroSection;
