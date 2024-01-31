'use client';

import { FC } from 'react';

// Icon Imports
import { FaCheckCircle, FaBalanceScale, FaHandshake } from 'react-icons/fa';

// UI Component Import
import Button from '@/components/ui/button/Button';

const benefits = [
  {
    title: 'Fast Approval Process',
    description:
      'Experience quick and efficient approval timelines for your funding needs.',
    icon: <FaCheckCircle size={50} />,
  },
  {
    title: 'Flexible and Competitive Rates',
    description:
      "Enjoy financing options with rates that adapt to your business's unique requirements.",
    icon: <FaBalanceScale size={50} />,
  },
  {
    title: 'Personalized Solutions',
    description:
      'Tailored financial solutions designed to meet the specific needs of your business.',
    icon: <FaHandshake size={50} />,
  },
];

const WhyChooseUsSection: FC = () => {
  return (
    <section
      className='why-choose-us-section section section-with-bg-img'
      style={{
        backgroundImage: `url('/images/why-choose-us-bg/why-choose-us-bg.webp')`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2 className='why-choose-us-title section-title section-title-with-bg-img'>
        Why Choose Us
      </h2>

      <div className='why-choose-us-content section-content grid-cols-3'>
        {benefits.map((benefit, index) => (
          <div key={index} className='benefit-card card card-dark'>
            <div className='benefit-card-icon text-neutral-50 mb-2'>
              {benefit.icon}
            </div>
            <h3 className='benefit-card-title text-neutral-50'>
              {benefit.title}
            </h3>
            <p className='benefit-card-description card-description card-description-dark'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <Button
        className='why-choose-us-cta relative mt-5'
        btnType='primary'
        goTo='/apply-now'
      >
        Apply Now
      </Button>
    </section>
  );
};

export default WhyChooseUsSection;
