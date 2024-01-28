'use client';

import { FC } from 'react';

// Import CSS
import './asset-based-lending-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const AssetBasedLendingHeroSection: FC = () => {
  return (
    <section className='asset-based-lending-hero-section'>
      <div className='asset-based-lending-hero-bg-img-overlay' />

      <div className='asset-based-lending-hero-content'>
        <h1 className='asset-based-lending-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='asset-based-lending-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='asset-based-lending-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default AssetBasedLendingHeroSection;
