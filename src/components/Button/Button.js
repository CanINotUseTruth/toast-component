import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', type, ...delegated }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
