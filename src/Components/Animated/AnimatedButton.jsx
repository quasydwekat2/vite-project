import React, { useEffect, useState } from 'react';
import styles from './Styles/AnimatedButton.module.less';

export default function AnimatedButton({
  topLabel = 'Scroll Down ⬇️',
  bottomLabel = 'Go Up ⬆️',
  scrollThreshold = 100,
  className = '',
  scrollToTopPosition = 0,
  scrollToBottomPosition,
}) {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleClick = () => {
    if (isAtTop) {
      window.scrollTo({
        top: scrollToBottomPosition ?? document.body.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: scrollToTopPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return (
    <div className={`${styles.btnWrapper} ${className}`}>
      <button className={styles.btn} onClick={handleClick} aria-label="Animated scroll button">
        <svg viewBox="0 0 180 60" preserveAspectRatio="none">
          <rect x="1" y="1" width="178" height="58" rx="12" ry="12" className={styles.strokeRect} />
        </svg>
        <span>{isAtTop ? topLabel : bottomLabel}</span>
      </button>
    </div>
  );
}
