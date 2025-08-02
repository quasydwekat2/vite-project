import React from 'react';
import AboutSection from './AboutSection';
import AboutTea from './AboutTea';
import Styles from '@/Global/Styles/sectionDivider.module.less';
import HeroSection from '@/Global/HeroSection';
import Green from '@/img/Green.webp';

const Root = () => {
  return (
    <>
      <HeroSection
        title=" Our Story"
        image={Green}
        mobileImage={Green}
        scrollTarget="#about-section"
      />
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />

      <AboutSection />
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />

      <AboutTea />
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />
    </>
  );
};

export default Root;
