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
    'Home',
    'O baiano tem o molho!',
    'Pegue a visão',
    'Baiano não nasce, estreia!',
    'Naquela pegada!',
    'Na cocó'
  ];

  const baianoEmojis = ['🌴', '☀️', '🥥', '🌊', '🎉', '🎊', '💃', '🕺', '🔥', '⭐', '✨', '🎭', '🎪', '🎨', '🍹', '🏖️'];

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
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
  };

  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item" onClick={handleClick}>
              {item}
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
