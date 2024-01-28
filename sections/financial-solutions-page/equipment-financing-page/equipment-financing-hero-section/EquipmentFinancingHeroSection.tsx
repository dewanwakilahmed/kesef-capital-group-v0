'use client';

import { FC } from 'react';

// Import CSS
import './equipment-financing-hero-section.css';

// Import Component
import Button from '@/components/ui/button/Button';

const EquipmentFinancingHeroSection: FC = () => {
  return (
    <section className='equipment-financing-hero-section'>
      <div className='equipment-financing-hero-bg-img-overlay' />

      <div className='equipment-financing-hero-content'>
        <h1 className='equipment-financing-hero-headline'>
          Funding Your Way: Tailored Solutions for Every Business Dream
        </h1>

        <p className='equipment-financing-hero-subheadline'>
          Unlock your ambition. Scale your dreams. Partner with Powerhouse
          Funding!
        </p>

        <Button
          className='equipment-financing-hero-cta'
          btnType='primary'
          goTo='/financial-solutions'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default EquipmentFinancingHeroSection;
