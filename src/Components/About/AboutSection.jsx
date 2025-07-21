import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/About.module.less';

export default function AboutSection() {
useEffect(() => {
  AOS.init({ once: false });

  // AOS.refresh(); 
}, []);

  return (
    <section className={styles.aboutSection} id="about-section">
      <Container>
        <div className={styles.titleRow} data-aos="fade-up">
          <div className={styles.line}></div>
          <h2 className={styles.sectionTitle}>120 Years of Brewing Fine Tea</h2>
          <div className={styles.line}></div>
        </div>

        <Row>
          <Col md={6} className={styles.column} data-aos="fade-right">
            <p>
              For over a century, our tea has been rooted in tradition and
              crafted with care. We began as a small family operation with a
              passion for natural blends and wellness.
            </p>
            <p>
              From handpicked leaves to precise blending, we’ve honored the
              artistry of tea making through generations — creating flavors that
              calm, energize, and inspire.
            </p>
            <p>
              Our teas are sourced from the finest gardens around the world,
              selected for their purity, aroma, and depth of flavor. Each blend
              is designed to offer a sensory journey — whether it’s soothing
              chamomile, refreshing green tea, or bold black brews.
            </p>
            <p>
              Sustainability and integrity are at the heart of everything we do.
              We partner with ethical growers and ensure every step — from leaf
              to cup — respects nature and supports local communities.
            </p>
          </Col>

          <Col md={6} className={styles.column} data-aos="fade-left">
            <p>
              Today, we continue that legacy with a modern twist — combining
              classic techniques with innovative flavors to meet the tastes of
              tea lovers around the world.
            </p>
            <p>
              Whether you’re starting your morning with a strong breakfast blend,
              winding down with a floral infusion, or sharing a moment of warmth
              with loved ones — we have a tea for every mood and moment.
            </p>
            <p>
              Each sip is a reflection of our values: purity, balance, and the
              pursuit of simple pleasures. Because tea isn’t just a drink — it’s
              a ritual, a memory, a connection.
            </p>
            <p>
              Join us and discover the perfect brew — crafted with history, love,
              and the finest leaves on earth.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
