import { useI18nContext } from '@i18n';
import { ROUTES } from '@utils';
import { GetMenuListHook, LinkIds, MenuLink, MenuListElements } from '@types';

export const useGetMenuList = (): GetMenuListHook => {
  const { LL } = useI18nContext();

  const MENU_LINK_CONFIGURATOR: MenuLink = {
    id: LinkIds.CONFIGURATOR,
    href: ROUTES.CONFIGURATOR(),
    imageRef: '/baner.jpg',
    label: LL.MENU.CONFIGURATOR(),
  };

  const MENU_LINK_JOIN_US: MenuLink = {
    id: LinkIds.JOIN_US,
    href: ROUTES.JOIN_US(),
    imageRef: '/baner2.jpg',
    label: LL.MENU.JOIN_US(),
  };

  const MENU_LINK_FALLBACK: MenuLink = {
    id: LinkIds.FALLBACK,
    href: ROUTES.HOME(),
    imageRef: '/fallback.jpeg',
    label: LL.MENU.FALLBACK(),
  };

  const elements: MenuListElements = {
    MENU_LINK_CONFIGURATOR,
    MENU_LINK_JOIN_US,
    MENU_LINK_FALLBACK,
  };
  const menuList: MenuLink[] = [MENU_LINK_CONFIGURATOR, MENU_LINK_JOIN_US];
  const menuListWithFallback: MenuLink[] = [...menuList, MENU_LINK_FALLBACK];

  return {
    elements,
    menuList,
    menuListWithFallback,
  };
};
