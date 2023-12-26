import { useQuery } from '@tanstack/react-query';

import { Locales } from '@i18n';

import { QueryKey } from '../query-key';

import { getFooter } from './api';
import { extractAttributesFromGraphqlData } from '../utils';

export const useGetFooter = (locale: Locales) => {
  const { data } = useQuery({
    queryKey: [QueryKey.FOOTER],
    queryFn: () => getFooter(locale),
  });

  return extractAttributesFromGraphqlData(QueryKey.FOOTER, data);
};
