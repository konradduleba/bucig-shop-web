import { ActivePathKey, LinkIds } from '@types';

export const getActivePathKey = (pathname: string): ActivePathKey => {
  if (pathname.includes(LinkIds.CONFIGURATOR)) {
    return LinkIds.CONFIGURATOR;
  }
  if (pathname.includes(LinkIds.JOIN_US)) {
    return LinkIds.JOIN_US;
  }

  return null;
};
