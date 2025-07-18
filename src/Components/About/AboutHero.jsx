import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/About.module.less';

export default function AboutHero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('about-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.aboutHero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle} data-aos="fade-up">
            Our Story
          </h1>
          <button
            className={styles.scrollBtn}
            onClick={scrollToAbout}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            ↓ Scroll to About
          </button>
        </div>
      </div>
    </section>
  );
}
