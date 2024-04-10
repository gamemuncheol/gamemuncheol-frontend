import Image from 'next/image';
import loginlogo from '@/assets/login/loginlogo.svg';
// import BackgroundVideo from '@/components/login/background';
export default function Login() {
  return (
    <>
      {/* <BackgroundVideo /> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          width={360}
          height={200}
          priority
          src={loginlogo}
          placeholder="empty"
          alt="logo"
        />
        <div>정치질과 입롤에 지칠 때는 112말고, 롤문철</div>
        <div>로그인 후 이용하실 수 있습니다.</div>
        <div>Apple로 계속하기</div>
        <div>Google로 계속하기</div>
      </div>
    </>
  );
}
