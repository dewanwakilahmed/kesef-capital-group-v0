'use client';

import { FC } from 'react';

// Import CSS
import './merchant-cash-advance-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const MerchantCashAdvanceHeroSection: FC = () => {
  return (
    <section className='merchant-cash-advance-hero-section'>
      <div className='merchant-cash-advance-hero-bg-img-overlay' />

      <div className='merchant-cash-advance-hero-content'>
        <h1 className='merchant-cash-advance-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='merchant-cash-advance-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='merchant-cash-advance-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default MerchantCashAdvanceHeroSection;
