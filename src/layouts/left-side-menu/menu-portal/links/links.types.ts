import { LinkProps } from 'next/link';
import { LocalizedString } from 'typesafe-i18n';

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

export type ActivePhotoKey = LinkIds | null;

export type ActivePhoto = Pick<MenuLink, 'imageRef' | 'label' | 'id'>;

export interface ActivePhotoHook {
  activePhoto: ActivePhoto;
  onUpdateActivePhoto: (key: LinkIds) => void;
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
