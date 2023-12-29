import { Footer } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery, getRequest } from '../utils';

const footerAttributes = `
  links {
    id
    title
    href
    isExternal
  }
`;

export const getFooter = async (
  locale: Locales,
): Promise<GraphqlResponse<Footer>> => {
  const query = createGraphqlGetQuery(
    QueryKey.FOOTER,
    footerAttributes,
    locale,
  );
  return getRequest(query);
};
