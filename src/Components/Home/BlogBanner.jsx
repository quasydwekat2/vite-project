import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Styles/BlogBanner.module.less';

export default function BlogBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.banner} data-aos="fade-up">
      <h2 className={styles.bannerText}>Read Our Blog</h2>
    </section>
  );
}
