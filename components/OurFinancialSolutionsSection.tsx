'use client';

import { FC } from 'react';
import Link from 'next/link';

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
    title: 'Merchant Cash Advance',
    description:
      'Unlock immediate capital based on your credit card sales, with flexible repayment.',
    link: '/merchant-cash-advance',
    icon: <FaMoneyBillWave size={35} />,
  },
  {
    title: 'Term Loan',
    description:
      'Secure a lump sum for your business with fixed repayments over a specified term.',
    link: '/term-loan',
    icon: <FaHandHoldingUsd size={35} />,
  },
  {
    title: 'Line of Credit',
    description:
      'Flexible financing with access to funds up to a predetermined credit limit.',
    link: '/line-of-credit',
    icon: <FaCreditCard size={35} />,
  },
  {
    title: 'Asset Based Lending',
    description:
      'Leverage your business assets to secure a flexible and tailored financing solution.',
    link: '/asset-based-lending',
    icon: <FaCoins size={35} />,
  },
  {
    title: 'Equipment Financing',
    description:
      'Acquire the equipment your business needs with financing options customized for you.',
    link: '/equipment-financing',
    icon: <FaTools size={35} />,
  },
  {
    title: 'Bad Credit Lending',
    description:
      'Overcome credit challenges and access the funding your business requires to thrive.',
    link: '/bad-credit-lending',
    icon: <FaSadCry size={35} />,
  },
];

const OurFinancialSolutionsSection: FC = () => {
  return (
    <section className='our-financial-solutions-section section section-with-no-bg-img'>
      <h2 className='our-financial-solutions-title section-title section-title-with-no-bg-img'>
        Our Financial Solutions
      </h2>

      <div className='our-financial-solutions-content section-content grid-cols-3'>
        {financialSolutions.map((solution, index) => (
          <div
            key={index}
            className='financial-solution-card card
          card-light'
          >
            <div className='financial-solution-icon text-gray-800 mb-3'>
              {solution.icon}
            </div>

            <h3 className='financial-solution-title text-lg text-gray-800'>
              {solution.title}
            </h3>

            <p className='financial-solution-description card-description card-description-light'>
              {solution.description}
            </p>

            <Link
              className='financial-solution-learn-more-link text-blue-700 hover:underline mt-1'
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
