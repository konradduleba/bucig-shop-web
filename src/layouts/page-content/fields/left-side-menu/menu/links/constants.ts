import { v4 as uuidv4 } from 'uuid';
import { MenuLink } from '@types';

export const MENU_FALLBACK: MenuLink = {
  id: uuidv4(),
  href: '',
  image: {
    url: '/fallback.jpeg',
  },
  isExternal: false,
  isVisible: false,
  title: 'Fallback',
};
