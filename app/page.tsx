import '@/app/home-page.css';

import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import FinancialSolutionsOverviewSection from '@/sections/home-page/financial-solutions-overview-section/FinancialSolutionsOverviewSection';
import HeroSection from '@/sections/home-page/hero-section/HeroSection';
import TestimonialsSection from '@/sections/home-page/testimonials-section/TestimonialsSection';
import WhyChooseUsSection from '@/sections/home-page/why-choose-us-section/WhyChooseUsSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutUsSection />
      <FinancialSolutionsOverviewSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
