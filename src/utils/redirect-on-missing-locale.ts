import { NextRequest, NextResponse } from 'next/server';

import { getLocale } from '@utils';

export const redirectOnMissingLocale = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const locale = getLocale(request);

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
};
