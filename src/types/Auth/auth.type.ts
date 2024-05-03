export interface LoginParam {
  userId: string;
  password: string;
}

export interface AuthCodeParams {
  authCode: string;
}

export interface PasswordCheck {
  checkPw: string;
}

export interface SignupParams {
  email: string;
  pw: string;
  name: string;
  birthday: string;
  type: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
