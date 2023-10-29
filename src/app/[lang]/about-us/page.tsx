import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Bucig - About us',
  description: 'Bucig - Description about us',
};

const Page: FC = () => {
  return (
    <div>
      <p>About us</p>
    </div>
  );
};

export default Page;
