import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/ContactHero.module.less';

export default function ContactHero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.heroSection} data-aos="fade-in">
      <img
        src="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg/v1/fill/w_1225,h_986,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg"
        alt="Modern office with warm lighting"
        className={styles.heroImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.heroTitle}>Contact Us</h1>
      </div>
    </section>
  );
}
