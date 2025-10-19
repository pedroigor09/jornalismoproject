'use client';

import styles from './Footer.module.css';

interface FooterProps {
  authorName?: string;
  authorUrl?: string;
}

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
