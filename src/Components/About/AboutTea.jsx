import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles/About.module.less';

export default function AboutTea() {
  return (
    <section className={styles.aboutTea}>
      <Container>
        <h2 className={styles.teaTitle} data-aos="fade-up">
          Why Our Tea?
        </h2>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src="../../../img/Green.avif"
              alt="Freshly brewed tea"
              className={styles.teaImage}
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <ul className={styles.teaList}>
              <li>
                <span className={styles.icon}>🌿</span>
                100% organic leaves, hand-picked with care
              </li>
              <li>
                <span className={styles.icon}>🌸</span>
                Blended by experts with over 120 years of tradition
              </li>
              <li>
                <span className={styles.icon}>🍃</span>
                Rich flavor profiles with health benefits
              </li>
              <li>
                <span className={styles.icon}>🌐</span>
                Ethically sourced, environmentally responsible
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
