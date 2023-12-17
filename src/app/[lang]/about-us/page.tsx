import { Metadata } from 'next';
import { FC } from 'react';

import { AboutUsPage } from './about-us';

export const metadata: Metadata = {
  title: 'Bucig - About us',
  description: 'Bucig - Description about us',
};

const Page: FC = () => {
  return <AboutUsPage />;
};

export default Page;
