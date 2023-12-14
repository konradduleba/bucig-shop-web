import { LinkIds, MenuLink } from '@types';

export type ActivePath = Pick<MenuLink, 'imageRef' | 'label' | 'id'>;

export interface ActivePathHook {
  activePath: ActivePath;
  onUpdateActivePath: (key: LinkIds) => void;
}
