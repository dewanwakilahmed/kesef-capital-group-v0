'use client';

import { financialSolutions } from '@/content/financialSolutions';

import { usePathname } from 'next/navigation';

import PageHeroSection from '@/components/PageHeroSection';
import WhatIsSection from '@/components/financial-solution-page-section/WhatIsSection';

const FinancialSolutionPage = () => {
  const pathname = usePathname();
  const financialSolutionPage = pathname.replace(/^\//, '');

  const financialSolution = financialSolutions.find(
    (solution) => solution.heroSection.title === financialSolutionPage
  );

  if (!financialSolution) return <div>Financial Solution Not Found!</div>;

  const hero = financialSolution.heroSection;
  const whatIs = financialSolution.whatIsSection;

  return (
    <div className={`${hero.title}-page`}>
      <PageHeroSection
        solutionTitle={hero.title}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />
      <WhatIsSection
        sectionTitle={whatIs.sectionTitle}
        sectionContent={whatIs.sectionContent}
      />
    </div>
  );
};

export default FinancialSolutionPage;
