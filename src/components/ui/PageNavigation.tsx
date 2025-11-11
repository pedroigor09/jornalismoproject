'use client';

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
      <a href={backHref} className="nav-button nav-button-back">
        {backLabel}
      </a>
      
      <a href={nextHref} className="nav-button nav-button-next">
        {nextLabel}
      </a>
    </div>
  );
};
