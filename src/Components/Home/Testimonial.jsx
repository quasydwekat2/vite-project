// import React from 'react';
// import styles from './Styles/Testimonial.module.less';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function Testimonial() {
//   React.useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className={styles.testimonialSection} data-aos="fade-up">
//       <blockquote className={styles.quote}>
//         “I'm a testimonial. Click to edit me and add text that says something
//         nice about you and your services.”
//       </blockquote>
//       <p className={styles.author}>Kate Braxton</p>
//     </section>
//   );
// }
import React, { useEffect } from 'react';
import styles from './Styles/Testimonial.module.less';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={styles.testimonialSection} data-aos="fade-up">
      <blockquote className={styles.quote}>
        <span>“I'm a testimonial.</span>
        <span>Click to edit me and add text</span>
        <span>that says something nice about you.”</span>
      </blockquote>
      <p className={styles.author}>Kate Braxton</p>
    </section>
  );
}
