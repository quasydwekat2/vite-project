import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Styles/Footer.module.less';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Section 1 */}
        <div data-aos="fade-up">
          <h4 className={styles.sectionTitle}>
            Get to Know <br />
            <span className={styles.boldTitle}>Bloom's Tea Better</span>
          </h4>
          <ul className={styles.linkList}>
            <li>
              <NavLink to="/teas">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/extras">Extras</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className={styles.helpTitle}>Help</h4>
          <ul className={styles.linkList}>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/shipping-returns">Shipping & Returns</NavLink>
            </li>
            <li>
              <NavLink to="/policy">Store Policy</NavLink>
            </li>
            <li>
              <NavLink to="/payments">Payment Methods</NavLink>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className={styles.helpTitle}>Follow Us</h4>
          <ul className={`${styles.linkList} ${styles.socialLinks}`}>
            <li>
              <NavLink to="/facebook">Facebook</NavLink>
            </li>
            <li>
              <NavLink to="/instagram">Instagram</NavLink>
            </li>
            <li>
              <NavLink to="/pinterest">Pinterest</NavLink>
            </li>
          </ul>

          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email here *"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe Now
            </button>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Yes, subscribe me to your newsletter.</span>
            </label>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          ©2025 by Bloom's Tea. Powered and secured by{' '}
          <NavLink to="/wix" className={styles.wix}>
            Wix
          </NavLink>
        </p>
      </div>
    </footer>
  );
}
