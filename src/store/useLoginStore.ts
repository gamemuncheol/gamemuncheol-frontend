import { LoginState } from '@/types/login-type';
import { create } from 'zustand';

const useLoginStore = create<LoginState>((set) => ({
  isLoggined: false,
  setLogin: (loggedInStatus) => set({ isLoggined: loggedInStatus }),
}));

export default useLoginStore;
