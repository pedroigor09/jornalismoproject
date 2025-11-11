'use client';

import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'O baiano tem o molho!', link: '/' },
    { label: 'Pegue a visão', link: '/pegue-a-visao' },
    { label: 'Oxe, Que arte é essa?', link: '/oxe-que-arte' },
    { label: 'Baiano não nasce, estreia!', link: '/baiano-nao-nasce-estreia' },
    { label: 'Naquela pegada!', link: '/naquela-pegada' },
    { label: 'Na cocó', link: '/na-coco' }
  ];

  return (
    <nav className="navbar-container">
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
