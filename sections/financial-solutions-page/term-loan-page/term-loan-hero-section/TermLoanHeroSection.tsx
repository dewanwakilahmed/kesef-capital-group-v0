'use client';

import { FC } from 'react';

// Import CSS
import './term-loan-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const TermLoanHeroSection: FC = () => {
  return (
    <section className='term-loan-hero-section'>
      <div className='term-loan-bg-img-overlay' />

      <div className='term-loan-content'>
        <h1 className='term-loan-headline'>
          Empower Your Business with Flexible Term Loans
        </h1>

        <p className='term-loan-subheadline'>
          Unlock Growth Opportunities, Secure Your Future, Partner with Reliable
          Lenders for Tailored Financing Solutions!
        </p>

        <Button className='term-loan-cta' btnType='primary' goTo='/apply-now'>
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default TermLoanHeroSection;
