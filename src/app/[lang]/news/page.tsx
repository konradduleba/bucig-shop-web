import { Metadata } from 'next';
import { FC } from 'react';

import { NewsPage } from './news';

export const metadata: Metadata = {
  title: 'Bucig - News',
  description: 'Bucig - Description News',
};

const Page: FC = () => {
  return <NewsPage />;
};

export default Page;
