import { MenuAPIResponse } from '@types';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { GraphqlResponse } from '../types';

import {
  createGraphqlGetQuery,
  getImageAttributes,
  getRequest,
} from '../utils';

const menuAttributes = `
  links {
    id
    href
    title
    ${getImageAttributes(QueryKey.IMAGE)}
    isExternal
    isVisible
  }
`;

export const getMenu = async (
  locale: Locales,
): Promise<GraphqlResponse<MenuAPIResponse>> => {
  const query = createGraphqlGetQuery(QueryKey.MENU, menuAttributes, locale);
  return getRequest(query);
};
