import React, { useRef, useLayoutEffect } from 'react';
import {
  motion as Motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';
import useTiltEffect from '../Components/hooks/useTiltEffect';
import styles from './Styles/HeroSection.module.less';

export default function HeroSection({
  title = 'Welcome',
  image,
  mobileImage,
  scrollTarget = '#next',
}) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isMobile = window.innerWidth <= 768;

  useLayoutEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const { scrollY } = useScroll();
  const rotateXScroll = useTransform(scrollY, [0, 300], [0, 25]);
  const { rotateX, rotateY, handleMouseMove } = useTiltEffect(
    sectionRef,
    isMobile
  );

  const handleScroll = () => {
    const target = document.querySelector(scrollTarget);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Motion.section
      ref={sectionRef}
      className={`position-relative w-100 ${styles.hero}`}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
    >
      <picture>
        {mobileImage && (
          <source
            media="(max-width: 768px)"
            srcSet={mobileImage}
            loading="lazy"
          />
        )}
        <Motion.img
          loading="lazy"
          aria-hidden="true"
          role="presentation"
          src={image}
          alt=""
          className={`position-absolute top-0 start-0 w-100 h-100 ${styles.bgImage}`}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </picture>

      <Motion.div
        className={`position-absolute top-0 start-0 w-100 h-100 ${styles.overlay}`}
      >
        <Motion.div
          ref={titleRef}
          className={styles.titleBox}
          initial={{ opacity: 0, y: -60 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            rotateX: isMobile ? rotateXScroll : rotateX,
            rotateY: isMobile ? 0 : rotateY,
          }}
        >
          <Motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            {title}
          </Motion.h1>
        </Motion.div>
      </Motion.div>

      <Motion.div
        className={styles.scrollArrow}
        onClick={handleScroll}
        role="button"
        tabIndex={0}
        initial={{ y: 0, opacity: 0.5 }}
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className={styles.arrow}></div>
      </Motion.div>
    </Motion.section>
  );
}
