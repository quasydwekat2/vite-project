import React, { useEffect, useState } from 'react';
import styles from './Styles/AnimatedButton..module.less';

export default function AnimatedButton() {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleClick = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={handleClick}>
        <svg viewBox="0 0 180 60" preserveAspectRatio="none">
          <rect
            x="1"
            y="1"
            width="178"
            height="58"
            rx="12"
            ry="12"
            className={styles.strokeRect}
          />
        </svg>

        <span>{isAtTop ? 'Scroll Down ⬇️' : 'Go Up ⬆️'}</span>
      </button>
    </div>
  );
}
