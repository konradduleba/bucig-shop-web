import { useQuery } from '@tanstack/react-query';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { getMenu } from './api';
import {
  extractAttributesFromGraphqlData,
  extractImageAttributesFromGraphqlData,
} from '../utils';
import { IMAGE_FALLBACK } from '../constants';

export const useGetMenu = (locale: Locales) => {
  const { data } = useQuery({
    queryKey: [QueryKey.MENU],
    queryFn: () => getMenu(locale),
  });

  const extractedData = extractAttributesFromGraphqlData(QueryKey.MENU, data);

  if (!extractedData) {
    return undefined;
  }

  const links = extractedData.links.map((link) => ({
    ...link,
    image: extractImageAttributesFromGraphqlData(link.image) || IMAGE_FALLBACK,
  }));

  return {
    links,
  };
};
