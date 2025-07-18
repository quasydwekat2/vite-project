import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Styles/AboutContent.module.less';

const AboutContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className={`container py-5 ${styles.aboutContainer}`}>
      {/* Title with lines */}
      <div
        className={`d-flex align-items-center justify-content-center mb-4 ${styles.titleRow}`}
        data-aos="fade-up"
      >
        <div className={styles.line}></div>
        <h3 className={styles.titleText}>120 Years of Brewing Fine Tea</h3>
        <div className={styles.line}></div>
      </div>

      {/* Paragraphs */}
      <div className="row">
        <div className="col-md-6 mb-4" data-aos="fade-right">
          <p className={styles.paragraph}>
            I’m a paragraph. Click here to add your own text and edit me...
          </p>
          <p className={styles.paragraph}>
            This is a great space to write long text about your company...
          </p>
        </div>

        <div className="col-md-6" data-aos="fade-left">
          <p className={styles.paragraph}>
            I’m a paragraph. Click here to add your own text and edit me...
          </p>
          <p className={styles.paragraph}>
            This is a great space to write long text about your company...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
