import cookies from "@/utils/cookie/cookie.util";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/token/token.constants";

class Token {
  public getToken(key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY): string | undefined {
    return cookies.getCookie(key);
  }
  public setToken(key: typeof ACCESS_TOKEN_KEY | typeof REFRESH_TOKEN_KEY, token: string): void {
    cookies.setCookie(key, token);
  }
  public clearToken() {
    cookies.removeCookie(ACCESS_TOKEN_KEY);
    cookies.removeCookie(REFRESH_TOKEN_KEY);
  }
}

const token = new Token();
export default token;
