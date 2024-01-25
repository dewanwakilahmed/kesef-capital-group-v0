import Image from 'next/image';

import '@/sections/home-page/about-us-section/about-us-section.css';

const AboutUsSection = () => {
  return (
    <section className='about-us-section'>
      <h2 className='about-us-section-title'>About Us</h2>

      <div className='about-us-section-content'>
        <div className='company-story-container'>
          <Image
            src='/images/friendly-face.jpg'
            alt='friendly-face'
            width={225}
            height={150}
            className='about-us-section-img'
          />

          <p className='company-story'>
            Welcome to Powerhouse Funding, where financial empowerment meets
            entrepreneurial dreams. Founded in 2024, our journey has been a
            testament to resilience and innovation in providing tailored
            financial solutions for small businesses.
          </p>
        </div>

        <div className='company-mission-statement-container'>
          <Image
            src='/images/small-business.jpg'
            alt='small-business'
            width={225}
            height={100}
            className='about-us-section-img'
          />

          <p className='company-mission-statement'>
            At Powerhouse Funding, our mission is to break down financial
            barriers, offering not just funding but a genuine partnership in the
            success of small businesses. We believe in empowering entrepreneurs
            to thrive and grow, contributing to the prosperity of communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
