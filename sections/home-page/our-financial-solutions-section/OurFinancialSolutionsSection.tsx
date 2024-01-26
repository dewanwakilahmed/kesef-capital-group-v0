import '@/sections/home-page/our-financial-solutions-section/our-financial-solutions-section.css';

const financialSolutions = [
  {
    title: 'Merchant Cash Advance',
    description:
      'Unlock immediate capital based on your credit card sales, with flexible repayment.',
    link: '/merchant-cash-advance',
  },
  {
    title: 'Term Loan',
    description:
      'Secure a lump sum for your business with fixed repayments over a specified term.',
    link: '/term-loan',
  },
  {
    title: 'Line of Credit',
    description:
      'Flexible financing with access to funds up to a predetermined credit limit.',
    link: '/line-of-credit',
  },
  {
    title: 'Asset Based Lending',
    description:
      'Leverage your business assets to secure a flexible and tailored financing solution.',
    link: '/asset-based-lending',
  },
  {
    title: 'Equipment Financing',
    description:
      'Acquire the equipment your business needs with financing options customized for you.',
    link: '/equipment-financing',
  },
  {
    title: 'Bad Credit Lending',
    description:
      'Overcome credit challenges and access the funding your business requires to thrive.',
    link: '/bad-credit-lending',
  },
];

const OurFinancialSolutionsSection = () => {
  return (
    <section className='our-financial-solutions-section'>
      <h2 className='section-title'>Our Financial Solutions</h2>

      <div className='our-financial-solutions-section-content'>
        {financialSolutions.map((solution, index) => (
          <div key={index} className='financial-solution-card'>
            <h3 className='solution-title'>{solution.title}</h3>
            <p className='solution-description'>{solution.description}</p>
            <a href={solution.link} className='learn-more-link'>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFinancialSolutionsSection;
