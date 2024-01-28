'use client';

import { FC } from 'react';

// Import CSS
import './equipment-financing-page.css';

// Import Sections
import EquipmentFinancingHeroSection from '@/sections/financial-solutions-page/equipment-financing-page/equipment-financing-hero-section/EquipmentFinancingHeroSection';

const EquipmentFinancingPage: FC = () => {
  return (
    <div className='equipment-financing-page'>
      <EquipmentFinancingHeroSection />
    </div>
  );
};

export default EquipmentFinancingPage;
