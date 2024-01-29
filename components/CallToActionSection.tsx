'use client';

import { FC } from 'react';

// UI Component Import
import Button from '@/components/ui/button/Button';

const ctaItems = [
  {
    title: 'Eager to Kickstart Your Business?',
    description:
      'Submit your application today and receive approval within a day. We provide a range of funding options tailored to your business requirements.',
    link: '/apply-now',
    btnText: 'Apply Now',
    btnType: 'primary',
  },
  {
    title: 'Need More Information Before Deciding?',
    description:
      'Unsure about the right funding option for your business? Our dedicated team is on standby to assist you in identifying the most suitable solution.',
    link: '/contact-us',
    btnText: 'Contact Us',
    btnType: 'secondary',
  },
];

const CallToActionSection: FC = () => {
  return (
    <section className='call-to-action-section section section-with-no-bg-img'>
      <h2 className='call-to-action-title section-title section-title-with-no-bg-img'>
        Get Started Today
      </h2>

      <div className='call-to-action-content section-content grid-cols-2'>
        {ctaItems.map((item, index) => (
          <div className='call-to-action-card card card-light' key={index}>
            <h3 className='call-to-action-card-title text-lg text-gray-800 mb-3'>
              {item.title}
            </h3>

            <p className='call-to-action-card-description card-description card-description-light mb-3'>
              {item.description}
            </p>

            <Button
              className='call-to-action-card-btn mx-auto'
              btnType={
                item.btnType === 'primary' || item.btnType === 'secondary'
                  ? item.btnType
                  : 'primary'
              }
              goTo={item.link}
            >
              {item.btnText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;
