'use client';

import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'O baiano tem o molho!', link: '#o-baiano-tem-o-molho' },
    { label: 'Pegue a visão', link: '#pegue-a-visao' },
    { label: 'Oxe, Que arte é essa?', link: '#oxe-que-arte-e-essa' },
    { label: 'Baiano não nasce, estreia!', link: '#baiano-nao-nasce-estreia' },
    { label: 'Naquela pegada!', link: '#naquela-pegada' },
    { label: 'Na cocó', link: '#' }
  ];

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, link: string) => {
    // Scroll suave para a seção
    if (link && link.startsWith('#')) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item" onClick={(e) => handleClick(e, item.link)}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
