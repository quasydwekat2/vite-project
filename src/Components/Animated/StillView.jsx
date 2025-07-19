import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Styles/StillView.module.less';
import classNames from 'classnames';

const StillView = ({ children, to = '/', variant = 1, className = '' }) => {
  const themeClass = styles[`button${variant}`];

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.button, themeClass, className, {
          [styles.active]: isActive,
        })
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </NavLink>
  );
};

export default StillView;
