import { useQuery } from '@tanstack/react-query';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';
import { getNavigation } from './api';
import { extractAttributesFromGraphqlData } from '../utils';

export const useGetNavigation = (locale: Locales) => {
  const { data } = useQuery({
    queryKey: [QueryKey.NAVIGATION],
    queryFn: () => getNavigation(locale),
  });

  return extractAttributesFromGraphqlData(QueryKey.NAVIGATION, data);
};
