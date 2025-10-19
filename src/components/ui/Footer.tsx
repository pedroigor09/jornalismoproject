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
    </div>
  );
};
