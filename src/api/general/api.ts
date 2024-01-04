import { GeneralAPIResponse } from '@types';

import { ImageKey, QueryKey } from '../query-key';

import { GraphqlResponse } from '@api';

import {
  createGraphqlGetQueryWithoutLocale,
  getImageAttributes,
  getRequest,
} from '../utils';

const generalAttributes = `
  companyName
  ${getImageAttributes(ImageKey.LOGO)}
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
  const query = createGraphqlGetQueryWithoutLocale(
    QueryKey.GENERAL,
    generalAttributes,
  );
  return getRequest(query);
};
