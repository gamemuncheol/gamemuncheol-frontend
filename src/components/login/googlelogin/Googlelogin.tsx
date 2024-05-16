'use client';
import Image from 'next/image';
import googlelogo from '@/assets/login/google.svg';
import { useSearchParams } from 'next/navigation';
import useLoginStore from '@/store/useLoginStore';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GoogleLogin() {
  const router = useRouter();
  const params = useSearchParams();

  const accessToken = params.get('accessToken') || '';
  const refreshToken = params.get('refreshToken');

  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);
  const setIsLoggined = useLoginStore((state) => state.setIsLoggined);

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggined(true);
      router.push('/login');
    }
  }, [params]);

  // 로그아웃은 실제 /login 페이지에는 없지만, 로그인 구현을 위해 임시 생성
  const handleLogout = () => {
    setIsLoggined(false);

    // todo : 로그아웃 처리 로직 구현하기
  };

  return (
    <div>
      {isLoggined ? (
        <div className="flex justify-center gap-2.5 items-center bg-white py-2.5 px-5  w-[358px] h-[50px] rounded-[54px]">
          <div
            onClick={() => handleLogout()}
            className="body02 text-fontColor02"
          >
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
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google?redirect_uri=https://localhost:3000/login&mode=login`}
            className="body02 text-fontColor02 cursor-pointer"
          >
            Google로 계속하기
          </a>
        </div>
      )}
    </div>
  );
}
