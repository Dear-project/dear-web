import axios, { AxiosRequestConfig } from "axios";
import config from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "../token/token";
import ResponseHandler from "./ResposneHandler";
import requestHandler from "./requestHandler";
import Token from "src/Lib/token/token";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = Token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const dearV1Axios = createAxiosInstance({
  baseURL: config.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const alimoV1AxiosSetAccessToken = (newToken: string) => {
  dearV1Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

dearV1Axios.interceptors.request.use(requestHandler as any, (response) => response);
dearV1Axios.interceptors.response.use((response) => response, ResponseHandler);
