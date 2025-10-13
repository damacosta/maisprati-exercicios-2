import React from 'react';
import styles from './Skeleton.module.css';

export default function Skeleton({ width = '100%', height = '1em' }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height }}
      aria-busy="true"
      aria-label="Carregando"
    />
  );
}
