import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Bucig - News',
  description: 'Bucig - Description News',
};

const Page: FC = () => {
  return (
    <div>
      <p>News</p>
    </div>
  );
};

export default Page;
