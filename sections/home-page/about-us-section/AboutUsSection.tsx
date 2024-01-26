'use client';

import Image from 'next/image';

// CSS Import
import './about-us-section.css';

const AboutUsSection = () => {
  const aboutUsItems = [
    {
      title: 'Our Story',
      description:
        'Welcome to Powerhouse Funding, where financial empowerment meets entrepreneurial dreams. Established in 2024, our journey reflects resilience and innovation in providing tailored financial solutions for small businesses.',
      img: '/images/small-business.jpg',
      alt: 'small-business',
    },
    {
      title: 'Our Mission',
      description:
        'At Powerhouse Funding, our mission is to break down financial barriers, offering not just funding but a genuine partnership in the success of small businesses. We believe in empowering entrepreneurs to thrive and grow, contributing to the prosperity of communities.',
      img: '/images/friendly-face.jpg',
      alt: 'friendly-face',
    },
  ];

  return (
    <section className='about-us-section'>
      <h2 className='about-us-title'>About Us</h2>

      <div className='about-us-content'>
        {aboutUsItems.map((item, index) => (
          <div className='about-us-card' key={index}>
            <h3 className='about-us-card-title'>{item.title}</h3>
            <p className='about-us-card-description'>{item.description}</p>
            <Image
              src={item.img}
              alt={item.alt}
              width={300}
              height={200}
              className='about-us-card-img'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
