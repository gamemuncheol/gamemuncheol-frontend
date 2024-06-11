import React,{useState} from 'react';

import Image from 'next/image';
import { navItem } from './data/navList';

export default function Navbar() {
  const [registerModal, setRegisterModal] = useState(false)
  return (
    <nav className="sticky left-0 h-screen w-[6.5rem] flex flex-col justify-between">
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
        <li onClick={()=>{setRegisterModal(true)}}>등록</li> 
        
      </ul>
    </nav>
  );
}
