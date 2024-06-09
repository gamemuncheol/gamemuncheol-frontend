import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};
const protectedRoutes = ['']; // 로그인 정보가 있어야 접근할 수 있는 페이지
const publicRoutes = ['/login']; // 로그인 하지 않을 경우 접근할 수 있는 페이지

export function middleware(request: NextRequest) {
  const token = request.cookies.get('refreshToken');
  const currentPath = request.nextUrl.pathname;
  console.log('middleware token : ', token);

  if (!token && protectedRoutes.includes(currentPath)) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (token && publicRoutes.includes(currentPath)) {
    const url = request.nextUrl.clone();
    url.pathname = '/main';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
