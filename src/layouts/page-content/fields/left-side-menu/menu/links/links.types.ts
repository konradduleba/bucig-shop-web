import { Link, MenuLink } from '@types';

export interface ActivePathHook {
  activePath: MenuLink;
  onUpdateActivePath: (key: Link['id']) => void;
}
