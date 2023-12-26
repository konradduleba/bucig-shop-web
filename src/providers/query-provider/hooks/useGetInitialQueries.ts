import { QueryKey, getFooter, getGeneral, getNavigation, getMenu } from '@api';
import { Locales } from '@i18n';

import {
  Footer,
  GeneralAPIResponse,
  MenuAPIResponse,
  Navigation,
} from '@types';

import { usePrefetchQuery } from './usePrefetchQuery';
import { CreateQueryMethod } from '../helpers';

const getQueries = (createQuery: CreateQueryMethod, locale: Locales) => {
  const generalQuery = createQuery<GeneralAPIResponse>(
    [QueryKey.GENERAL],
    getGeneral,
  );
  const footerQuery = createQuery<Footer>([QueryKey.FOOTER], () =>
    getFooter(locale),
  );
  const navigationQuery = createQuery<Navigation>([QueryKey.NAVIGATION], () =>
    getNavigation(locale),
  );
  const menuQuery = createQuery<MenuAPIResponse>([QueryKey.MENU], () =>
    getMenu(locale),
  );

  const queries = [generalQuery, footerQuery, navigationQuery, menuQuery];

  return {
    queries,
  };
};

export const useGetInitialQueries = async (locale: Locales) => {
  const { prefetchQuery, getDehydratedState } = usePrefetchQuery();
  const { queries } = getQueries(prefetchQuery, locale);

  await Promise.all(queries);

  const dehydratedState = getDehydratedState();

  return {
    dehydratedState,
  };
};
