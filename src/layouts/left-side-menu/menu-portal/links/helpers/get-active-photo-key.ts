import { ActivePhotoKey, LinkIds } from '../links.types';

export const getActivePhotoKey = (pathname: string): ActivePhotoKey => {
  if (pathname.includes(LinkIds.CONFIGURATOR)) {
    return LinkIds.CONFIGURATOR;
  }
  if (pathname.includes(LinkIds.JOIN_US)) {
    return LinkIds.JOIN_US;
  }

  return null;
};
