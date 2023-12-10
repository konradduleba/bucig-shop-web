import { useEffect } from 'react';

interface UseDisableBodyScrollProps {
  isDisable: boolean;
}
export const useDisableBodyScroll = ({
  isDisable,
}: UseDisableBodyScrollProps) => {
  useEffect(() => {
    if (isDisable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDisable]);
};
