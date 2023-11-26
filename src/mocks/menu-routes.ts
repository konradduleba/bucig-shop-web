import { MenuRoute } from '@types';
import { ROUTES } from '@utils';

export const NAVIGATION_ROUTES_DRAFT: MenuRoute[] = [
  {
    href: ROUTES.HOME(),
    name: 'Home',
  },
  {
    href: ROUTES.ABOUT_US(),
    name: 'About us',
  },
  {
    href: ROUTES.NEWS(),
    name: 'News',
  },
];

export const FOOTER_ROUTES_DRAFT: MenuRoute[] = [
  {
    href: ROUTES.CONFIGURATOR(),
    name: 'Configurator',
  },
  {
    href: ROUTES.JOIN_US(),
    name: 'Join us',
  },
  {
    href: ROUTES.LOGIN(),
    name: 'Login',
  },
  {
    href: ROUTES.MESSAGE_US(),
    name: 'Message us',
  },
  {
    href: ROUTES.PRIVACY_POLICY(),
    name: 'Private policy',
  },
];
