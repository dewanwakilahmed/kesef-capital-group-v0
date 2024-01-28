'use client';

import Image from 'next/image';

// CSS Import
import './testimonials-section.css';

const testimonials = [
  {
    name: 'Emma Johnson',
    image: '/images/emma-johnson.jpg',
    position: 'Founder, XYZ Enterprises',
    feedback:
      'Powerhouse Funding exceeded our expectations. Their personalized approach and quick approval process helped us secure the funding we needed to grow our business.',
  },
  {
    name: 'David Smith',
    image: '/images/david-smith.jpg',
    position: 'Owner, ABC Solutions',
    feedback:
      'I highly recommend Powerhouse Funding for their professionalism and efficiency. They provided us with flexible financing options tailored to our business needs, allowing us to achieve our goals.',
  },
  {
    name: 'Sophia Brown',
    image: '/images/sophia-brown.jpg',
    position: 'CEO, Brown & Co.',
    feedback:
      'Working with Powerhouse Funding was a fantastic experience. Their team guided us through every step of the process, and their commitment to our success was evident from the start.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className='testimonials-section'>
      <div className='testimonials-bg-img-overlay' />

      <h2 className='testimonials-title'>Testimonials</h2>

      <div className='testimonials-content'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-card'>
            <Image
              className=' testimonial-person-image'
              src={testimonial.image}
              alt={testimonial.name}
              width={300}
              height={300}
            />

            <h3 className='testimonial-person-name'>{testimonial.name}</h3>

            <h4 className='testimonial-person-position'>
              {testimonial.position}
            </h4>

            <p className='testimonial-person-feedback'>
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
