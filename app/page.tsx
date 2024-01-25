import '@/app/home-page.css';

import AboutUsSection from '@/sections/home-page/about-us-section/AboutUsSection';
import HeroSection from '@/sections/home-page/hero-section/HeroSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutUsSection />
    </div>
  );
};

export default HomePage;
