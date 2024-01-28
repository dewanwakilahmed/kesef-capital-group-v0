'use client';

import { FC } from 'react';

// Import CSS
import './asset-based-lending-page.css';

// Import Sections
import AssetBasedLendingHeroSection from '@/sections/financial-solutions-page/asset-based-lending-page/asset-based-lending-hero-section/AssetBasedLendingHeroSection';

const AssetBasedLendingPage: FC = () => {
  return (
    <div className='asset-based-lending-page'>
      <AssetBasedLendingHeroSection />
    </div>
  );
};

export default AssetBasedLendingPage;
