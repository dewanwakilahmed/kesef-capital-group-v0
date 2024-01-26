import Image from 'next/image';

import './about-us-section.css';

const AboutUsSection = () => {
  return (
    <section className='about-us-section'>
      <h2 className='about-us-title'>About Us</h2>

      <div className='about-us-content'>
        <div className='about-us-card'>
          <h3 className='about-us-card-title'>Our Story</h3>
          <p className='about-us-card-description'>
            Welcome to Powerhouse Funding, where financial empowerment meets
            entrepreneurial dreams. Established in 2024, our journey reflects
            resilience and innovation in providing tailored financial solutions
            for small businesses.
          </p>
          <Image
            src='/images/small-business.jpg'
            alt='small-business'
            width={300}
            height={200}
            className='about-us-card-img'
          />
        </div>

        <div className='about-us-card'>
          <h3 className='about-us-card-title'>Our Mission</h3>
          <p className='about-us-card-description'>
            At Powerhouse Funding, our mission is to break down financial
            barriers, offering not just funding but a genuine partnership in the
            success of small businesses. We believe in empowering entrepreneurs
            to thrive and grow, contributing to the prosperity of communities.
          </p>
          <Image
            src='/images/friendly-face.jpg'
            alt='friendly-face'
            width={300}
            height={200}
            className='about-us-card-img'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
