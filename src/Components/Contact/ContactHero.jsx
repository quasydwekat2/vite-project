import React from 'react';
import styles from './Styles/ContactHero.module.less';

export default function ContactHero() {
  return (
    <section className={`position-relative w-100 ${styles.hero}`}>
      <img
        src="https://static.wixstatic.com/media/84770f_eb5d4f35053142f18549ac540e039722~mv2_d_5969_4273_s_4_2.jpg"
        alt="Contact Background"
        className={`position-absolute top-0 start-0 w-100 h-100 ${styles.bgImage}`}
      />
      <div
        className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.overlay}`}
      >
        <h1 className="text-white display-5 fst-italic fw-light m-0">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
