export interface LoginState {
  isLoggined: boolean;
  setIsLoggined: (loggedInStatus: boolean) => void;
}

export interface IsAgreeType {
  isAgreed: boolean;
}

export type AgreementState = {
  ageCheck: boolean;
  serviceCheck: boolean;
  privateInfoCheck: boolean;
  advertiseCheck: boolean;
};
