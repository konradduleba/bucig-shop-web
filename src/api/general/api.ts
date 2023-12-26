import request from 'graphql-request';

import { GeneralAPIResponse } from '@types';

import { QueryKey } from '../query-key';

import { GraphqlResponse } from '@api';

import {
  createGraphqlGetQueryWithoutLocale,
  getImageAttributes,
} from '../utils';

const generalAttributes = `
  companyName
  ${getImageAttributes(QueryKey.LOGO)}
  email
  phoneNumber
  openHours {
    id
    day
    from
    to
  }
  localization {
    href
    street
    postCode
    city
  }
`;

export const getGeneral = async (): Promise<
  GraphqlResponse<GeneralAPIResponse>
> => {
  return request(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    createGraphqlGetQueryWithoutLocale(QueryKey.GENERAL, generalAttributes),
  );
};
