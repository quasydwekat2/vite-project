import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Styles from './styles/About.module.less';

export default function AboutHero() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200 });
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('about-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={Styles.aboutHero}>
      <div className={Styles.heroOverlay}>
        <div className={Styles.heroContent}>
          <h1 className={Styles.heroTitle} data-aos="fade-up">
            Our Story
          </h1>
          <button
            className={Styles.scrollBtn}
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


