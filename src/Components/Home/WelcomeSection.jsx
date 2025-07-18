import React from 'react';
import styles from './Styles/WelcomeSection.module.less';

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <h2 className={styles.title}>It's Always Tea Time</h2>
      <h3 className={styles.subtitle}>With Bloom's Herbal Tea</h3>
      <button className={styles.shopBtn}>SHOP NOW</button>
    </section>
  );
}
