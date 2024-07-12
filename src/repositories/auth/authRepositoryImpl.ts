import axios from "axios";
import { AuthRepository, NewAccessTokenResponse } from "./authRepository";
import { LoginResponse } from "../../types/auth/auth.type";
import { Login } from "./authRepository";
import config from "../../config/config.json";


const axiosInstance = axios.create({
  baseURL: config.serverUrl,
  withCredentials: true, // 인증 정보 포함
  headers: {
    'Content-Type': 'application/json'
  }
});

class AuthRepositoryImpl implements AuthRepository {
  public async login(loginData: Login): Promise<LoginResponse> {
    const { data } = await axiosInstance.post('/auth', loginData);
    return data;
  }
  public async refreshAccessToken(refreshToken: { refreshToken: string }): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(`${config.serverUrl}/auth/refresh`, refreshToken);
    return data;
  }
}

export default new AuthRepositoryImpl();
