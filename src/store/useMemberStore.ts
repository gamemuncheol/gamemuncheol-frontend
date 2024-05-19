import { LoginState } from '@/types/member-type';
import { create } from 'zustand';

const useLoginStore = create<LoginState>((set) => ({
  isLoggined: false,
  setIsLoggined: (loggedInStatus) => set({ isLoggined: loggedInStatus }),
}));

export default useLoginStore;
