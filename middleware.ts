import { NextRequest, NextResponse } from 'next/server';
import {
  initAcceptLanguageHeaderDetector,
  initRequestCookiesDetector,
} from 'typesafe-i18n/detectors';
import { detectLocale, locales } from './src/i18n/i18n-util';

// Get the preferred locale. This is where we allow the serverside typesafe-i18n detectors to work.
function getLocale(request: NextRequest) {
  const requestCookiesDetector = initRequestCookiesDetector({
    cookies: request.cookies.toString(),
  });
  const acceptLanguageHeaderDetector =
    initAcceptLanguageHeaderDetector(request);
  return detectLocale(requestCookiesDetector, acceptLanguageHeaderDetector);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal, statically exported, and locale paths
    // This regex says: do NOT run if the path contains _next, do not run if the path contains . (this is to not run on things in the public directory), do not run if the path contains en
    // This should be updated with all locales as we add them
    '/((?!_next)(?=[^.]*$)(?!en)(?!pl).*)',
  ],
};
