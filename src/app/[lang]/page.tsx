import { Metadata } from 'next';

import { Locales } from '@i18n';

import { QueryKey, getHome, extractSeoMetadata } from '@api';

import { getQueryClient } from '@providers';

import { Home } from './home';

const HOME_METADATA_FALLBACK: Metadata = {
  title: 'Bucig - Fallback title',
  description: 'Bucig - Fallback description',
};

interface Props {
  params: { lang: Locales };
}

export const generateMetadata = async ({
  params: { lang },
}: Props): Promise<Metadata> => {
  const { fetchQuery } = getQueryClient();
  const response = await fetchQuery([QueryKey.HOME], () => getHome(lang));

  const seo = extractSeoMetadata(QueryKey.HOME, response);

  return seo || HOME_METADATA_FALLBACK;
};

const Page = async ({ params: { lang } }: Props) => {
  const { fetchQuery } = getQueryClient();
  await fetchQuery([QueryKey.HOME], () => getHome(lang));

  return <Home />;
};

export default Page;
