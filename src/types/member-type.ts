export interface LoginState {
  isLoggined: boolean;
  setIsLoggined: (loggedInStatus: boolean) => void;
}

export interface TempUserState {
  userkey: string;
  setUserkey: (key: string) => void;
}

export type AgreementState = {
  ageCheck: boolean;
  serviceCheck: boolean;
  privateInfoCheck: boolean;
};

export interface UserInfoType {
  name: string;
  nickname: string;
  email: string;
  picture: string;
  privacyAgreed: boolean;
  score: number;
}
