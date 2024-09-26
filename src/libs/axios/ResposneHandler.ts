import { AxiosError } from "axios";
import Token from "../token/tokens";
import AuthRepositoryImpl from "../../repositories/auth/authRepositoryImpl";
import dearAxios from "./customAxios";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constants";


let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const ResponseHandler = async (error: AxiosError) => {
  
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

  const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
  const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);

  if (
    status === 401 &&
    usingAccessToken!== undefined &&
    usingRefreshToken!== undefined &&
    !isRefreshing
  ) {
    isRefreshing = true;

    try {
   
      const { accessToken: newAccessToken } =
        await AuthRepositoryImpl.refreshAccessToken({
          refreshToken: usingRefreshToken,
        });
      dearAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${newAccessToken}`;
      
      Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

      isRefreshing = false;
      onTokenRefreshed(newAccessToken);
      
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(dearAxios(originalRequest!));
        });
      });
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      Token.clearToken();
      window.alert("세션이 만료되었습니다.");
      window.location.href = "/login";
    }
  }
  }

  return Promise.reject(error);
};

export default ResponseHandler;