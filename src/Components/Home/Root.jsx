import React from 'react';
import BlogBanner from './BlogBanner';
import Testimonial from './Testimonial';
import WelcomeSection from './WelcomeSection';
import NewArrivals from './NewArrivals';
import Styles from '@/Global/Styles/sectionDivider.module.less';
const Root1 = () => {
  return (
    <>
      <WelcomeSection />
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />
      <NewArrivals />
      <div className={Styles.sectionDivider} data-aos="fade-left" data-aos-delay="200" />
      <BlogBanner />{' '}
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />
      <Testimonial />
    </>
  );
};

export default Root1;
