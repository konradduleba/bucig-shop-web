import { Metadata } from 'next';

import { VIEWPORT_METADATA } from '@constants';
import NotFoundPage from '../../layouts/not-found/not-found';

export const metadata: Metadata = VIEWPORT_METADATA;

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
