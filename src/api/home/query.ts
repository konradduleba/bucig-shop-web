import { useQuery } from '@tanstack/react-query';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { getHome } from './api';
import { extractAttributesFromGraphqlData } from '../utils';

export const useGetHome = (locale: Locales) => {
  const { data } = useQuery({
    queryKey: [QueryKey.HOME],
    queryFn: () => getHome(locale),
  });

  return extractAttributesFromGraphqlData(QueryKey.HOME, data);
};
