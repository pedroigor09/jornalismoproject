'use client';

import styles from './ProgressBar.module.css';


export const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarText} data-text="LEIA MAIS">
        LEIA MAIS
      </div>
    </div>
  );
};
