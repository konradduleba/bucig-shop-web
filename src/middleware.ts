import { NextRequest } from 'next/server';

import { locales } from '@i18n';

import { checkUserDashboardAccess, redirectOnMissingLocale } from '@utils';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isUserDashboardPathname = pathname.startsWith('/auth');

  if (isUserDashboardPathname) {
    return checkUserDashboardAccess(request);
  }

  const isAPIPathname = pathname.startsWith('/api');

  const isPathnameMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (!isAPIPathname && isPathnameMissingLocale) {
    return redirectOnMissingLocale(request);
  }
}

export const config = {
  matcher: [
    // Skip all internal, statically exported, and locale paths
    // This regex says: do NOT run if the path contains _next, do not run if the path contains . (this is to not run on things in the public directory), do not run if the path contains en
    // This should be updated with all locales as we add them
    '/((?!_next)(?=[^.]*$)(?!en/)(?!pl/).*)',
    // '/auth/:path*',
  ],
};
