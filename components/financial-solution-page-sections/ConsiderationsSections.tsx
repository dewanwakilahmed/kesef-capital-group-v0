'use client';

import { FC } from 'react';

interface Consideration {
  title: string;
  description: string;
}

interface ConsiderationsSectionProps {
  sectionTitle: string;
  sectionContent: Consideration[];
}

const ConsiderationsSection: FC<ConsiderationsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='considerations-section section section-with-no-bg-img'>
      <h2
        className='considerations-title section-title
  section-title-with-no-bg-img'
      >
        {sectionTitle}
      </h2>

      <div
        className='considerations-content section-content
  grid-cols-2'
      >
        {sectionContent.map(({ title, description }) => (
          <div className='considerations-card card card-light' key={title}>
            <h3 className='considerations-card-title text-gray-800'>{title}</h3>
            <p className='considerations-card-description card-description card-description-light mt-1'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsiderationsSection;
