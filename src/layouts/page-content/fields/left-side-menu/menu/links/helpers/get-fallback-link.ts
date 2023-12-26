import { MenuLink } from '@types';

import { MENU_FALLBACK } from '../constants';

export const getFallbackLink = (links: MenuLink[]) => {
  const fallbackItem = links.find(({ title }) => title === 'fallback');

  return fallbackItem || MENU_FALLBACK;
};
