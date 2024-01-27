'use client';

// CSS Import
import './home-page.css';

// Section Imports
import HomeHeroSection from '@/sections/home-page/home-hero-section/HomeHeroSection';
import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import OurFinancialSolutionsSection from '@/sections/home-page/our-financial-solutions-section/OurFinancialSolutionsSection';
import WhyChooseUsSection from '@/sections/home-page/why-choose-us-section/WhyChooseUsSection';
import TestimonialsSection from '@/sections/home-page/testimonials-section/TestimonialsSection';
import CallToActionSection from '@/sections/home-page/call-to-action-section/CallToActionSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HomeHeroSection />
      <OurFinancialSolutionsSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
