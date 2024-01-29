'use client';

import { FC } from 'react';

interface UseCase {
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  solutionTitle: string;
  sectionTitle: string;
  sectionContent: UseCase[];
}

const UseCasesSection: FC<UseCasesSectionProps> = ({
  solutionTitle,
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section
      className='use-cases-section section
    section-with-bg-img'
      style={{
        backgroundImage: `url(/images/use-cases-bg/${solutionTitle}-use-cases-bg.webp)`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2
        className='use-cases-title section-title
        section-title-with-bg-img'
      >
        {sectionTitle}
      </h2>

      <div
        className='use-cases-content section-content
  grid-cols-2'
      >
        {sectionContent.map(({ title, description }) => (
          <div className='use-cases-card card card-dark' key={title}>
            <h3 className='use-cases-card-title text-neutral-50'>{title}</h3>
            <p className='use-cases-card-description card-description card-description-dark mt-1'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
