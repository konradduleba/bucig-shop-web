import { LoginAPIResponse } from '@types';

import { Locales } from '@i18n';

import { ImageKey, QueryKey } from '../query-key';

import { GraphqlResponse } from '../types';

import {
  createGraphqlGetQuery,
  getImageAttributes,
  getRequest,
  getSeoAttributes,
} from '../utils';

const loginAttributes = `
  ${getSeoAttributes()}
  ${getImageAttributes(ImageKey.BACKGROUND_IMAGE)}
`;

export const getLogin = async (
  locale: Locales,
): Promise<GraphqlResponse<LoginAPIResponse>> => {
  const query = createGraphqlGetQuery(QueryKey.LOGIN, loginAttributes, locale);
  return getRequest(query);
};
