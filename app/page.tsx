'use client';

// CSS Import
import './home-page.css';

// Section Imports
import HeroSection from '@/sections/home-page/hero-section/HeroSection';
import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import OurFinancialSolutionsSection from '@/sections/home-page/our-financial-solutions-section/OurFinancialSolutionsSection';
import WhyChooseUsSection from '@/sections/home-page/why-choose-us-section/WhyChooseUsSection';
import TestimonialsSection from '@/sections/home-page/testimonials-section/TestimonialsSection';
import CallToActionSection from '@/sections/home-page/call-to-action-section/CallToActionSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <OurFinancialSolutionsSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
