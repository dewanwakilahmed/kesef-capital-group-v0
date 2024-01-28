'use client';

import { FC } from 'react';

// Import CSS
import './line-of-credit-page.css';

// Import Sections
import LineOfCreditHeroSection from '@/sections/financial-solutions-page/line-of-credit-page/line-of-credit-hero-section/LineOfCreditHeroSection';

const LineOfCreditPage: FC = () => {
  return (
    <div className='line-of-credit-page'>
      <LineOfCreditHeroSection />
    </div>
  );
};

export default LineOfCreditPage;
