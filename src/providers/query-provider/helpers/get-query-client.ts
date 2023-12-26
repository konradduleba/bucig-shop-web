import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';
import { QueryKey, GraphqlResponse } from '@api';

const createQueryClient = cache(() => new QueryClient());

type RequestMethod<DataType> = () => Promise<GraphqlResponse<DataType>>;

export type CreateQueryMethod = <ResponseType>(
  queryKey: QueryKey[],
  queryFn: RequestMethod<ResponseType>,
) => Promise<void>;

export const getQueryClient = () => {
  const queryClient = createQueryClient();

  const prefetchQuery = <ResponseType>(
    queryKey: QueryKey[],
    queryFn: RequestMethod<ResponseType>,
  ) => {
    return queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
  };

  const fetchQuery = <ResponseType>(
    queryKey: QueryKey[],
    queryFn: RequestMethod<ResponseType>,
  ) => {
    return queryClient.fetchQuery({
      queryKey,
      queryFn,
    });
  };

  return {
    queryClient,
    fetchQuery,
    prefetchQuery,
  };
};
