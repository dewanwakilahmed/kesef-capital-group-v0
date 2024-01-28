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
          Accelerate Your Business Growth with Merchant Cash Advance
        </h1>

        <p className='merchant-cash-advance-hero-subheadline'>
          Fuel Your Ambition, Drive Success, Partner with Powerhouse Funding for
          Flexible Financing Solutions!
        </p>

        <Button
          className='merchant-cash-advance-hero-cta'
          btnType='primary'
          goTo='/apply-now'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default MerchantCashAdvanceHeroSection;
