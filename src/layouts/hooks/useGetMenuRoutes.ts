import { MenuRoute } from '@types';
import { MENU_ROUTES_DRAFT } from '@mocks/menu-routes';

// @TODO Update after receiving menu elements from STRAPI, maybe external modification will be needed. If not remove this hook

export const useGetMenuRoutes = (): MenuRoute[] => {
  return MENU_ROUTES_DRAFT;
};
