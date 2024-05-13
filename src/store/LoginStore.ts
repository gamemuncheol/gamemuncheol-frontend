import { create } from 'zustand';

interface LoginState {
  isLoggined: boolean;
  setLogin: (loggedInStatus: boolean) => void;
}

const LoginStore = create<LoginState>((set) => ({
  isLoggined: false,
  setLogin: (loggedInStatus) => set({ isLoggined: loggedInStatus }),
}));

export default LoginStore;
