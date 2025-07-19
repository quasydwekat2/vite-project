import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';
import styles from './Styles/ReactiveActionButton.module.less';

const ReactiveActionButton = () => {
  const [buttonState, setButtonState] = useState('idle');

  const handleClick = () => {
    setButtonState('loading');

    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;
      setButtonState(isSuccess ? 'success' : 'error');

      setTimeout(() => setButtonState('idle'), 2000);
    }, 2000);
  };

  return (
    <div className={styles.reactiveBtnWrapper}>
      <ReactiveButton
        buttonState={buttonState}
        onClick={handleClick}
        color="primary"
        idleText="Click Me"
        loadingText={<><FontAwesomeIcon icon={faCircleNotch} spin /> Loading</>}
        successText={<><FontAwesomeIcon icon={faThumbsUp} /> Success</>}
        errorText={<><FontAwesomeIcon icon={faBomb} /> Error</>}
        type="button"
        className={styles.reactiveBtn}
        messageDuration={2000}
        animation
        aria-label="Reactive Action Button"
      />
    </div>
  );
};

export default ReactiveActionButton;
