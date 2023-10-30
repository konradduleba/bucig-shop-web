'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    children,
    document.querySelector('#menu-portal') as Element,
  );
};

export default Portal;
