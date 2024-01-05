import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { FC } from 'react';
import { authConfig } from '@api';

export const metadata: Metadata = {
  title: 'Bucig - Dashboard',
  description: 'Bucig - Description Dashboard',
};

const Dashboard: FC = async () => {
  const session = await getServerSession(authConfig);

  console.log(session);

  return <div>Dashboard</div>;
};

export default Dashboard;
