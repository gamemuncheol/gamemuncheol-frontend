'use client';

import Image from 'next/image';
import loginlogo from '@/assets/login/loginlogo.svg';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, Suspense } from 'react';

import { useLoginStore, useTempUserStore } from '@/store/useMemberStore';
import { GoogleLogin, AppleLogin } from '@/components/index';
import { useCookies } from 'react-cookie';

export default function LoginView() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const router = useRouter();
  const params = useSearchParams();

  const accessToken = params.get('accessToken') || '';
  const refreshToken = params.get('refreshToken');
  const tempUserKey = params.get('temporaryUserKey');
  const [_cookies, setCookie] = useCookies(['refreshToken']);

  //로그인 성공 여부
  const setIsLoggined = useLoginStore((state) => state.setIsLoggined);

  const setUserkey = useTempUserStore((state) => state.setUserkey);
  // 로그인 성공 시
  useEffect(() => {
    if (accessToken && refreshToken) {
      setCookie('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      setIsLoggined(true);
      router.push('/main');
    }
    if (tempUserKey) {
      setUserkey(tempUserKey);
      router.push('/signup');
    }
  }, [params]);

  return (
    <div className="sticky flex flex-col items-center justify-center gap-6">
      <Image
        width={360}
        height={200}
        priority
        src={loginlogo}
        placeholder="empty"
        alt="logo"
      />
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex flex-col items-center">
          <div className="title01M text-white">정치질과 입롤에 지칠 때는</div>
          <div className="title01M text-white">112말고, 롤문철</div>
        </div>
        <div className="body02R text-white">
          로그인 후 이용하실 수 있습니다.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <AppleLogin />
        <GoogleLogin />
      </div>
    </div>
  );
}
