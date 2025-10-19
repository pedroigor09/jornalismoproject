'use client';

import styles from './Footer.module.css';

interface FooterProps {
  authorName?: string;
  authorUrl?: string;
}

/**
 * Footer com créditos do autor
 * Exibe link com animação de hover
 */
export const Footer = ({ 
  authorName = 'Jornalismo UniJorge',
  authorUrl = '#'
}: FooterProps) => {
  return (
    <div className={styles.author}>
      Desenvolvido com 💜 por{' '}
      <a 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.authorLink} 
        href={authorUrl}
      >
        {authorName}
      </a>
    </div>
  );
};
