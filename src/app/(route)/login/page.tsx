import Footer from '@/components/@common/footer/Footer';
import LoginView from '@/components/login/loginview/LoginView';
// import Video from 'next-video';
// import bgvideo from '/videos/loginbg.mp4?thumbnailTime=0';

export default function Login() {
  return (
    <div className="h-screen w-screen bg-cover bg-login-bg flex flex-col">
      {/* <Video src={bgvideo} /> */}
      <div className="flex flex-1 flex-col justify-center items-center">
        <LoginView />
      </div>
      <div className="sticky bottom-0">
        <Footer use="login" />
      </div>
    </div>
  );
}
