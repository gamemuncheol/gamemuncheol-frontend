'use client';
import Image from 'next/image';
import googlelogo from '@/assets/login/google.svg';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import GoogleLoginAPI from '@/services/login/GoogleLoginAPI';

export default function GoogleLogin() {
  const googleLogin = async () => {
    const data = await GoogleLoginAPI();
    console.log(data);
  };

  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
    if (session) {
      googleLogin();
    }
  }, [session]);
  return (
    <div>
      {session ? (
        <div className="flex justify-center gap-2.5 items-center bg-white py-2.5 px-5  w-[358px] h-[50px] rounded-[54px]">
          <div onClick={() => signOut()} className="body02 text-fontColor02">
            로그아웃
          </div>
        </div>
      ) : (
        //test
        <div className="flex justify-center gap-2.5 items-center bg-white py-2.5 px-5  w-[358px] h-[50px] rounded-[54px]">
          <Image
            width={20}
            height={20}
            priority
            src={googlelogo}
            placeholder="empty"
            alt="google"
          />
          <div onClick={() => signIn()} className="body02 text-fontColor02">
            Google로 계속하기
          </div>
        </div>
      )}
    </div>
  );
}
