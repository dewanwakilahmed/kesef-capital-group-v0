import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <nav className='flex flex-col gap-3'>
        <Link href='/financial-solutions'>Financial Solutions</Link>
        <Link href='/financial-solutions/merchant-cash-advance'>
          Merchant Cash Advance
        </Link>
        <Link href='/financial-solutions/term-loan'>Term Loan</Link>
        <Link href='/financial-solutions/line-of-credit'>Line of Credit</Link>
        <Link href='/financial-solutions/asset-based-lending'>
          Asset Based Lending
        </Link>
        <Link href='/financial-solutions/equipment-financing'>
          Equipment Financing
        </Link>
        <Link href='/financial-solutions/bad-credit-lending'>
          Bad Credit Lending
        </Link>
        <Link href='/apply-now'>Apply Now</Link>
        <Link href='/contact-us'>Contact Us</Link>
      </nav>

      <h1>HomePage</h1>
    </div>
  );
};

export default HomePage;
