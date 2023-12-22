import request from 'graphql-request';

import { Footer } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '../types';
import { createGraphqlGetQuery } from '../utils';
import { QueryKey } from '../query-key';

const footerAttributes = `
  menu {
    id
    title
    href
    isExternal
  }
  contact {
    id
    title
    href
    value
    isExternal
  }
`;

export const getFooter = async (
  locale: Locales,
): Promise<GraphqlResponse<Footer>> => {
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQuery(QueryKey.FOOTER, footerAttributes, locale),
  );
};
