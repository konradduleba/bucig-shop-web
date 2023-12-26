import { useInitialStateProvider } from '@providers';

import { usePathname } from 'next/navigation';

import { Link } from '@types';

import { getFallbackLink } from '../layouts/page-content/fields/left-side-menu/menu/links/helpers';

export const useCheckPath = () => {
  const pathname = usePathname();
  const {
    menu: { links },
  } = useInitialStateProvider();

  const fallbackItem = getFallbackLink(links);

  const getSelectedPath = (pathId: Link['id']) => {
    return links.find(({ id }) => id === pathId) || fallbackItem;
  };

  const currentPath =
    links.find(({ href }) => pathname.includes(href)) || fallbackItem;

  return {
    currentPath,
    getSelectedPath,
  };
};
