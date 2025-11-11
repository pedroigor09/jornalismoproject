'use client';

import Link from 'next/link';
import './PageNavigation.css';

interface PageNavigationProps {
  backLabel?: string;
  backHref: string;
  nextLabel: string;
  nextHref: string;
}

export const PageNavigation = ({ 
  backLabel = 'VOLTAR', 
  backHref, 
  nextLabel, 
  nextHref 
}: PageNavigationProps) => {
  return (
    <div className="page-navigation-container">
      <Link href={backHref} className="nav-button nav-button-back">
        {backLabel}
      </Link>
      
      <Link href={nextHref} className="nav-button nav-button-next">
        {nextLabel}
      </Link>
    </div>
  );
};
