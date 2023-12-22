import { useQuery } from '@tanstack/react-query';

import { QueryKey } from '../query-key';
import { getGeneral } from './api';
import { extractAttributesFromGraphqlData } from '../utils';

export const useGetGeneral = () => {
  const { data } = useQuery({
    queryKey: [QueryKey.GENERAL],
    queryFn: getGeneral,
  });

  return extractAttributesFromGraphqlData(QueryKey.GENERAL, data);
};
