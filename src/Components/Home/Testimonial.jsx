import React from 'react';
import styles from './Styles/Testimonial.module.less';

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <blockquote className={styles.quote}>
        “I'm a testimonial. Click to edit me and add text that says something
        nice about you and your services.”
      </blockquote>
      <p className={styles.author}>Kate Braxton</p>
    </section>
  );
}
