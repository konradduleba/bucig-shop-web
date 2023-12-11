import { Metadata } from 'next';
import { FC } from 'react';

import { VIEWPORT_METADATA } from '@constants';

export const metadata: Metadata = {
  title: 'Bucig - About us',
  description: 'Bucig - Description about us',
  ...VIEWPORT_METADATA,
};

const Page: FC = () => {
  return (
    <div>
      <p>About us</p>
    </div>
  );
};

export default Page;
