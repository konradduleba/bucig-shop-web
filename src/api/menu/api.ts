import request from 'graphql-request';

import { MenuAPIResponse } from '@types';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { GraphqlResponse } from '../types';

import { createGraphqlGetQuery, getImageAttributes } from '../utils';

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
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQuery(QueryKey.MENU, menuAttributes, locale),
  );
};
