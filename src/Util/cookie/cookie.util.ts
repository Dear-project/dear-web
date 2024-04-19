import { getCookie, setCookie, deleteCookie } from "cookies-next";

class Cookie {
  public getCookie(key: string): string | undefined {
    return getCookie(key);
  }

  public setCookie(key: string, value: string, options?: { [key: string]: any }): void {
    setCookie(key, value, options);
  }

  public removeCookie(key: string): void {
    deleteCookie(key);
  }
}

export default new Cookie();
