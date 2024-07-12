import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};

const protectedRoutes = ['/']; // 로그인 정보가 있어야만 접근할 수 있는 페이지
const publicRoutes = ['/login']; // 로그인 하지 않을 경우 접근할 수 있는 페이지

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access-token');
  const currentPath = request.nextUrl.pathname;

  // 보호된 경로에 접근하려고 하지만 토큰이 없는 경우
  if (!token && protectedRoutes.some((route) => currentPath.startsWith(route))) {   
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && publicRoutes.some((route) => currentPath.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 그 외의 경우
  return NextResponse.next();
}
