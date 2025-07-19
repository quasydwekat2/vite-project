import React from 'react';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Styles from '../../Global/sectionDivider.module.less';

const Root = () => {
  return (
    <>
      <HeroSection />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />

      <Cards />
    </>
  );
};

export default Root;
