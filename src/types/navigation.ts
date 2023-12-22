import { LinkProps } from '@components/custom-link/custom-link';

type MenuLink = Pick<LinkProps, 'id' | 'href' | 'title'> & {
  isExternal: boolean;
};

type Menu = MenuLink[];

export interface Navigation {
  menu: Menu;
}
