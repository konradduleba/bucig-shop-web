import { Metadata } from 'next';

import { Locales } from '@i18n';

import { QueryKey, getHome, extractSeoMetadata, getLogin } from '@api';

import { getQueryClient } from '@providers';

import { Login } from './login';

const LOGIN_METADATA_FALLBACK: Metadata = {
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
  const response = await fetchQuery([QueryKey.LOGIN], () => getLogin(lang));

  const seo = extractSeoMetadata(QueryKey.LOGIN, response);

  return seo || LOGIN_METADATA_FALLBACK;
};

const Page = async ({ params: { lang } }: Props) => {
  const { fetchQuery } = getQueryClient();
  await fetchQuery([QueryKey.LOGIN], () => getLogin(lang));

  return <Login />;
};

export default Page;
