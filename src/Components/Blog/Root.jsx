import React from 'react';
import Cards from './Cards';
import HeroSection from '@/Global/HeroSection';
// import CategoryFilter from './CategoryFilter';
import Styles from '@/Global/Styles/sectionDivider.module.less';
import AboutImage from '@/img/AboutHero.jpg';

const Root = () => {
  return (
    <>
      <HeroSection
        title="Bloom's Blog"
        image={AboutImage}
        mobileImage={AboutImage}
        scrollTarget="#blog-cards"
      />
      <div className={Styles.sectionDivider} data-aos="fade-in" data-aos-delay="200" />
      {/* <CategoryFilter />
      <div
        className={Styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      /> */}
      <Cards />
    </>
  );
};

export default Root;
