import Footer from '@/components/@common/footer/Footer';
import Background from '@/components/login/background/Background';
import LoginView from '@/components/login/loginview/LoginView';

export default function Login() {
  return (
    <div>
      <Background></Background>
      <div className="flex flex-1 flex-col items-center justify-center">
        <LoginView />
      </div>
      <div className="sticky bottom-0">
        <Footer use="login" />
      </div>
    </div>
  );
}
