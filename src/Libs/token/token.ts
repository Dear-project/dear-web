import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/Constants/token/token.constants";
import cookieUtil from "src/Util/cookie/cookie.util";

class Token {
  public getToken(key: string): string | undefined {
    return cookieUtil.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookieUtil.setCookie(key, token);
  }

  public clearToken() {
    cookieUtil.removeCookie(ACCESS_TOKEN_KEY);
    cookieUtil.removeCookie(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
