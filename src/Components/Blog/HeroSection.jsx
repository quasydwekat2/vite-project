import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import styles from './Styles/HeroSection.module.less';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={`position-relative ${styles.heroSection}`}>
      <img
        src='../../../img/person.jpg'
        alt="Hero Background"
        className={`position-absolute top-0 start-0 w-100 h-100 ${styles.heroImage}`}
      />
      <div
        className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.overlay}`}
        data-aos="fade-in"
      >
        <Container className="text-center">
          <h1 className={`text-white ${styles.title}`}>Bloom's Blog</h1>
        </Container>
      </div>
    </section>
  );
}
