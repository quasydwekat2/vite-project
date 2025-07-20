import React, { useEffect, useRef } from 'react';
import * as Anime from 'animejs';
const anime = Anime.default || Anime;

import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/AnimatedSubmitButton.module.less';

const AnimatedSubmitButton = () => {
  const pathRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const pathEl = pathRef.current;

    if (pathEl) {
      const offset = pathEl.getTotalLength();
      pathEl.setAttribute('stroke-dasharray', offset);
      pathEl.setAttribute('stroke-dashoffset', offset);

      timelineRef.current = anime.timeline({ autoplay: false })
        .add({
          targets: `.${styles.text}`,
          duration: 1,
          opacity: 0,
        })
        .add({
          targets: `.${styles.button}`,
          duration: 1300,
          height: 10,
          width: 300,
          backgroundColor: '#2B2D2F',
          borderRadius: 100,
        })
        .add({
          targets: `.${styles.progressBar}`,
          duration: 2000,
          width: 300,
          easing: 'linear',
        })
        .add({
          targets: `.${styles.button}`,
          width: 0,
          duration: 1,
        })
        .add({
          targets: `.${styles.progressBar}`,
          width: 80,
          height: 80,
          delay: 500,
          duration: 750,
          borderRadius: 80,
          backgroundColor: '#71DFBE',
        })
        .add({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          duration: 200,
          easing: 'easeInOutSine',
          complete: () => {
            toast.success('Submitted successfully!', {
              position: 'top-right',
              autoClose: 2000,
            });
          },
        });
    }
  }, []);

  const handleClick = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div className={styles.container} data-aos="zoom-in">
      <div className={styles.button} onClick={handleClick}>
        <div className={styles.text}>Submit</div>
      </div>
      <div className={styles.progressBar}></div>
      <svg viewBox="0 0 25 30" className={styles.svg}>
        <path
          ref={pathRef}
          className={styles.check}
          d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"
        />
      </svg>
    </div>
  );
};

export default AnimatedSubmitButton;
