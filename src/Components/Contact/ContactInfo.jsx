import React from 'react';
import styles from './styles/ContactInfo.module.less';

export default function ContactInfo() {
  return (
    <section className={styles.contactInfo} data-aos="fade-left">
      <div className={styles.infoBlock}>
        <h5>Our Stores</h5>
        <div className={styles.store}>
          <p>
            500 Terry Francine Street<br />
            San Francisco, CA 94158<br />
            Tel: 123-456-7890
          </p>
        </div>
        <hr />
        <div className={styles.store}>
          <p>
            500 Terry Francine Street<br />
            San Francisco, CA 94158<br />
            Tel: 123-456-7890
          </p>
        </div>
      </div>
      <div className={styles.hours}>
        <h5>Opening Hours</h5>
        <p>Mon – Fri: 8am – 8pm</p>
        <p>Saturday: 9am – 9pm</p>
        <p>Sunday: 9am – 10pm</p>
      </div>
    </section>
  );
}
