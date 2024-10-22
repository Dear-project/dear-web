import CONFIG from "@/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
import requestInterceptor from "./requestHandler";
import ResponseHandler from "./ResposneHandler";
import Token from "../token/tokens";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "../../constants/token/token.constants";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: CONFIG.serverUrl,
  withCredentials: true, 
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
  
};

const dearAxios = axios.create(axiosRequestConfig);

dearAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

dearAxios.interceptors.response.use((res) => res, ResponseHandler);

export default dearAxios;

export const setAccessToken = (token: string) => {
  dearAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
