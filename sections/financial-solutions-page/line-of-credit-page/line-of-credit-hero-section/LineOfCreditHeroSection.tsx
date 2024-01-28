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
          Unlock Financial Flexibility with a Line of Credit
        </h1>

        <p className='line-of-credit-hero-subheadline'>
          Seize Opportunities, Manage Cash Flow, Partner with Trusted Lenders
          for Tailored Financing Solutions!
        </p>

        <Button
          className='line-of-credit-hero-cta'
          btnType='primary'
          goTo='/apply-now'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default LineOfCreditHeroSection;
