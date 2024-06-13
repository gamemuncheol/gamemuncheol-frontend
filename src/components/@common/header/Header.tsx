import React, { useEffect } from 'react';
import Image from 'next/image';

import logo from '@/assets/logo/Logo.webp';
import menu from '@/assets/menu/Menu.svg';
import logoText from '@/assets/logo/GamemuncheolTextLogo.svg';
import useLoginStore from '@/store/useMemberStore';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

export default function Header() {
  const router = useRouter();
  const isLoggined = useLoginStore((state) => state.isLoggined);
  const setIsLoggined = useLoginStore((state) => state.setIsLoggined);
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

  useEffect(() => {
    if (cookies.refreshToken) {
      setIsLoggined(true);
    }
  }, []);

  const clickLogin = () => {
    router.push('/login');
  };

  const clickLogout = () => {
    setIsLoggined(false);
    removeCookie('refreshToken');
    localStorage.removeItem('accessToken');
  };
  return (
    <header className="z-5 sticky top-0 flex h-[3.75rem] w-full items-center justify-between bg-white">
      <div className="ml-10 flex items-center gap-5">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-black100">
          <Image
            style={{ width: 16, height: 12 }}
            width={16}
            height={12}
            priority
            src={menu}
            placeholder="empty"
            alt="menu"
          />
        </div>

        <div className="flex gap-1.5">
          <Image
            priority
            src={logo}
            width={40}
            height={38}
            placeholder="empty"
            alt="롤문철"
          />

          <Image
            style={{ width: 76, height: 38 }}
            priority
            src={logoText}
            width={76}
            height={38}
            placeholder="empty"
            alt="롤문철 Text"
          />
        </div>
      </div>

      <div className="flex">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border"
          placeholder="닉네임, 게임영상 검색"
          required
        />
      </div>

      {isLoggined ? (
        <div className="rounded-[24px] border-[1px] border-mainPurple px-[14px] py-[6px]">
          <div
            className="body05R cursor-pointer text-mainPurple"
            onClick={clickLogout}
          >
            로그아웃
          </div>
        </div>
      ) : (
        <div className="rounded-[24px] border-[1px] border-mainPurple px-[14px] py-[6px]">
          <div
            className="body05R cursor-pointer text-mainPurple"
            onClick={clickLogin}
          >
            로그인
          </div>
        </div>
      )}
    </header>
  );
}
