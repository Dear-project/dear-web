import { cookies } from "next/headers";

class Cookie {
  public getCookie(key: string): string | undefined {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get(key)?.value;
    return cookieValue;
  }

  public setCookie(key: string, value: string, options?: { expires?: Date | number; path?: string }): void {
    const cookieStore = cookies();
    cookieStore.set(key, value, options);
  }

  public removeCookie(key: string): void {
    const cookieStore = cookies();
    cookieStore.delete(key);
  }
}

export default new Cookie();
