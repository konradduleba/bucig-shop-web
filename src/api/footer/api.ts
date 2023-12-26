import request from 'graphql-request';

import { Footer } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery } from '../utils';

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
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQuery(QueryKey.FOOTER, footerAttributes, locale),
  );
};
