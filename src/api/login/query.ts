import { useQuery } from '@tanstack/react-query';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { getLogin } from './api';
import {
  extractAttributesFromGraphqlData,
  extractImageAttributesFromGraphqlData,
} from '../utils';
import { IMAGE_FALLBACK } from '../constants';

export const useGetLogin = (locale: Locales) => {
  const { data } = useQuery({
    queryKey: [QueryKey.LOGIN],
    queryFn: () => getLogin(locale),
  });

  const extractedData = extractAttributesFromGraphqlData(QueryKey.LOGIN, data);

  if (!extractedData) {
    return undefined;
  }

  const backgroundImage =
    extractImageAttributesFromGraphqlData(extractedData.backgroundImage) ||
    IMAGE_FALLBACK;

  return {
    ...extractedData,
    backgroundImage,
  };
};
