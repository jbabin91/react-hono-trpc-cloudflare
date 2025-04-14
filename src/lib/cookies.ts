import Cookies from 'js-cookie';

export function setCookie(name: string, value: string, maxAge?: number): void {
  Cookies.set(name, value, {
    expires: maxAge ? maxAge / (60 * 60 * 24) : undefined,
    path: '/',
  });
}

export function getCookie(name: string): string | null {
  return Cookies.get(name) ?? null;
}
