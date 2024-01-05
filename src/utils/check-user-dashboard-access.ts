import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { PROTECTED_ROUTES, getLocale } from '@utils';

export const checkUserDashboardAccess = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  console.log('pathname', pathname);
  const locale = getLocale(request);
  const token = await getToken({
    secret: process.env.NEXTAUTH_SECRET,
    req: request,
  });

  if (!token) {
    const url = new URL(`/${locale}/login`, request.url);
    return NextResponse.redirect(url);
  }

  if (pathname === '/auth') {
    const url = new URL(PROTECTED_ROUTES.DASHBOARD(), request.url);
    return NextResponse.redirect(url);
  }
};
