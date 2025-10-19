'use client';

import styles from './ProgressBar.module.css';

/**
 * Barra de progresso animada que acompanha o scroll da página
 * Usa CSS animation com scroll-timeline
 */
export const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarText} data-text="LEIA MAIS">
        LEIA MAIS
      </div>
    </div>
  );
};
