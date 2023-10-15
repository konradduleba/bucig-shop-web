import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Bucig - Łokulary',
  description: 'Bucig - Opis Łokularów',
};

const Page: FC = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
    </div>
  );
};

export default Page;
