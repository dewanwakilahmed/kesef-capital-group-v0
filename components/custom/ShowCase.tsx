import { Container } from './Container';
import ShowCaseCard from './ShowCaseCard';

const showCasePoints = [
  {
    id: 1,
    title: 'Personalized Solutions, Timely Results',
    description:
      'Discover meticulously crafted financial solutions at Powerhouse Funding, uniquely designed to cater to the specific and evolving needs of your small business. Our commitment to customization ensures that you receive the necessary funding precisely when it is most crucial for your operations.',
  },
  {
    id: 2,
    title: 'Flexible Repayment Options',
    description:
      'Embark on your financial journey effortlessly with our adaptable repayment plans. Recognizing the dynamic nature of small businesses, Powerhouse Funding offers terms that effortlessly adjust to your evolving circumstances. Focus on expanding your enterprise without the burden of undue financial pressure.',
  },
  {
    id: 3,
    title: 'Exceptional Customer Support',
    description:
      'Elevate your funding journey with our dedicated customer support at Powerhouse Funding. Whether navigating application inquiries or seeking guidance during your funding expedition, rest assured that we are committed to delivering unparalleled support for your enduring peace of mind.',
  },
];

const ShowCase = () => {
  return (
    <div className='bg-slate-400 py-10'>
      <Container>
        <h2 className='text-black text-center font-semibold mb-6 text-3xl'>
          Why Choose Us
        </h2>
        <div className='text-black grid grid-cols-3 gap-7'>
          {showCasePoints.map((point) => (
            <ShowCaseCard
              key={point.id}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShowCase;
