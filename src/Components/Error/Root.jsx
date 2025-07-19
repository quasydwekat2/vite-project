import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { toast } from 'react-toastify';

import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/NotFound.module.less';

export default function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const openExternalLink = () => {
    toast.info('Opening original article...', { position: 'top-center' });
    setTimeout(() => {
      window.open(
        'https://www.silocreativo.com/en/creative-examples-404-error-css/',
        '_blank'
      );
    }, 800);
  };

  return (
    <Container className={styles.wrapper} fluid>
      <h1 className={styles.title} data-aos="fade-down">
        404 Error
      </h1>
      <p className={styles.subtitle} data-aos="fade-up">
        Oops! <b>Page not found</b>. Let’s animate our way back.
      </p>

      <section className={styles.errorContainer}>
        <span className={styles.four}></span>
        <span className={styles.zero}></span>
        <span className={styles.four}></span>
      </section>

      <div className={styles.linkContainer}>
        <NavLink to="/" className={styles.navBtn}>
          <Button onClick={openExternalLink} variant="danger">
            Go to Homepage
          </Button>
        </NavLink>
      </div>
    </Container>
  );
}
