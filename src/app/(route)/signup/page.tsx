import Footer from '@/components/@common/footer/Footer';
import SignupView from '@/components/signup/signupview/SignupView';

export default function Signup() {
  return (
    <div className="h-screen w-screen bg-cover bg-login-bg flex flex-col">
      {/* <Video src={bgvideo} /> */}
      <div className="flex flex-1 flex-col justify-center items-center">
        <SignupView />
      </div>
      <div className="sticky bottom-0">
        <Footer use="login" />
      </div>
    </div>
  );
}
