import React from 'react';
import AboutSection from './AboutSection';
import AboutTea from './AboutTea';
import AboutHero from './AboutHero';
import Styles from '../../Global/sectionDivider.module.less';

const Root = () => {
  return (
    <>
      <AboutHero />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <AboutSection />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <AboutTea />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />
    </>
  );
};

export default Root;
