import { LoginState, TempUserState } from '@/types/member-type';
import { create } from 'zustand';

export const useLoginStore = create<LoginState>((set) => ({
  isLoggined: false,
  setIsLoggined: (loggedInStatus) => set({ isLoggined: loggedInStatus }),
}));

export const useTempUserStore = create<TempUserState>((set) => ({
  userkey: '',
  setUserkey: (key) => set({ userkey: key }),
}));
