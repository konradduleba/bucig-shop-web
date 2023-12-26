import request from 'graphql-request';

import { Home } from '@types';

import { Locales } from '@i18n';

import { GraphqlResponse } from '@api';

import { QueryKey } from '../query-key';

import { createGraphqlGetQuery, getSeoAttributes } from '../utils';

const homeAttributes = `
  ${getSeoAttributes()}
  title
`;

export const getHome = async (
  locale: Locales,
): Promise<GraphqlResponse<Home>> => {
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQuery(QueryKey.HOME, homeAttributes, locale),
  );
};
