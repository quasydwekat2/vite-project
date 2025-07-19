import React from 'react';
import ContactForm from './ContactForm';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import styles from '../../../Global/sectionDivider.module.less';

const Root = () => {
  return (
    <>
      <ContactHero />
      <div
        className={styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <ContactInfo />
      <div
        className={styles.sectionDivider}
        data-aos="fade-in"
        data-aos-delay="200"
      />
      <ContactForm />
    </>
  );
};

export default Root;
