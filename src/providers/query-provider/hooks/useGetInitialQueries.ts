import { QueryKey, getFooter, getGeneral, getNavigation } from '@api';
import { Locales } from '@i18n';

import { Footer, General, Navigation } from '@types';

import { CreateQueryMethod, useCreateQuery } from './useCreateQuery';

const getQueries = (createQuery: CreateQueryMethod, locale: Locales) => {
  const generalQuery = createQuery<General>([QueryKey.GENERAL], getGeneral);
  const footerQuery = createQuery<Footer>([QueryKey.FOOTER], () =>
    getFooter(locale),
  );
  const navigationQuery = createQuery<Navigation>([QueryKey.NAVIGATION], () =>
    getNavigation(locale),
  );

  const queries = [generalQuery, footerQuery, navigationQuery];

  return {
    queries,
  };
};

export const useGetInitialQueries = async (locale: Locales) => {
  const { createQuery, getDehydratedState } = useCreateQuery();
  const { queries } = getQueries(createQuery, locale);

  await Promise.all(queries);

  const dehydratedState = getDehydratedState();

  return {
    dehydratedState,
  };
};
