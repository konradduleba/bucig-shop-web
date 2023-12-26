import { Link } from '@types';

type NavLink = Pick<Link, 'id' | 'href' | 'title' | 'isExternal'>;

export interface Navigation {
  links: NavLink[];
}
