import {
  MENU_LINK_CONFIGURATOR,
  MENU_LINK_FALLBACK,
  MENU_LINK_JOIN_US,
} from '../links.consts';
import { ActivePhotoKey, LinkIds, MenuLink } from '../links.types';

export const getActiveMenuData = (key: ActivePhotoKey): MenuLink => {
  if (key === LinkIds.CONFIGURATOR) {
    return MENU_LINK_CONFIGURATOR;
  }
  if (key === LinkIds.JOIN_US) {
    return MENU_LINK_JOIN_US;
  }

  return MENU_LINK_FALLBACK;
};
