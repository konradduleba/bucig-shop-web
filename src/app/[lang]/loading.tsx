import { Metadata } from 'next';
import { FC } from 'react';

import { VIEWPORT_METADATA } from '@constants';

export const metadata: Metadata = VIEWPORT_METADATA;

const Loading: FC = () => {
  return <p>Loading</p>;
};

export default Loading;
