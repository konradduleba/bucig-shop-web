import { ROUTES } from '@utils';

import { LinkIds, MenuLink } from './links.types';

export const MENU_LINK_CONFIGURATOR: MenuLink = {
  id: LinkIds.CONFIGURATOR,
  href: ROUTES.CONFIGURATOR(),
  imageRef: '/baner.jpg',
  label: 'Configurator',
};

export const MENU_LINK_JOIN_US: MenuLink = {
  id: LinkIds.JOIN_US,
  href: ROUTES.JOIN_US(),
  imageRef: '/baner2.jpg',
  label: 'Join us',
};

export const MENU_LINK_FALLBACK: MenuLink = {
  id: LinkIds.FALLBACK,
  href: ROUTES.HOME(),
  imageRef: '/fallback.jpeg',
  label: 'Fallback',
};

export const MENU_LINK_ELEMENTS: MenuLink[] = [
  MENU_LINK_CONFIGURATOR,
  MENU_LINK_JOIN_US,
];
