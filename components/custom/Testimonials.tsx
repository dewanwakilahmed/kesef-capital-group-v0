import { Container } from './Container';
import Image from 'next/image';

const testimonials = [
  {
    client: 'KOURTINI P.',
    testimonial:
      'My experience with LCF has been nothing short of amazing! Sebastian was such a great help in getting everything in and submitted, and I was funded right away! Definitely recommended.',
  },
  {
    client: 'DEDRICK W.',
    testimonial:
      'Eve was very helpful and provided me options to stay on track with my payments and remain in good standing. If I had a question or concern, their response time was fast. I highly recommend.',
  },
  {
    client: 'JUDTIH D.',
    testimonial:
      'I have to say that I enjoyed working with Alex on the funding. He was very kind and thorough with all of the information I needed. It was overall a pleasure to deal with The LCF Group.',
  },
];

const Testimonials = () => {
  return (
    <div className='py-10 relative w-full h-full flex flex-col items-center justify-center'>
      <div className='absolute w-full h-full bg-black opacity-80 z-10'></div>
      <Image
        src='/images/testimonial-background.jpg'
        alt='trust'
        layout='fill'
        objectFit='cover'
        className='opacity-100'
      />

      <div className='z-20'>
        <Container>Testimonials</Container>
      </div>
    </div>
  );
};

export default Testimonials;
