import { useEffect, useState } from 'react';

export const useGetFooterHeight = () => {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      const footer = document.querySelector('footer');

      footer && setFooterHeight(footer.offsetHeight);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    footerHeight,
  };
};
