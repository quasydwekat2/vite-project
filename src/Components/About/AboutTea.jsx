import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/About.module.less';
import WhyOurTea from '../../img/WhyOurTea.avif';

const rotatingContent = [
  {
    image: WhyOurTea,
    texts: [
      { icon: '🌿', text: '100% organic leaves, hand-picked with care' },
      {
        icon: '🌸',
        text: 'Blended by experts with over 120 years of tradition',
      },
      { icon: '🍃', text: 'Rich flavor profiles with health benefits' },
      { icon: '🌐', text: 'Ethically sourced, environmentally responsible' },
    ],
  },
  {
    image: WhyOurTea,
    texts: [
      { icon: '🍵', text: 'Delicate aroma from fresh leaves' },
      { icon: '☕', text: 'Perfect for morning energy' },
      { icon: '🌱', text: 'Sustainable and eco-friendly farms' },
      { icon: '🍯', text: 'Great with lemon or honey' },
    ],
  },
];

export default function AboutTea() {
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleTextCount, setVisibleTextCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const currentTexts = rotatingContent[imageIndex].texts;
    if (visibleTextCount < currentTexts.length) {
      const timer = setTimeout(() => {
        setVisibleTextCount((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Wait 2s after final text before changing image
      const delay = setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % rotatingContent.length);
        setVisibleTextCount(0);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [visibleTextCount, imageIndex]);

  const { image, texts } = rotatingContent[imageIndex];

  return (
    <section className={styles.aboutTea}>
      <Container>
        <Motion.h2
          className={styles.teaTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Our Tea?
        </Motion.h2>

        <Row className="align-items-center">
          <Col md={6}>
            <div className={styles.teaImageWrapper}>
              <AnimatePresence mode="wait">
                <Motion.img
                  key={imageIndex}
                  src={image}
                  alt="Tea visual"
                  className={styles.teaImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>
          </Col>

          <Col md={6}>
            <div className={styles.rotatingText}>
              {texts.slice(0, visibleTextCount).map((item, idx) => (
                <Motion.div
                  key={`text-${imageIndex}-${idx}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={styles.animatedText}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  {item.text}
                </Motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
