'use client';

import { FC } from 'react';

interface WhatIsSectionProps {
  sectionTitle: string;
  sectionContent: string;
}

const WhatIsSection: FC<WhatIsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='what-is-section section section-with-bg-no-img'>
      <h2
        className='what-is-title section-title
  section-title-with-no-bg-img'
      >
        {sectionTitle}
      </h2>

      <div className='what-is-content what-is-card card card-light text-gray-800'>
        {sectionContent}
      </div>
    </section>
  );
};

export default WhatIsSection;
