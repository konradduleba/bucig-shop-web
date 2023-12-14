import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Buciq - Loading',
  description: 'Buciq - Loading the page',
};

const Loading: FC = () => {
  return <p>Loading</p>;
};

export default Loading;
