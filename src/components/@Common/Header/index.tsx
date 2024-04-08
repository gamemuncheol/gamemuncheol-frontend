import React from 'react';
import Image from 'next/image';

import logo from '@/assets/logo/Logo.webp';
import logoText from '@/assets/logo/GamemuncheolTextLogo.svg';

export default function Header() {
  return (
    <header className="h-[3.75rem]">
      <nav>
        <Image
          style={{ width: 40, height: 38 }}
          priority
          src={logo}
          width={40}
          height={38}
          placeholder="empty"
          alt="LOGO"
        />

        <Image
          style={{ width: 76, height: 38 }}
          priority
          src={logoText}
          width={76}
          height={38}
          placeholder="empty"
          alt="LogoText"
        />
      </nav>
    </header>
  );
}
