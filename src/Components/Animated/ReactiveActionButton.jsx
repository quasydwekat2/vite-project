import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';

const ReactiveActionButton = () => {
  const [buttonState, setButtonState] = useState('idle');

  const handleClick = () => {
    setButtonState('loading');

    // Simulate async task with random success/failure
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;
      setButtonState(isSuccess ? 'success' : 'error');

      // Reset back to idle after showing result
      setTimeout(() => setButtonState('idle'), 2000);
    }, 2000);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <ReactiveButton
        buttonState={buttonState}
        onClick={handleClick}
        color="primary"
        idleText="Click Me"
        loadingText={
          <>
            <FontAwesomeIcon icon={faCircleNotch} spin /> Loading
          </>
        }
        successText={
          <>
            <FontAwesomeIcon icon={faThumbsUp} /> Success
          </>
        }
        errorText={
          <>
            <FontAwesomeIcon icon={faBomb} /> Error
          </>
        }
        type="button"
        className="custom-button"
        style={{
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
        outline={false}
        shadow={false}
        rounded={false}
        size="normal"
        block={false}
        messageDuration={2000}
        disabled={false}
        buttonRef={null}
        width={null}
        height={null}
        animation={true}
        aria-label="Action Button"
      />
    </div>
  );
};

export default ReactiveActionButton;
