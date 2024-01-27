'use client';

import Image from 'next/image';

// CSS and Next.js Image Import
import './testimonials-section.css';

const testimonials = [
  {
    name: 'Emma Johnson',
    position: 'Founder, XYZ Enterprises',
    feedback:
      'Powerhouse Funding exceeded our expectations. Their personalized approach and quick approval process helped us secure the funding we needed to grow our business.',
    image: '/images/emma-johnson.jpg',
  },
  {
    name: 'David Smith',
    position: 'Owner, ABC Solutions',
    feedback:
      'I highly recommend Powerhouse Funding for their professionalism and efficiency. They provided us with flexible financing options tailored to our business needs, allowing us to achieve our goals.',
    image: '/images/david-smith.jpg',
  },
  {
    name: 'Sophia Brown',
    position: 'CEO, Brown & Co.',
    feedback:
      'Working with Powerhouse Funding was a fantastic experience. Their team guided us through every step of the process, and their commitment to our success was evident from the start.',
    image: '/images/sophia-brown.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section className='testimonials-section'>
      <div className='testimonials-bg-img-overlay' />

      <h2 className='testimonials-title'>Testimonials</h2>
      <div className='testimonials-content'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial'>
            <Image
              className='testimonial-image'
              src={testimonial.image}
              alt={testimonial.name}
              width={300}
              height={300}
            />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.position}</h4>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
