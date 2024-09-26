import { InternalAxiosRequestConfig } from "axios";
import Token from "../token/tokens";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constants";

const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (typeof window !== "undefined") {
    const accessToken = Token.getToken(ACCESS_TOKEN_KEY);
    const refreshToken = Token.getToken(REFRESH_TOKEN_KEY);

    if (!accessToken || !refreshToken) {
      console.error("Access token or refresh token not found.");
      window.location.href = "/login";
    } else {
      config.headers[REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
    }
  }

  return config;
};

export default requestInterceptor;