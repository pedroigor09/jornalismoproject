'use client';

import React, { useState } from 'react';
import './Navbar.css';

interface Emoji {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

export const Navbar = () => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const menuItems = [
    { label: 'Home', link: '#' },
    { label: 'O baiano tem o molho!', link: '#o-baiano-tem-o-molho' },
    { label: 'Pegue a visão', link: '#pegue-a-visao' },
    { label: 'Oxe, Que arte é essa?', link: '#oxe-que-arte-e-essa' },
    { label: 'Baiano não nasce, estreia!', link: '#baiano-nao-nasce-estreia' },
    { label: 'Naquela pegada!', link: '#naquela-pegada' },
    { label: 'Na cocó', link: '#' }
  ];

  const baianoEmojis = ['🌴', '☀️', '🥥', '🌊', '🎉', '🎊', '💃', '🕺', '🔥', '⭐', '✨', '🎭', '🎪', '🎨', '🍹', '🏖️'];

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, link: string) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const numberOfEmojis = 8;
    const newEmojis: Emoji[] = [];

    for (let i = 0; i < numberOfEmojis; i++) {
      const randomEmoji = baianoEmojis[Math.floor(Math.random() * baianoEmojis.length)];
      newEmojis.push({
        id: Date.now() + i,
        emoji: randomEmoji,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setEmojis([...emojis, ...newEmojis]);

    // Remove emojis após a animação
    setTimeout(() => {
      setEmojis(prev => prev.filter(e => !newEmojis.includes(e)));
    }, 1000);

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
    <>
      <nav className="navbar-container">
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item" onClick={(e) => handleClick(e, item.link)}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Emojis explodindo */}
      <div className="emoji-explosion-container">
        {emojis.map((emoji) => (
          <div
            key={emoji.id}
            className="emoji-particle"
            style={{
              left: `${emoji.x}px`,
              top: `${emoji.y}px`,
            }}
          >
            {emoji.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
