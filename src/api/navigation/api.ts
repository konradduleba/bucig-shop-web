import { Navigation } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery, getRequest } from '../utils';

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
  const query = createGraphqlGetQuery(
    QueryKey.NAVIGATION,
    navigationAttributes,
    locale,
  );
  return getRequest(query);
};
