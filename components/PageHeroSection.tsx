'use client';

import { FC } from 'react';

// UI Component Imports
import Button from '@/components/ui/button/Button';

interface PageHeroSectionProps {
  solutionTitle: string;
  headline: string;
  subheadline: string;
}

const PageHeroSection: FC<PageHeroSectionProps> = ({
  solutionTitle,
  headline,
  subheadline,
}) => {
  return (
    <section
      className={`${solutionTitle}-hero-section section section-with-bg-img h-screen`}
      style={{
        backgroundImage: `url('/images/hero-bg/${solutionTitle}-hero-bg.webp')`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <div className='hero-content'>
        <h1 className='hero-headline'>{headline}</h1>

        <p className='hero-subheadline -mt-2'>{subheadline}</p>

        <Button className='hero-cta mt-2' btnType='primary' goTo='/apply-now'>
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default PageHeroSection;
