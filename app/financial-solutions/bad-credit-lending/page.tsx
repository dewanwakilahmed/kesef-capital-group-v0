'use client';

import { FC } from 'react';

// Import CSS
import './bad-credit-lending-page.css';

// Import Sections
import BadCreditLendingHeroSection from '@/sections/financial-solutions-page/bad-credit-lending-page/bad-credit-lending-hero-section/BadCreditLendingHeroSection';

const BadCreditLendingPage: FC = () => {
  return (
    <div className='bad-credit-lending-page'>
      <BadCreditLendingHeroSection />
    </div>
  );
};

export default BadCreditLendingPage;
