import { Metadata } from 'next';

import NotFoundPage from '../../layouts/not-found/not-found';

export const metadata: Metadata = {
  title: 'Buciq 404 - Page not found',
  description:
    'Buciq - Page can not be found. Please check is page address is correct',
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
