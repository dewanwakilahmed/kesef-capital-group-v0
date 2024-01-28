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
          Access Capital with Bad Credit Lending Solutions
        </h1>

        <p className='bad-credit-lending-hero-subheadline'>
          Overcome Financial Challenges, Rebuild Your Credit, Partner with
          Specialized Lenders for Personalized Financing Options!
        </p>

        <Button
          className='bad-credit-lending-hero-cta'
          btnType='primary'
          goTo='/apply-now'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default BadCreditLendingHeroSection;
