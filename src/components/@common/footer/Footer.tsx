import React from 'react';
import { FooterProps } from '@/types/common-type';

export default function Footer({ use }: FooterProps) {
  const textColor = use === 'login' ? 'text-black500' : 'text-black';

  return (
    <footer>
      <ul
        className={`flex items-center justify-center gap-4 p-10 body04 ${textColor}`}
      >
        <li className="cursor-pointer">서비스 이용약관</li>

        <span>￨</span>

        <li className="cursor-pointer">개인정보처리방침</li>

        <span>￨</span>

        <li className="cursor-pointer">© LoLMunCheol.</li>
      </ul>
    </footer>
  );
}
