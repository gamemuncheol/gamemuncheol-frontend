'use client';
import Image from 'next/image';
import googlelogo from '@/assets/login/google.svg';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import GoogleLoginAPI from '@/services/login/GoogleLoginAPI';
import { useSearchParams, usePathname } from 'next/navigation';
import useLoginStore from '@/store/useLoginStore';

export default function GoogleLogin() {
  const params = useSearchParams();
  const accessToken = params.get('accessToken');

  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);
  const setLogin = useLoginStore((state) => state.setLogin);

  // const { data: session } = useSession();
  const { data: session, status } = useSession();

  const useGoogleLogin = async () => {
    const data = await GoogleLoginAPI();
    console.log('google login api 호출 완료', data);
  };
  useEffect(() => {
    console.log(session);
    if (session) {
      useGoogleLogin();
    }
  }, [session]);

  // useEffect(() => {
  //   if (status === 'authenticated' && !isLoggined) {
  //     setLogin(true);
  //     //
  //   } else if (status === 'unauthenticated') {
  //     setLogin(false);
  //   }
  // }, [status, isLoggined, setLogin]);

  return (
    <div>
      {status == 'authenticated' ? (
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
