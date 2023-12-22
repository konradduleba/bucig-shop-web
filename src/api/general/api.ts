import request from 'graphql-request';

import { General } from '@types';

import { GraphqlResponse } from '../types';
import { createGraphqlGetQueryWithoutLocale } from '../utils';
import { QueryKey } from '../query-key';

const generalAttributes = `
  companyName
`;

export const getGeneral = async (): Promise<GraphqlResponse<General>> => {
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQueryWithoutLocale(QueryKey.GENERAL, generalAttributes),
  );
};
