import React from 'react';

import Image from 'next/image';
import { navItem } from './data/navList';

export default function Navbar() {
  return (
    <nav className="sticky left-0 ml-10 flex h-screen flex-shrink-0 flex-grow-0 basis-10 flex-col justify-between">
      <ul className="flex flex-col items-center justify-center space-y-5">
        {/* TODO: 친구 목록 */}
        <li>
          <p className="text-xs">친구</p>
        </li>
        {navItem.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center">
              <Image
                style={{ width: 22, height: 22 }}
                priority
                src={item.src}
                placeholder="empty"
                alt="menu"
              />
              <p className="text-xs">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// 791
// 1312
