import {
  ActivePhotoKey,
  LinkIds,
  MenuLink,
  MenuListElements,
} from '../links.types';

export const getActiveMenuData = (
  elements: MenuListElements,
  key: ActivePhotoKey,
): MenuLink => {
  const { MENU_LINK_CONFIGURATOR, MENU_LINK_FALLBACK, MENU_LINK_JOIN_US } =
    elements;

  if (key === LinkIds.CONFIGURATOR) {
    return MENU_LINK_CONFIGURATOR;
  }
  if (key === LinkIds.JOIN_US) {
    return MENU_LINK_JOIN_US;
  }

  return MENU_LINK_FALLBACK;
};
