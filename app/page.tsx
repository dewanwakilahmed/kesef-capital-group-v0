import '@/app/home-page.css';

import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import FinancialSolutionsOverviewSection from '@/sections/home-page/financial-solutions-overview-section/FinancialSolutionsOverviewSection';
import HeroSection from '@/sections/home-page/hero-section/HeroSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutUsSection />
      <FinancialSolutionsOverviewSection />
    </div>
  );
};

export default HomePage;
