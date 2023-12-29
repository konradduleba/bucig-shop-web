import { Home } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery, getRequest, getSeoAttributes } from '../utils';

const homeAttributes = `
  ${getSeoAttributes()}
  title
`;

export const getHome = async (
  locale: Locales,
): Promise<GraphqlResponse<Home>> => {
  const query = createGraphqlGetQuery(QueryKey.HOME, homeAttributes, locale);
  return getRequest(query);
};
