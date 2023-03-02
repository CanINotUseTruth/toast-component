import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ objKey, variant, children }) {
  const Tag = ICONS_BY_VARIANT[variant];
  const { handleRemoveToast } = React.useContext(ToastContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleRemoveToast(objKey);
      }}
    >
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Tag size={24} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{variant}</VisuallyHidden>
          {children}
        </p>
        <button
          type="submit"
          className={styles.closeButton}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <X size={24} />
        </button>
      </div>
    </form>
  );
}

export default Toast;
