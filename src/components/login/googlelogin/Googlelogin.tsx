'use client';
import Image from 'next/image';
import googlelogo from '@/assets/login/google.svg';

export default function GoogleLogin() {
  return (
    <div>
      <div className="flex justify-center gap-2.5 items-center bg-white py-2.5 px-5  w-[358px] h-[50px] rounded-[54px]">
        <Image width={20} height={20} priority src={googlelogo} alt="google" />
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google?redirect_uri=https://localhost:3000/login&mode=login`}
          className="body02 text-fontColor02 cursor-pointer"
        >
          Google로 계속하기
        </a>
      </div>
    </div>
  );
}
