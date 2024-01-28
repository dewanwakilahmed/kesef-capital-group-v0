'use client';

import { FC } from 'react';

// Import CSS
import './merchant-cash-advance-page.css';

// Import Sections
import MerchantCashAdvanceHeroSection from '@/sections/financial-solutions-page/merchant-cash-advance-page/merchant-cash-advance-hero-section/MerchantCashAdvanceHeroSection';
import WhatIsMerchantCashAdvanceSection from '@/sections/financial-solutions-page/merchant-cash-advance-page/what-is-merchant-cash-advance-section/WhatIsMerchantCashAdvanceSection';

const MerchantCashAdvancePage: FC = () => {
  return (
    <div className='merchant-cash-advance-page'>
      <MerchantCashAdvanceHeroSection />
      {/* <WhatIsMerchantCashAdvanceSection /> */}
    </div>
  );
};

export default MerchantCashAdvancePage;
