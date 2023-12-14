import { Metadata } from 'next';

import { VIEWPORT_METADATA } from '@constants';
import NotFoundPage from '../../layouts/not-found/not-found';

export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Page can not be found. Please check is page address is correct',
  ...VIEWPORT_METADATA,
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
