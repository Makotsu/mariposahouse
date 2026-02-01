import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

// テスト用Basic認証設定
const AUTH_USER = 'admin';
const AUTH_PASSWORD = 'mariposa2026';

function basicAuth(request: NextRequest): NextResponse | null {
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);
      const [user, password] = decoded.split(':');

      if (user === AUTH_USER && password === AUTH_PASSWORD) {
        return null; // 認証成功
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export default function middleware(request: NextRequest) {
  const authResponse = basicAuth(request);
  if (authResponse) {
    return authResponse;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ja|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
