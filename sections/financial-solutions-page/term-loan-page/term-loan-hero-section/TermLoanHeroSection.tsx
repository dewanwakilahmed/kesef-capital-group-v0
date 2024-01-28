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
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='term-loan-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='term-loan-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default TermLoanHeroSection;
