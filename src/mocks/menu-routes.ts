import { MenuRoute } from '@types';
import { ROUTES } from '@utils';

export const MENU_ROUTES_DRAFT: MenuRoute[] = [
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
