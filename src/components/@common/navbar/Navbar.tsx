import React from 'react';
import Image from 'next/image';

import Separator from '@/components/@common/separator/Separator';
import { navGroups } from '@/components/@common/navbar/data/navGroups';

export default function Navbar() {
  return (
    <nav className="sticky left-0 ml-10 flex h-full flex-shrink-0 flex-grow-0 basis-10 flex-col justify-start">
      {/* TODO: 친구 목록 */}
      <ul className="caption02 mt-3 flex flex-col items-center justify-center space-y-3">
        <li>
          <p className="text-xs">친구</p>
        </li>
        <Separator className="w-6" />
      </ul>
      {navGroups.map((group, i, arr) => {
        return (
          <ul
            key={i}
            className="mt-3 flex flex-col items-center justify-center space-y-3"
          >
            {group.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex w-10 cursor-pointer flex-col items-center rounded-lg p-1 hover:bg-black100"
                >
                  <Image
                    style={{ width: 22, height: 22 }}
                    priority
                    src={item.src}
                    placeholder="empty"
                    alt="menu"
                  />
                  <p className="caption02 text-nowrap">{item.collapseText}</p>
                </li>
              );
            })}
            {arr.length - 1 !== i ? <Separator className="w-6" /> : ''}
          </ul>
        );
      })}
    </nav>
  );
}
