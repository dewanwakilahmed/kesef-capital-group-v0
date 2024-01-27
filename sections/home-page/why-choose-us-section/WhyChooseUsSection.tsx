'use client';

import Button from '@/components/ui/button/Button';

// CSS Import
import './why-choose-us-section.css';

// Icon Imports
import { FaCheckCircle, FaBalanceScale, FaHandshake } from 'react-icons/fa';

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

const WhyChooseUsSection = () => {
  return (
    <section className='why-choose-us-section'>
      <div className='why-choose-us-bg-img-overlay' />

      <h2 className='why-choose-us-title'>Why Choose Us</h2>

      <div className='why-choose-us-content'>
        {benefits.map((benefit, index) => (
          <div key={index} className='benefit-card'>
            <div className='benefit-card-icon'>{benefit.icon}</div>
            <h3 className='benefit-card-title'>{benefit.title}</h3>
            <p className='benefit-card-description'>{benefit.description}</p>
          </div>
        ))}
      </div>
      <Button className='why-choose-us-cta' btnType='primary' goTo='/apply-now'>
        Apply Now
      </Button>
    </section>
  );
};

export default WhyChooseUsSection;
