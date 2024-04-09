import React from 'react';
import Image from 'next/image';

import logo from '@/assets/logo/Logo.webp';
import menu from '@/assets/menu/Menu.svg';
import logoText from '@/assets/logo/GamemuncheolTextLogo.svg';

export default function Header() {
  return (
    <header className="w-full h-[3.75rem] flex justify-between items-center ">
      <div className="flex items-center ml-10 gap-5">
        <div className="flex items-center justify-center w-10 h-10 cursor-pointer hover:bg-black100 rounded-lg">
          <Image
            style={{ width: 16, height: 12 }}
            width={16}
            height={12}
            priority
            src={menu}
            placeholder="empty"
            alt="menu"
          />
        </div>

        <div className="flex gap-1.5">
          <Image
            priority
            src={logo}
            width={40}
            height={38}
            placeholder="empty"
            alt="롤문철"
          />

          <Image
            style={{ width: 76, height: 38 }}
            priority
            src={logoText}
            width={76}
            height={38}
            placeholder="empty"
            alt="롤문철 Text"
          />
        </div>
      </div>

      <div className="flex">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border"
          placeholder="Search branch name..."
          required
        />
      </div>

      <div className="flex mr-10 ">
        <Image
          style={{ width: 40, height: 38 }}
          priority
          src={logo}
          width={40}
          height={38}
          placeholder="empty"
          alt="롤문철"
        />
      </div>
    </header>
  );
}
