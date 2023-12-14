import { usePathname } from 'next/navigation';

import { getActivePathKey } from '@utils';

export const useGetCurrentMenuListPathKey = () => {
  const pathname = usePathname();
  const pathKey = getActivePathKey(pathname);

  return {
    pathKey,
  };
};
