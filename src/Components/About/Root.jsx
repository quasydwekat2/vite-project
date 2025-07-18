import React from 'react';
import AboutSection from './AboutSection';
import AboutTea from './AboutTea';
import AboutHero from './AboutHero';
import styles from '../../../Global/sectionDivider.module.less';

const Root = () => {
  return (
    <>
      <AboutHero />
      <div
        className={styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <AboutSection />
      <div
        className={styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <AboutTea />
      <div
        className={styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />
    </>
  );
};

export default Root;
