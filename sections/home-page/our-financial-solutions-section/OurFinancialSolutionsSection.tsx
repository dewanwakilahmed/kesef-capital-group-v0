'use client';

import Link from 'next/link';

// CSS Import
import './our-financial-solutions-section.css';

// Icon Imports
import {
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaCreditCard,
  FaCoins,
  FaTools,
  FaSadCry,
} from 'react-icons/fa';

const financialSolutions = [
  {
    icon: <FaMoneyBillWave size={35} />,
    title: 'Merchant Cash Advance',
    description:
      'Unlock immediate capital based on your credit card sales, with flexible repayment.',
    link: '/financial-solutions/merchant-cash-advance',
  },
  {
    icon: <FaHandHoldingUsd size={35} />,
    title: 'Term Loan',
    description:
      'Secure a lump sum for your business with fixed repayments over a specified term.',
    link: '/financial-solutions/term-loan',
  },
  {
    icon: <FaCreditCard size={35} />,
    title: 'Line of Credit',
    description:
      'Flexible financing with access to funds up to a predetermined credit limit.',
    link: '/financial-solutions/line-of-credit',
  },
  {
    icon: <FaCoins size={35} />,
    title: 'Asset Based Lending',
    description:
      'Leverage your business assets to secure a flexible and tailored financing solution.',
    link: '/financial-solutions/asset-based-lending',
  },
  {
    icon: <FaTools size={35} />,
    title: 'Equipment Financing',
    description:
      'Acquire the equipment your business needs with financing options customized for you.',
    link: '/financial-solutions/equipment-financing',
  },
  {
    icon: <FaSadCry size={35} />,
    title: 'Bad Credit Lending',
    description:
      'Overcome credit challenges and access the funding your business requires to thrive.',
    link: '/financial-solutions/bad-credit-lending',
  },
];

const OurFinancialSolutionsSection = () => {
  return (
    <section className='our-financial-solutions-section'>
      <h2 className='our-financial-solutions-title'>Our Financial Solutions</h2>

      <div className='our-financial-solutions-content'>
        {financialSolutions.map((solution, index) => (
          <div key={index} className='our-financial-solution-card'>
            <div className='our-financial-solution-card-icon'>
              {solution.icon}
            </div>
            <h3 className='our-financial-solution-card-title'>
              {solution.title}
            </h3>
            <p className='our-financial-solution-card-description'>
              {solution.description}
            </p>
            <Link
              className='our-financial-solution-card-learn-more-link'
              href={solution.link}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFinancialSolutionsSection;
