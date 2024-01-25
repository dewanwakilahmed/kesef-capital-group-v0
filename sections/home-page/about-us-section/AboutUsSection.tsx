import Image from 'next/image';

import '@/sections/home-page/about-us-section/about-us-section.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AboutUsSection = () => {
  return (
    <section className='about-us-section'>
      <Card>
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
          <CardDescription>
            Welcome to Powerhouse Funding, where financial empowerment meets
            entrepreneurial dreams. Founded in 2024, our journey has been a
            testament to resilience and innovation in providing tailored
            financial solutions for small businesses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src='/images/small-business.jpg'
            alt='small-business'
            width={300}
            height={200}
            className='about-us-section-img'
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>
            At Powerhouse Funding, our mission is to break down financial
            barriers, offering not just funding but a genuine partnership in the
            success of small businesses. We believe in empowering entrepreneurs
            to thrive and grow, contributing to the prosperity of communities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src='/images/friendly-face.jpg'
            alt='friendly-face'
            width={300}
            height={200}
            className='about-us-section-img'
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutUsSection;
