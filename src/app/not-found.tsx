import Link from 'next/link';
import { FC } from 'react';
import { ROUTES } from '@utils';

const NotFound: FC = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTES.HOME()}>Return Home</Link>
    </div>
  );
};

export default NotFound;
