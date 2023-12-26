import { FC } from 'react';

import { PageWrapper } from '@layouts';
import { HomeData } from '@types';

export const HomePage: FC<HomeData> = ({ title }) => {
  return (
    <PageWrapper center>
      <p>{title}</p>
    </PageWrapper>
  );
};
