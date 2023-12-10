import { useState, useEffect } from 'react';

const MOBILE_MAX_WIDTH = 767;
const TABLET_LG_MIN_WIDTH = 1024;
const DESKTOP_MIN_WIDTH = 1350;

export const useScreenType = () => {
  const [width, setWidth] = useState(0);

  const screenTypes = calculateScreenTypes(width);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screenTypes;
};

export function calculateScreenTypes(screenWidth?: number) {
  const width = screenWidth ?? window.innerWidth;
  const isMobile = width <= MOBILE_MAX_WIDTH;
  const isTabletSm = width > MOBILE_MAX_WIDTH && width < TABLET_LG_MIN_WIDTH;
  const isTablet = width > MOBILE_MAX_WIDTH && width < DESKTOP_MIN_WIDTH;
  const isTabletUp = width > MOBILE_MAX_WIDTH;
  const isTabletLgUp = width >= TABLET_LG_MIN_WIDTH;
  const isDesktop = width >= DESKTOP_MIN_WIDTH;

  return {
    isMobile,
    isTablet,
    isTabletSm,
    isTabletUp,
    isTabletLgUp,
    isDesktop,
  };
}

export default useScreenType;
