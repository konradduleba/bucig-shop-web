import { redirect, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';

import { PROTECTED_ROUTES } from '@utils';

import { ROUTES_TO_REDIRECT } from './protected-routes-consts';

export const ProtectedRoutesGuard: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();
  const pathname = usePathname();

  const isRouteToRedirectIncluded = ROUTES_TO_REDIRECT.some((route) =>
    pathname.includes(route),
  );

  if (status === 'authenticated' && isRouteToRedirectIncluded) {
    return redirect(PROTECTED_ROUTES.DASHBOARD());
  }

  return <>{children}</>;
};
