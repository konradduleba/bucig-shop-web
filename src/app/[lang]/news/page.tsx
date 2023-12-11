import { Metadata } from 'next';
import { FC } from 'react';

import { VIEWPORT_METADATA } from '@constants';

export const metadata: Metadata = {
  title: 'Bucig - News',
  description: 'Bucig - Description News',
  ...VIEWPORT_METADATA,
};

const Page: FC = () => {
  return (
    <div>
      <p>News</p>
    </div>
  );
};

export default Page;
