import { QueryClient, dehydrate } from '@tanstack/react-query';
import { cache } from 'react';

import { GraphqlResponse, QueryKey } from '@api';

const getQueryClient = cache(() => new QueryClient());

type RequestMethod<DataType> = () => Promise<GraphqlResponse<DataType>>;

export type CreateQueryMethod = <ResponseType>(
  queryKey: QueryKey[],
  queryFn: RequestMethod<ResponseType>,
) => Promise<void>;

export const useCreateQuery = () => {
  const queryClient = getQueryClient();

  const createQuery = <ResponseType>(
    queryKey: QueryKey[],
    queryFn: RequestMethod<ResponseType>,
  ) => {
    return queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
  };

  const getDehydratedState = () => {
    return dehydrate(queryClient);
  };

  return {
    createQuery,
    getDehydratedState,
  };
};
