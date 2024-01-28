'use client';

import { financialSolutions } from '@/content/financialSolutions';

import { usePathname } from 'next/navigation';

import PageHeroSection from '@/components/PageHeroSection';

const FinancialSolutionPage = () => {
  const pathname = usePathname();
  const financialSolutionPage = pathname.replace(/^\//, '');

  const financialSolution = financialSolutions.find(
    (solution) => solution.heroSection.title === financialSolutionPage
  );

  if (!financialSolution) return <div>Financial Solution Not Found!</div>;

  return (
    <div className={`${financialSolution.heroSection.title}-page`}>
      <PageHeroSection
        solutionTitle={financialSolution.heroSection.title}
        headline={financialSolution.heroSection.headline}
        subheadline={financialSolution.heroSection.subheadline}
      />
    </div>
  );
};

export default FinancialSolutionPage;
