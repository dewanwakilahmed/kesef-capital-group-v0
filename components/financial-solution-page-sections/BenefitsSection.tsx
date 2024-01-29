'use client';

import { FC } from 'react';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  sectionTitle: string;
  sectionContent: Benefit[];
}

const BenefitsSection: FC<BenefitsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='benefits-section section section-with-no-bg-img'>
      <h2
        className='benefits-title section-title
  section-title-with-no-bg-img'
      >
        {sectionTitle}
      </h2>

      <div
        className='benefits-content section-content
  grid-cols-2'
      >
        {sectionContent.map(({ title, description }) => (
          <div className='benefits-card card card-light' key={title}>
            <h3 className='benefits-card-title text-gray-800'>{title}</h3>
            <p className='benefits-card-description card-description card-description-light mt-1'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
