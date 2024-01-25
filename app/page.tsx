import '@/app/home-page.css';

import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import FinancialSolutionsOverviewSection from '@/sections/home-page/financial-solutions-overview-section/FinancialSolutionsOverviewSection';
import HeroSection from '@/sections/home-page/hero-section/HeroSection';
import WhyChooseUsSection from '@/sections/home-page/why-choose-us-section/WhyChooseUsSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutUsSection />
      <FinancialSolutionsOverviewSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default HomePage;
