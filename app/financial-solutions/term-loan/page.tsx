'use client';

import { FC } from 'react';

// Import CSS
import './term-loan-page.css';

// Import Sections
import TermLoanHeroSection from '@/sections/financial-solutions-page/term-loan-page/term-loan-hero-section/TermLoanHeroSection';

const TermLoanPage: FC = () => {
  return (
    <div className='term-loan-page'>
      <TermLoanHeroSection />
    </div>
  );
};

export default TermLoanPage;
