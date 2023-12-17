import { Metadata } from 'next';
import { FC } from 'react';

import { HomePage } from './home';

export const metadata: Metadata = {
  title: 'Bucig - Łokulary',
  description: 'Bucig - Opis Łokularów',
};

const Page: FC = () => {
  return <HomePage />;
};

export default Page;
