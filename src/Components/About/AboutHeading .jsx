import React from 'react';
import styles from './Styles/AboutHeading.module.less';

const AboutHeading = () => {
  return (
    <section className={`${styles.heroSection}`}>
      <img
        src="/22.jpg"
        alt="About Background"
        className={styles.bgImage}
      />

      <div className={styles.overlay}>
        <h2 className={styles.title}>Our Story</h2>
      </div>
    </section>
  );
};

export default AboutHeading;
