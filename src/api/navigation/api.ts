import request from 'graphql-request';

import { Navigation } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery } from '../utils';

const navigationAttributes = `
  links {
    id
    title
    href
    isExternal
  }
`;

export const getNavigation = async (
  locale: Locales,
): Promise<GraphqlResponse<Navigation>> => {
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQuery(QueryKey.NAVIGATION, navigationAttributes, locale),
  );
};
