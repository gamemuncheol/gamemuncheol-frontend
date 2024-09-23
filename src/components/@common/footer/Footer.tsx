import React from 'react';
import { FooterProps } from '@/types/common-type';

export default function Footer({ use }: FooterProps) {
  const textColor = use === 'login' ? 'text-black500' : 'text-black';

  return (
    <footer>
      <ul
        className={`body04 flex items-center justify-center p-10 ${textColor}`}
      >
        <li className="cursor-pointer after:mx-6 after:content-['|']">
          서비스 이용약관
        </li>
        <li className="cursor-pointer after:mx-6 after:content-['|']">
          개인정보처리방침
        </li>
        <li className="cursor-pointer">© LoLMunCheol.</li>
      </ul>
    </footer>
  );
}
