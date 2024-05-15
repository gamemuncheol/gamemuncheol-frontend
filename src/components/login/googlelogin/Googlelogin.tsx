'use client';
import Image from 'next/image';
import googlelogo from '@/assets/login/google.svg';
import { useSearchParams } from 'next/navigation';
import useLoginStore from '@/store/useLoginStore';

export default function GoogleLogin() {
  const params = useSearchParams();
  const accessToken = params.get('accessToken');

  //로그인 성공 여부
  const isLoggined = useLoginStore((state) => state.isLoggined);
  const setLogin = useLoginStore((state) => state.setLogin);

  // 로그아웃은 실제 /login 페이지에는 없지만, 로그인 구현을 위해 임시 생성
  const handleLogout = () => {
    setLogin(false);

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
