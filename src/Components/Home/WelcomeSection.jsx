import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StillView from '../Animated/StillView';
import styles from './Styles/WelcomeSection.module.less';

export default function WelcomeSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={styles.welcomeSection} data-aos="fade-up">
      <h2 className={styles.title}>It's Always Tea Time</h2>
      <h3 className={styles.subtitle}>With Bloom's Herbal Tea</h3>
      <div>
        <StillView to="/about" variant={1}>
          About Us
        </StillView>
      </div>
    </section>
  );
}
