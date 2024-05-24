'use client';

import Image from 'next/image';
import loginlogo from '@/assets/login/loginlogo.svg';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useLoginStore from '@/store/useMemberStore';
import { useMemberQueries } from '@/services/queries/member';
import { GoogleLogin, AppleLogin, UserAgree, Nickname } from '@/components/index';

export default function LoginView() {
  const router = useRouter();
  const params = useSearchParams();

  const accessToken = params.get('accessToken') || '';
  const refreshToken = params.get('refreshToken');

  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);
  const setIsLoggined = useLoginStore((state) => state.setIsLoggined);

  // modal
  const [showUserAgree, setShowUserAgree] = useState(false);
  const [showNickname, setShowNickname] = useState(false);

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggined(true);
      router.push('/login');
    }
  }, [params]);

  useEffect(() => {
    const token = localStorage.getItem('refreshToken');
    if (token) {
      setIsLoggined(true);
      setShowUserAgree(true);
    }
  }, []);

  const handleAgreeConfirm = () => {
    setShowNickname(true);
    setShowUserAgree(false);
  };

  // is-agreed api
  const { isAgreed, isAgreedLoading } = useMemberQueries();

  useEffect(() => {
    if (isAgreed) {
      router.push('/main');
    }
  }, [isAgreed]);

  if (isAgreedLoading) {
    return <div className="body01R text-white">로딩 중.. 잠시만 기다려주세요</div>;
  }

  return (
    <>
      {!isLoggined && (
        <div className="flex flex-col items-center justify-center gap-6">
          <Image width={360} height={200} priority src={loginlogo} placeholder="empty" alt="logo" />
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex flex-col items-center">
              <div className="title01M text-white">정치질과 입롤에 지칠 때는</div>
              <div className="title01M text-white">112말고, 롤문철</div>
            </div>
            <div className="body02R text-white">로그인 후 이용하실 수 있습니다.</div>
          </div>

          <div className="flex flex-col gap-4">
            <AppleLogin />
            <GoogleLogin />
          </div>
        </div>
      )}
      {showUserAgree && <UserAgree handleAllAgreeConfirm={handleAgreeConfirm} />}
      {showNickname && <Nickname />}
    </>
  );
}
