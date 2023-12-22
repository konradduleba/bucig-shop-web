import { usePathname } from 'next/navigation';
import { useLayoutEffect, useRef } from 'react';

export const usePageTransition = () => {
  const pathname = usePathname();
  const lastPageRef = useRef<HTMLCollection | null>(null);
  const currentPageRef = useRef<HTMLDivElement>(null);
  const exitAnimationDivRef = useRef<HTMLDivElement>(null);

  const exitAnimationKey = pathname + 'exit-animation';
  const exitPageKey = pathname + 'exit-page';
  const loadAnimationKey = pathname + 'load-animation';

  useLayoutEffect(() => {
    if (!currentPageRef.current) return;
    if (!lastPageRef.current) {
      lastPageRef.current = currentPageRef.current.children;
    }

    console.log('pathname', pathname);
    exitAnimationDivRef.current?.appendChild(
      lastPageRef.current![0].cloneNode(true),
    );
    lastPageRef.current = currentPageRef.current.children;
  }, [pathname]);

  return {
    exitAnimationKey,
    exitPageKey,
    loadAnimationKey,
    exitAnimationDivRef,
    currentPageRef,
  };
};
