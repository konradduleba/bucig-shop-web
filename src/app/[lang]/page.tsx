import { Metadata } from 'next';
import { FC } from 'react';
import { VIEWPORT_METADATA } from '@constants';

export const metadata: Metadata = {
  title: 'Bucig - Łokulary',
  description: 'Bucig - Opis Łokularów',
  ...VIEWPORT_METADATA,
};

const Page: FC = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  );
};

export default Page;
