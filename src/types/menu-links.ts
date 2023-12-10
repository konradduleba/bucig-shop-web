import { LocalizedString } from 'typesafe-i18n';
import { LinkProps } from 'next/link';

export enum LinkIds {
  CONFIGURATOR = 'configurator',
  JOIN_US = 'join-us',
  FALLBACK = 'fallback',
}

export interface MenuLink {
  id: LinkIds;
  href: LinkProps['href'];
  imageRef: string;
  label: LocalizedString;
}

export interface MenuListElements {
  MENU_LINK_CONFIGURATOR: MenuLink;
  MENU_LINK_JOIN_US: MenuLink;
  MENU_LINK_FALLBACK: MenuLink;
}
export interface GetMenuListHook {
  elements: MenuListElements;
  menuList: MenuLink[];
  menuListWithFallback: MenuLink[];
}
