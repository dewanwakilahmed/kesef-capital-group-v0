'use client';

import { usePathname } from 'next/navigation';

// Content Import
import { financialSolutions } from '@/content/financialSolutions';

// Section Components Imports
import PageHeroSection from '@/components/PageHeroSection';
import WhatIsSection from '@/components/financial-solution-page-sections/WhatIsSection';
import HowItWorksSection from '@/components/financial-solution-page-sections/HowItWorksSection';

const FinancialSolutionPage = () => {
  const pathname = usePathname();
  const financialSolutionPage = pathname.replace(/^\//, '');

  const financialSolution = financialSolutions.find(
    (solution) => solution.heroSection.title === financialSolutionPage
  );

  if (!financialSolution) return <div>Financial Solution Not Found!</div>;

  const hero = financialSolution.heroSection;
  const whatIs = financialSolution.whatIsSection;
  const howItWorks = financialSolution.howItWorksSection;

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
      <HowItWorksSection
        solutionTitle={hero.title}
        sectionTitle={howItWorks.sectionTitle}
        sectionContent={howItWorks.sectionContent}
      />
    </div>
  );
};

export default FinancialSolutionPage;
