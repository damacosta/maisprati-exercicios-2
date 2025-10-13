import React from 'react';
import styles from './Button.module.css';

function Button({
  children,
  variant = 'solid',
  disabled = false,
  loading = false,
  type = 'button',
  ...props
}) {
  const classNames = [
    styles.button,
    styles[variant],
    loading && styles.loading,
    disabled && styles.disabled
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.skeleton} aria-hidden="true"></span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
