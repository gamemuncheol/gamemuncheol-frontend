import React, { useState } from 'react';

import Image from 'next/image';
import { navItem } from './data/navList';
import Register from '@/components/main/register/Register';

export default function Navbar() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <nav className="sticky left-0 flex h-screen w-[6.5rem] flex-col justify-between">
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
        {/* 임시 등록 버튼 */}
        <li
          onClick={() => {
            setIsRegisterModalOpen(true);
          }}
        >
          등록
        </li>
        {isRegisterModalOpen && <Register closeModal={closeRegisterModal} />}
      </ul>
    </nav>
  );
}
