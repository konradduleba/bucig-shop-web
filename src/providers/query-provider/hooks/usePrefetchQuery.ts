import { dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '../helpers';

export const usePrefetchQuery = () => {
  const { prefetchQuery, queryClient } = getQueryClient();

  const getDehydratedState = () => {
    return dehydrate(queryClient);
  };

  return {
    prefetchQuery,
    getDehydratedState,
  };
};
