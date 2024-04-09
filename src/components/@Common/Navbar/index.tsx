import React from 'react';

import Image from 'next/image';
import { navItem } from './data/navList';

export default function Navbar() {
  return (
    <nav className="h-screen w-[6.5rem] flex flex-col justify-between ">
      <ul className="flex flex-col items-center justify-center">
        {navItem.map((item) => {
          return (
            <li key={item.id}>
              <Image
                style={{ width: 22, height: 22 }}
                priority
                src={item.src}
                placeholder="empty"
                alt="menu"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
