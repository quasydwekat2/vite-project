import React from 'react';
import styles from './Styles/BlogBanner.module.less';

export default function BlogBanner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.bannerText}>Read Our Blog</h2>
    </section>
  );
}
