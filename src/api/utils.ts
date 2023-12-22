import { gql } from 'graphql-request';

import { Locales } from '@i18n';

import { QueryKey } from './query-key';
import { GraphqlResponse } from './types';

export const extractAttributesFromGraphqlData = <AttributesType>(
  key: QueryKey,
  data: GraphqlResponse<AttributesType> | undefined,
): AttributesType | undefined => {
  if (!data || !data[key]) {
    return undefined;
  }
  return data[key].data.attributes;
};

export const createGraphqlGetQuery = (
  key: QueryKey,
  attributes: string,
  locale: Locales,
) => {
  return gql`
  query {
    ${key}(locale: "${locale}") {
      data {
        attributes {
          locale
          ${attributes}
        }
      }
    }
  }
`;
};

export const createGraphqlGetQueryWithoutLocale = (
  key: QueryKey,
  attributes: string,
) => {
  return gql`
  query {
    ${key} {
      data {
        attributes {
          ${attributes}
        }
      }
    }
  }
`;
};
