import { NextRequest } from 'next/server';
import {
  initAcceptLanguageHeaderDetector,
  initRequestCookiesDetector,
} from 'typesafe-i18n/detectors';
import { Locales, detectLocale } from '@i18n';

export const getLocale = (request: NextRequest): Locales => {
  const requestCookiesDetector = initRequestCookiesDetector({
    cookies: request.cookies.toString(),
  });
  const acceptLanguageHeaderDetector =
    initAcceptLanguageHeaderDetector(request);
  return detectLocale(requestCookiesDetector, acceptLanguageHeaderDetector);
};
