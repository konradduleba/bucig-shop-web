import { useEffect } from 'react';

export const OVERLAY_ID = `overlay_${+new Date()}`;
const DISABLED_SCROLL_CLASS = 'disableScroll';

interface Props {
  hasDisabledScroll?: boolean;
  onClickOverlay?: () => unknown;
}

const useOverlay = ({ hasDisabledScroll = true, onClickOverlay }: Props) => {
  const listener = (
    event: MouseEvent | TouchEvent | { target: HTMLInputElement },
  ) => {
    const target = (event as { target: HTMLInputElement }).target;

    if (target.id === OVERLAY_ID) {
      onClickOverlay?.();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    hasDisabledScroll && document.body.classList.add(DISABLED_SCROLL_CLASS);

    return () => {
      hasDisabledScroll &&
        document.body.classList.remove(DISABLED_SCROLL_CLASS);

      document.removeEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOverlay;
