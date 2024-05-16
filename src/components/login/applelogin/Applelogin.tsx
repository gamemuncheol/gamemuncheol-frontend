'use client';
import Image from 'next/image';
import applelogo from '@/assets/login/apple.svg';

export default function AppleLogin() {
  return (
    <div>
      <div className="flex justify-center gap-2.5 items-center bg-black800 py-2.5 px-5  w-[358px] h-[50px] rounded-[54px]">
        <Image
          width={20}
          height={20}
          priority
          src={applelogo}
          placeholder="empty"
          alt="apple"
        />
        <div className="body02 text-white cursor-pointer">Apple로 계속하기</div>
      </div>
    </div>
  );
}
