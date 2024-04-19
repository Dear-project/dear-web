export interface LoginParam {
  userId: string;
  password: string;
}

export interface SignupEmailProps {
  email: string;
  verifyNum: string;
}

export interface SignupPwProps {
  pw: string;
  checkPw: string;
}

export interface SignupInfoProps {
  name: string;
  birthday: string;
  type: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
