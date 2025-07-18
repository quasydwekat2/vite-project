import React from 'react';
import BlogBanner from './BlogBanner';
import Testimonial from './Testimonial';
import WelcomeSection from './WelcomeSection';
import NewArrivals from './NewArrivals';

const Root1 = () => {
  return (
    <>
      <WelcomeSection />
      <NewArrivals />
      <BlogBanner />
      <Testimonial />
    </>
  );
};

export default Root1;
