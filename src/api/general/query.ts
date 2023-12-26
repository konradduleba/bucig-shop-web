import { useQuery } from '@tanstack/react-query';

import { General } from '@types';

import { QueryKey } from '../query-key';

import { getGeneral } from './api';
import {
  extractAttributesFromGraphqlData,
  extractImageAttributesFromGraphqlData,
} from '../utils';
import { IMAGE_FALLBACK } from '../constants';

export const useGetGeneral = (): General | undefined => {
  const { data } = useQuery({
    queryKey: [QueryKey.GENERAL],
    queryFn: getGeneral,
  });

  const extractedData = extractAttributesFromGraphqlData(
    QueryKey.GENERAL,
    data,
  );

  if (!extractedData) {
    return undefined;
  }

  const logo =
    extractImageAttributesFromGraphqlData(extractedData.logo) || IMAGE_FALLBACK;

  return {
    ...extractedData,
    logo,
  };
};
