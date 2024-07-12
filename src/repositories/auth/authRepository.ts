import { LoginResponse } from "../../types/auth/auth.type";

export interface AuthRepository {
  login(loginData: Login): Promise<LoginResponse>;
  refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse>;
}

export interface Login {
  email: string;
  password: string;
}
export interface NewAccessTokenResponse {
  accessToken: string;
}
