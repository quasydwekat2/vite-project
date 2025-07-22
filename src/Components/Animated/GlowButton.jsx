// src/components/GlowButton.jsx
import React from 'react';
import ReactiveButton from 'reactive-button';
import { motion as Motion } from 'framer-motion';
import { FaThumbsUp, FaBomb, FaSpinner } from 'react-icons/fa';
import styles from './Styles/GlowButton.module.less';

export default function GlowButton({
  buttonState,
  onClick,
  idleText = 'Submit',
  loadingText = 'Loading',
  successText = 'Success',
  errorText = 'Error',
  width = '100%',
  size = 'large',
  messageDuration = 2000,
  disabled = false,
  customClass = '', // ⭐️ Accept custom LESS class name
}) {
  return (
    <div className={`${styles.buttonWrapper}`}>
      <ReactiveButton
        buttonState={buttonState}
        onClick={onClick}
        aria-label={idleText}
        color="primary"
        idleText={idleText}
        loadingText={
          <>
            <Motion.span
              className={styles.spin}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
              }}
            >
              <FaSpinner />
            </Motion.span>
            {loadingText}
          </>
        }
        successText={
          <>
            <FaThumbsUp /> {successText}
          </>
        }
        errorText={
          <>
            <FaBomb /> {errorText}
          </>
        }
        type="button"
        className={`${styles.glowButton} ${customClass}`}
        outline={true}
        shadow={true}
        rounded={true}
        size={size}
        block={false}
        messageDuration={messageDuration}
        disabled={disabled}
        animation={true}
        style={{ width }}
      />
    </div>
  );
}
